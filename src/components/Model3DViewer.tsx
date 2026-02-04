import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function LoadingSpinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-12 h-12 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
    </div>
  );
}

function DemoCarModel() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Car body */}
      <mesh position={[0, 0.4, 0]} castShadow>
        <boxGeometry args={[2, 0.5, 4]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Car top */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <boxGeometry args={[1.6, 0.4, 2]} />
        <meshStandardMaterial color="#16213e" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Windshield */}
      <mesh position={[0, 0.8, 1.1]} rotation={[Math.PI / 6, 0, 0]} castShadow>
        <boxGeometry args={[1.5, 0.4, 0.05]} />
        <meshStandardMaterial color="#0ea5e9" metalness={0.3} roughness={0} transparent opacity={0.6} />
      </mesh>
      
      {/* Wheels */}
      {[[-0.9, 0.15, 1.3], [0.9, 0.15, 1.3], [-0.9, 0.15, -1.3], [0.9, 0.15, -1.3]].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
          <meshStandardMaterial color="#0f0f0f" metalness={0.8} roughness={0.2} />
        </mesh>
      ))}
      
      {/* Headlights */}
      <mesh position={[-0.6, 0.4, 2]} castShadow>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={2} />
      </mesh>
      <mesh position={[0.6, 0.4, 2]} castShadow>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={2} />
      </mesh>
      
      {/* Taillights */}
      <mesh position={[-0.7, 0.4, -2]} castShadow>
        <boxGeometry args={[0.2, 0.1, 0.05]} />
        <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={1} />
      </mesh>
      <mesh position={[0.7, 0.4, -2]} castShadow>
        <boxGeometry args={[0.2, 0.1, 0.05]} />
        <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={1} />
      </mesh>
      
      {/* Neon underglow */}
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[1.8, 0.02, 3.8]} />
        <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={0.5} transparent opacity={0.8} />
      </mesh>
    </group>
  );
}

interface Model3DViewerProps {
  autoRotate?: boolean;
  showControls?: boolean;
  height?: string;
}

export function Model3DViewer({ 
  autoRotate = true, 
  showControls = true,
  height = "400px"
}: Model3DViewerProps) {
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
          
          <DemoCarModel />
          
          <ContactShadows 
            position={[0, -0.1, 0]} 
            opacity={0.5} 
            scale={10} 
            blur={2} 
            far={5} 
          />
          
          <Environment preset="night" />
          
          {showControls && (
            <OrbitControls 
              autoRotate={autoRotate}
              autoRotateSpeed={1}
              enablePan={true}
              enableZoom={true}
              minDistance={3}
              maxDistance={15}
              minPolarAngle={Math.PI / 6}
              maxPolarAngle={Math.PI / 2}
            />
          )}
        </Canvas>
      </Suspense>
      
      {/* Viewer controls hint */}
      {showControls && (
        <div className="absolute bottom-4 left-4 text-xs text-muted-foreground flex items-center gap-4">
          <span>🖱️ Drag to rotate</span>
          <span>🔍 Scroll to zoom</span>
        </div>
      )}
    </div>
  );
}
