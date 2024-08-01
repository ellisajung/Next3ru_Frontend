import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["Mesh15944_Gini-tv_zone-116"]: THREE.Mesh;
    ["Mesh18309_Gini-tv_zone-226"]: THREE.Mesh;
    ["Mesh18613_Gini-tv_zone-323"]: THREE.Mesh;
    ["Mesh22240_Gini-tv_zone-117"]: THREE.Mesh;
    ["Mesh22432_Gini-tv_zone-118"]: THREE.Mesh;
    ["Mesh23420_Gini-tv_zone-225"]: THREE.Mesh;
    ["Mesh23667_Gini-tv_zone-322"]: THREE.Mesh;
    ["Mesh26793_Gini-tv_zone-321"]: THREE.Mesh;
    ["Mesh29225_Gini-tv_zone-224"]: THREE.Mesh;
  };
  materials: {};
};

export function GiniTvModel({ showModal, handleMeshClick }: any) {
  const { nodes, materials } = useGLTF("/models/gini-tv.glb") as GLTFResult;
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh15944_Gini-tv_zone-116"].geometry}
        material={nodes["Mesh15944_Gini-tv_zone-116"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh18309_Gini-tv_zone-226"].geometry}
        material={nodes["Mesh18309_Gini-tv_zone-226"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh18613_Gini-tv_zone-323"].geometry}
        material={nodes["Mesh18613_Gini-tv_zone-323"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh22240_Gini-tv_zone-117"].geometry}
        material={nodes["Mesh22240_Gini-tv_zone-117"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh22432_Gini-tv_zone-118"].geometry}
        material={nodes["Mesh22432_Gini-tv_zone-118"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh23420_Gini-tv_zone-225"].geometry}
        material={nodes["Mesh23420_Gini-tv_zone-225"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh23667_Gini-tv_zone-322"].geometry}
        material={nodes["Mesh23667_Gini-tv_zone-322"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh26793_Gini-tv_zone-321"].geometry}
        material={nodes["Mesh26793_Gini-tv_zone-321"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh29225_Gini-tv_zone-224"].geometry}
        material={nodes["Mesh29225_Gini-tv_zone-224"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
    </group>
  );
}

useGLTF.preload("/models/gini-tv.glb");
