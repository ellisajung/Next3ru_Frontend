import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["Mesh8072_Kt-alpha-right"]: THREE.Mesh;
    ["Mesh8269_Kt-alpha-center"]: THREE.Mesh;
    ["Mesh8401_Kt-alpha-left"]: THREE.Mesh;
  };
  materials: {};
};

export function KtAlphaModel({ showModal, handleMeshClick }: any) {
  const { nodes, materials } = useGLTF("/models/kt-alpha.glb") as GLTFResult;
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh8072_Kt-alpha-right"].geometry}
        material={nodes["Mesh8072_Kt-alpha-right"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh8269_Kt-alpha-center"].geometry}
        material={nodes["Mesh8269_Kt-alpha-center"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh8401_Kt-alpha-left"].geometry}
        material={nodes["Mesh8401_Kt-alpha-left"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
    </group>
  );
}

useGLTF.preload("/models/kt-alpha.glb");
