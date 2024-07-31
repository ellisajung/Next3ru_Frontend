import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["Mesh2887_Tving-table"]: THREE.Mesh;
  };
  materials: {};
};

export function TvingTableModel({ showModal, handleMeshClick }: any) {
  const { nodes, materials } = useGLTF("/models/tving-table.glb") as GLTFResult;
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh2887_Tving-table"].geometry}
        material={nodes["Mesh2887_Tving-table"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
    </group>
  );
}

useGLTF.preload("/models/tving-table.glb");
