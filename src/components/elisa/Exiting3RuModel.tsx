import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["Mesh22083_3Ru-exiting"]: THREE.Mesh;
  };
  materials: {};
};

export function Exiting3RuModel({ showModal, handleMeshClick }: any) {
  const { nodes, materials } = useGLTF("/models/exiting-3ru.glb") as GLTFResult;
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh22083_3Ru-exiting"].geometry}
        material={nodes["Mesh22083_3Ru-exiting"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
    </group>
  );
}

useGLTF.preload("/models/exiting-3ru.glb");
