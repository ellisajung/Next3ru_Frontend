import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["Mesh7189_Gini-right"]: THREE.Mesh;
    ["Mesh7827_Gini-center"]: THREE.Mesh;
    ["Mesh19819_Gini-left"]: THREE.Mesh;
  };
  materials: {};
};

export function GiniModel({ showModal, handleMeshClick }: any) {
  const { nodes, materials } = useGLTF("/models/gini.glb") as GLTFResult;
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh7189_Gini-right"].geometry}
        material={nodes["Mesh7189_Gini-right"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh7827_Gini-center"].geometry}
        material={nodes["Mesh7827_Gini-center"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh19819_Gini-left"].geometry}
        material={nodes["Mesh19819_Gini-left"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
    </group>
  );
}

useGLTF.preload("/models/gini.glb");
