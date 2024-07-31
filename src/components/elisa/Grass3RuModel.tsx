import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["Mesh1608_Grass-3ru"]: THREE.Mesh;
  };
  materials: {};
};

export function Grass3RuModel({ showModal, handleMeshClick }: any) {
  const { nodes, materials } = useGLTF("/models/grass-3ru.glb") as GLTFResult;
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh1608_Grass-3ru"].geometry}
        material={nodes["Mesh1608_Grass-3ru"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
    </group>
  );
}

useGLTF.preload("/models/grass-3ru.glb");
