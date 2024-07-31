import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["Mesh2655_Grass-1ru"]: THREE.Mesh;
  };
  materials: {};
};

export function Grass1RuModel({ showModal, handleMeshClick }: any) {
  const { nodes, materials } = useGLTF("/models/grass-1ru.glb") as GLTFResult;
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh2655_Grass-1ru"].geometry}
        material={nodes["Mesh2655_Grass-1ru"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
    </group>
  );
}

useGLTF.preload("/models/grass-1ru.glb");
