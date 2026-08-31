import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function NeuralNetwork() {
  const group = useRef();

  const particles = useMemo(() => {
    const arr = [];

    for (let i = 0; i < 180; i++) {
      arr.push({
        x: (Math.random() - 0.5) * 20,
        y: (Math.random() - 0.5) * 12,
        z: (Math.random() - 0.5) * 8,

        speed: Math.random() * 0.5 + 0.2,
        offset: Math.random() * Math.PI * 2,
      });
    }

    return arr;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (!group.current) return;

    group.current.children.forEach((mesh, i) => {
      const p = particles[i];

      // Original position ke around hi move karega
      mesh.position.x = p.x + Math.cos(t * p.speed + p.offset) * 0.3;
      mesh.position.y = p.y + Math.sin(t * p.speed + p.offset) * 0.3;
      mesh.position.z = p.z + Math.sin(t * p.speed) * 0.15;

      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
    });

    group.current.rotation.y = t * 0.05;
  });

  return (
    <group ref={group}>
      {particles.map((p, i) => (
        <mesh
          key={i}
          position={[p.x, p.y, p.z]}
        >
          <sphereGeometry args={[0.06, 16, 16]} />

          <meshStandardMaterial
            color="#00e5ff"
            emissive="#00e5ff"
            emissiveIntensity={4}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}