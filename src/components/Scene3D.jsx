import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function AbstractShape() {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    if (ref.current) {
      // smoother rotation
      ref.current.rotation.x = t * 0.18;
      ref.current.rotation.y = t * 0.35;

      // floating motion
      ref.current.position.y = Math.sin(t) * 0.25;

      // subtle breathing scale
      const scale = 1 + Math.sin(t * 2) * 0.025;
      ref.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[1.1, 0.35, 180, 32]} />
      <meshStandardMaterial
        color="#0a0a0a"
        emissive="#FF0000"
        emissiveIntensity={0.8}
        metalness={1}
        roughness={0.18}
      />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>

      {/* soft ambient */}
      <ambientLight intensity={0.18} />

      {/* main red light */}
      <pointLight
        position={[4, 4, 4]}
        intensity={2}
        color="#FF0000"
      />

      {/* gold accent */}
      <pointLight
        position={[-4, -4, -4]}
        intensity={1.2}
        color="#FFD700"
      />

      {/* back rim light (THIS IS THE MAGIC) */}
      <pointLight
        position={[0, 0, -5]}
        intensity={1.3}
        color="#FF0000"
      />

      {/* top highlight */}
      <pointLight
        position={[0, 5, 0]}
        intensity={0.8}
        color="#FFD700"
      />

      <AbstractShape />
    </Canvas>
  );
}