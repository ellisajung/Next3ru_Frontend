import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["Mesh23780_Y-box_zone-114"]: THREE.Mesh;
    ["Mesh23940_Y-box_zone-115"]: THREE.Mesh;
    ["Mesh24131_Y-box_zone-214"]: THREE.Mesh;
    ["Mesh24329_Y-box_zone-311"]: THREE.Mesh;
    ["Mesh24550_Y-box_zone-312"]: THREE.Mesh;
    ["Mesh24648_Y-box_zone-215"]: THREE.Mesh;
    ["Mesh26049_Y-box_zone-310"]: THREE.Mesh;
    ["Mesh26234_Y-box_zone-213"]: THREE.Mesh;
    ["Mesh26341_Y-box_zone-113"]: THREE.Mesh;
  };
  materials: {};
};

export function YBoxModel({ showModal, handleMeshClick }: any) {
  const { nodes, materials } = useGLTF("/models/y-box.glb") as GLTFResult;
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh23780_Y-box_zone-114"].geometry}
        material={nodes["Mesh23780_Y-box_zone-114"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh23940_Y-box_zone-115"].geometry}
        material={nodes["Mesh23940_Y-box_zone-115"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh24131_Y-box_zone-214"].geometry}
        material={nodes["Mesh24131_Y-box_zone-214"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh24329_Y-box_zone-311"].geometry}
        material={nodes["Mesh24329_Y-box_zone-311"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh24550_Y-box_zone-312"].geometry}
        material={nodes["Mesh24550_Y-box_zone-312"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh24648_Y-box_zone-215"].geometry}
        material={nodes["Mesh24648_Y-box_zone-215"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh26049_Y-box_zone-310"].geometry}
        material={nodes["Mesh26049_Y-box_zone-310"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh26234_Y-box_zone-213"].geometry}
        material={nodes["Mesh26234_Y-box_zone-213"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh26341_Y-box_zone-113"].geometry}
        material={nodes["Mesh26341_Y-box_zone-113"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
    </group>
  );
}

useGLTF.preload("/models/y-box.glb");
