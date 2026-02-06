import { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, PerspectiveCamera, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function LoadingSpinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
      <div className="text-center">
        <div className="w-12 h-12 border-2 border-primary/20 border-t-primary rounded-full animate-spin mx-auto" />
        <p className="mt-4 text-white">Loading 3D Model...</p>
      </div>
    </div>
  );
}

function Model({ modelUrl }: { modelUrl: string }) {
  const groupRef = useRef<THREE.Group>(null);
  
  console.log('🔄 Attempting to load model from:', modelUrl);
  
  const gltf = useGLTF(modelUrl);
  
  useEffect(() => {
    console.log('✅ Model loaded successfully:', gltf);
  }, [gltf]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  return <primitive ref={groupRef} object={gltf.scene} />;
}

interface GLBModelViewerProps {
  modelUrl: string;
  height?: string;
  autoRotate?: boolean;
  showControls?: boolean;
}

export function GLBModelViewer({
  modelUrl,
  height = "400px",
  autoRotate = true,
  showControls = true
}: GLBModelViewerProps) {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  console.log('🎯 GLBModelViewer props:', { modelUrl, height, autoRotate, showControls });

  useEffect(() => {
    // Preload the model to catch errors early
    const loadModel = async () => {
      try {
        setIsLoading(true);
        console.log('📦 Preloading model from:', modelUrl);
        
        const response = await fetch(modelUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch model: ${response.status} ${response.statusText}`);
        }
        
        const blob = await response.blob();
        console.log('✅ Model file fetched successfully. Size:', blob.size, 'bytes');
        setIsLoading(false);
      } catch (err: any) {
        console.error('❌ Error loading model:', err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    loadModel();
  }, [modelUrl]);

  if (error) {
    return (
      <div
        className="relative w-full rounded-2xl overflow-hidden glass-card flex items-center justify-center"
        style={{ height }}
      >
        <div className="text-center p-8">
          <div className="text-6xl mb-4">⚠️</div>
          <h3 className="text-xl font-semibold text-red-400 mb-2">Failed to Load 3D Model</h3>
          <p className="text-sm text-muted-foreground mb-4">{error}</p>
          <p className="text-xs text-muted-foreground/70">
            Model path: <code className="bg-black/20 px-2 py-1 rounded">{modelUrl}</code>
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2">
            Check browser console for more details
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden glass-card"
      style={{ height }}
    >
      <Suspense fallback={<LoadingSpinner />}>
        <Canvas
          shadows
          dpr={[1, 2]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          onCreated={({ gl }) => {
            console.log('🎨 Canvas created successfully');
            gl.setClearColor('#000000', 1);
          }}
          onError={(error) => {
            console.error('❌ Canvas error:', error);
            setError(error.message || 'WebGL error occurred');
          }}
        >
          <PerspectiveCamera makeDefault position={[5, 3, 5]} fov={50} />

          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.3} color="#0ea5e9" />
          <pointLight position={[0, 5, 0]} intensity={0.2} color="#a855f7" />

          {/* Model */}
          <Model modelUrl={modelUrl} />

          {/* Ground */}
          <ContactShadows
            position={[0, -1, 0]}
            opacity={0.4}
            scale={10}
            blur={2}
            far={4}
          />
          
          {/* Environment */}
          <Environment preset="sunset" />

          {/* Controls */}
          {showControls && (
            <OrbitControls
              autoRotate={autoRotate}
              autoRotateSpeed={0.5}
              enablePan={true}
              enableZoom={true}
              minDistance={2}
              maxDistance={20}
              minPolarAngle={0}
              maxPolarAngle={Math.PI / 1.5}
            />
          )}
        </Canvas>
      </Suspense>

      {/* Controls hint */}
      {showControls && !error && (
        <div className="absolute bottom-4 left-4 right-4 text-xs text-white/70 bg-black/30 backdrop-blur-sm rounded-lg p-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span>🖱️ Drag to rotate</span>
            <span>🔍 Scroll to zoom</span>
          </div>
          {isLoading && (
            <span className="text-primary animate-pulse">Loading...</span>
          )}
        </div>
      )}
    </div>
  );
}
