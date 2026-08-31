import { useMemo } from "react";
import { Line } from "@react-three/drei";
import * as THREE from "three";

export default function NetworkLines() {

  const lines = useMemo(() => {

    const arr = [];

    for (let i = 0; i < 120; i++) {

      const p1 = new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8
      );

      const p2 = new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8
      );

      arr.push([p1, p2]);

    }

    return arr;

  }, []);

  return (
    <>
      {lines.map((points, index) => (
        <Line
          key={index}
          points={points}
          color="#00e5ff"
          transparent
          opacity={0.15}
          lineWidth={1}
        />
      ))}
    </>
  );
}