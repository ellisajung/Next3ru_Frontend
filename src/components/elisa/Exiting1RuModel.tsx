import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["Mesh6965_1Ru-exiting"]: THREE.Mesh;
  };
  materials: {};
};

export function Exiting1RuModel({ showModal, handleMeshClick }: any) {
  const { nodes, materials } = useGLTF("/models/exiting-1ru.glb") as GLTFResult;
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh6965_1Ru-exiting"].geometry}
        material={nodes["Mesh6965_1Ru-exiting"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
    </group>
  );
}

useGLTF.preload("/models/exiting-1ru.glb");
