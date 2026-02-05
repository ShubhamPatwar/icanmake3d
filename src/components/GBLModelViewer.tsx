import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, PerspectiveCamera, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function LoadingSpinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-12 h-12 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
    </div>
  );
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
  const groupRef = useRef<THREE.Group>(null);
  const gltf = useGLTF(modelUrl) as any;

  useFrame(() => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden glass-card"
      style={{ height }}
    >
      <Suspense fallback={<LoadingSpinner />}>
        <Canvas shadows dpr={[1, 2]}>
          <PerspectiveCamera makeDefault position={[4, 3, 6]} fov={45} />

          <ambientLight intensity={0.3} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.3}
            penumbra={1}
            intensity={1.5}
            castShadow
            shadow-mapSize={[2048, 2048]}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0ea5e9" />
          <pointLight position={[0, 5, 0]} intensity={0.3} color="#a855f7" />

          <primitive ref={groupRef} object={gltf.scene} />

          <ContactShadows position={[0, -0.1, 0]} opacity={0.5} scale={10} blur={2} far={5} />
          <Environment preset="night" />

          {showControls && (
            <OrbitControls
              autoRotate={autoRotate}
              autoRotateSpeed={1}
              enablePan
              enableZoom
              minDistance={3}
              maxDistance={15}
              minPolarAngle={Math.PI / 6}
              maxPolarAngle={Math.PI / 2}
            />
          )}
        </Canvas>
      </Suspense>

      {showControls && (
        <div className="absolute bottom-4 left-4 text-xs text-muted-foreground flex items-center gap-4">
          <span>🖱️ Drag to rotate</span>
          <span>🔍 Scroll to zoom</span>
        </div>
      )}
    </div>
  );
}