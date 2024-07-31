import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["Mesh15721_Kidsland-5th"]: THREE.Mesh;
  };
  materials: {};
};

export function Kidsland5thModel({ showModal, handleMeshClick }: any) {
  const { nodes, materials } = useGLTF(
    "/models/kidsland-5th.glb",
  ) as GLTFResult;
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh15721_Kidsland-5th"].geometry}
        material={nodes["Mesh15721_Kidsland-5th"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
    </group>
  );
}

useGLTF.preload("/models/kidsland-5th.glb");
