"use client";

import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

function Knot() {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    if (!mesh.current) return;
    mesh.current.rotation.x += 0.003;
    mesh.current.rotation.y += 0.004;
  });
  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <torusKnotGeometry args={[1.2, 0.35, 256, 32]} />
      <meshStandardMaterial
        envMapIntensity={0.8}
        metalness={0.7}
        roughness={0.15}
        color={"#7aa2ff"}
      />
    </mesh>
  );
}

export default function ThreeBG() {
  return (
    <Canvas
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
      camera={{ position: [0, 0, 5.5], fov: 55 }}
    >
      <color attach="background" args={["#0b1020"]} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 2, 4]} intensity={2.4} />
      <Knot />
    </Canvas>
  );
}
