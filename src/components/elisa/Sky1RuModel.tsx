import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["Mesh10445_Sky-1ru_zone-401"]: THREE.Mesh;
    ["Mesh10445_Sky-1ru_zone-402"]: THREE.Mesh;
    ["Mesh10445_Sky-1ru_zone-403"]: THREE.Mesh;
    ["Mesh10445_Sky-1ru_zone-405"]: THREE.Mesh;
    ["Mesh10445_Sky-1ru_zone-406"]: THREE.Mesh;
    ["Mesh10445_Sky-1ru_zone-407"]: THREE.Mesh;
    ["Mesh10445_Sky-1ru_zone-408"]: THREE.Mesh;
    ["Mesh15721_Sky-1ru_zone-410"]: THREE.Mesh;
    ["Mesh9812_Sky-1ru_zone-404"]: THREE.Mesh;
    ["Mesh10445_Sky-1ru_zone-409"]: THREE.Mesh;
    ["Mesh10445_Sky-1ru_zone-411"]: THREE.Mesh;
    ["Mesh10445_Sky-1ru_zone-412"]: THREE.Mesh;
  };
  materials: {};
};

export function Sky1RuModel({ showModal, handleMeshClick }: any) {
  const { nodes, materials } = useGLTF("/models/sky-1ru.glb") as GLTFResult;
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh10445_Sky-1ru_zone-401"].geometry}
        material={nodes["Mesh10445_Sky-1ru_zone-401"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh10445_Sky-1ru_zone-402"].geometry}
        material={nodes["Mesh10445_Sky-1ru_zone-402"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh10445_Sky-1ru_zone-403"].geometry}
        material={nodes["Mesh10445_Sky-1ru_zone-403"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh10445_Sky-1ru_zone-405"].geometry}
        material={nodes["Mesh10445_Sky-1ru_zone-405"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh10445_Sky-1ru_zone-406"].geometry}
        material={nodes["Mesh10445_Sky-1ru_zone-406"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh10445_Sky-1ru_zone-407"].geometry}
        material={nodes["Mesh10445_Sky-1ru_zone-407"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh10445_Sky-1ru_zone-408"].geometry}
        material={nodes["Mesh10445_Sky-1ru_zone-408"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh15721_Sky-1ru_zone-410"].geometry}
        material={nodes["Mesh15721_Sky-1ru_zone-410"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh9812_Sky-1ru_zone-404"].geometry}
        material={nodes["Mesh9812_Sky-1ru_zone-404"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh10445_Sky-1ru_zone-409"].geometry}
        material={nodes["Mesh10445_Sky-1ru_zone-409"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh10445_Sky-1ru_zone-411"].geometry}
        material={nodes["Mesh10445_Sky-1ru_zone-411"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh10445_Sky-1ru_zone-412"].geometry}
        material={nodes["Mesh10445_Sky-1ru_zone-412"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
    </group>
  );
}

useGLTF.preload("/models/sky-1ru.glb");
