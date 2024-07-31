import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["Mesh3475_Kidsland-4th"]: THREE.Mesh;
  };
  materials: {};
};

export function Kidsland4thModel({ showModal, handleMeshClick }: any) {
  const { nodes, materials } = useGLTF(
    "/models/kidsland-4th.glb",
  ) as GLTFResult;
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh3475_Kidsland-4th"].geometry}
        material={nodes["Mesh3475_Kidsland-4th"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
    </group>
  );
}

useGLTF.preload("/models/kidsland-4th.glb");
