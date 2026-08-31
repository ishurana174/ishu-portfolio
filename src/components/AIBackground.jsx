import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import NeuralNetwork from "./NeuralNetwork";
import NetworkLines from "./NetworkLines";

export default function AIBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
        overflow: "hidden",
        background: "#050816",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 12], fov: 70 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={1} />

        <pointLight
          position={[6, 6, 6]}
          intensity={2}
          color="#00e5ff"
        />

        <pointLight
          position={[-6, -6, -6]}
          intensity={1}
          color="#00ffff"
        />

        {/* Dynamic Lines */}
        <NetworkLines />

        {/* Moving Nodes */}
        <NeuralNetwork />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}