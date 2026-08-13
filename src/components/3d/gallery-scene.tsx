"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame, type ThreeEvent } from "@react-three/fiber";
import { Image as DreiImage } from "@react-three/drei";
import type { Group } from "three";

type Frame = {
  src: string;
  position: [number, number, number];
  rotation: [number, number, number];
  size: [number, number];
};

const frames: Frame[] = [
  { src: "https://images-pw.pixieset.com/site/Nzxa6b/kLYQyq/_MG_3313-159cc4f1-1500.png", position: [-2.6, 0.3, -0.6], rotation: [0, 0.28, 0.03], size: [1.6, 2.1] },
  { src: "https://images-pw.pixieset.com/site/Nzxa6b/l9jLDG/bothofacingview-2-c8dd681e-1500.jpg", position: [-1, -0.4, 0.6], rotation: [0, 0.12, -0.02], size: [1.4, 1.9] },
  { src: "https://images-pw.pixieset.com/site/Nzxa6b/PrEb7y/DSC_0454-67abd68a-1500.jpg", position: [0.6, 0.5, 1], rotation: [0, -0.05, 0.02], size: [1.7, 2.2] },
  { src: "https://images-pw.pixieset.com/site/Nzxa6b/AAQ66z/Camrooproductionsrealestatephotography1-57212e86-1500.jpg", position: [2.1, -0.2, 0.1], rotation: [0, -0.22, -0.03], size: [2, 1.4] },
  { src: "https://images-pw.pixieset.com/site/Nzxa6b/ProJE3/_MG_9674-07544993-1500.jpg", position: [0, -0.9, -0.9], rotation: [0, 0.04, 0], size: [1.5, 2] },
];

function Frame({ frame }: { frame: Frame }) {
  const [hovered, setHovered] = useState(false);
  return (
    <DreiImage
      url={frame.src}
      position={frame.position}
      rotation={frame.rotation}
      scale={hovered ? [frame.size[0] * 1.05, frame.size[1] * 1.05] : frame.size}
      transparent
      onPointerOver={(e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
    />
  );
}

function Scene() {
  const groupRef = useRef<Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    pointer.current.x = state.pointer.x;
    pointer.current.y = state.pointer.y;
    groupRef.current.rotation.y += delta * 0.05;
    groupRef.current.rotation.y +=
      (pointer.current.x * 0.15 - groupRef.current.rotation.y * 0.02) * delta;
    groupRef.current.rotation.x +=
      (pointer.current.y * -0.08 - groupRef.current.rotation.x) * delta * 2;
  });

  return (
    <group ref={groupRef}>
      {frames.map((frame) => (
        <Frame key={frame.src} frame={frame} />
      ))}
    </group>
  );
}

export default function GalleryScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Scene />
    </Canvas>
  );
}
