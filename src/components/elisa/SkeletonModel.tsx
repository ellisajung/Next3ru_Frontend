import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh17_Group17_Group_382_1_Model: THREE.Mesh;
  };
  materials: {};
};

export function SkeletonModel({ showModal, handleMeshClick }: any) {
  const { nodes, materials } = useGLTF("/models/skeleton.glb") as GLTFResult;
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh17_Group17_Group_382_1_Model.geometry}
        material={nodes.Mesh17_Group17_Group_382_1_Model.material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
    </group>
  );
}

useGLTF.preload("/models/skeleton.glb");
