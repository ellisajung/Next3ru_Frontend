import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["Mesh10445_Sky-3ru_zone-413"]: THREE.Mesh;
    ["Mesh10445_Sky-3ru_zone-414"]: THREE.Mesh;
    ["Mesh10445_Sky-3ru_zone-424"]: THREE.Mesh;
    ["Mesh10445_Sky-3ru_zone-429"]: THREE.Mesh;
    ["Mesh10445_Sky-3ru_zone-432"]: THREE.Mesh;
    ["Mesh10445_Sky-3ru_zone-430"]: THREE.Mesh;
    ["Mesh10445_Sky-3ru_zone-431"]: THREE.Mesh;
    ["Mesh15721_Sky-3ru_zone-428"]: THREE.Mesh;
    ["Mesh15721_Sky-3ru_zone-427"]: THREE.Mesh;
    ["Mesh15721_Sky-3ru_zone-426"]: THREE.Mesh;
    ["Mesh15721_Sky-3ru_zone-425"]: THREE.Mesh;
    ["Mesh15721_Sky-3ru_zone-423"]: THREE.Mesh;
    ["Mesh15721_Sky-3ru_zone-422"]: THREE.Mesh;
    ["Mesh15721_Sky-3ru_zone-421"]: THREE.Mesh;
    ["Mesh15721_Sky-3ru_zone-420"]: THREE.Mesh;
    ["Mesh15721_Sky-3ru_zone-419"]: THREE.Mesh;
    ["Mesh15721_Sky-3ru_zone-418"]: THREE.Mesh;
    ["Mesh15721_Sky-3ru_zone-417"]: THREE.Mesh;
    ["Mesh15721_Sky-3ru_zone-415"]: THREE.Mesh;
    ["Mesh15721_Sky-3ru_zone-416"]: THREE.Mesh;
  };
  materials: {};
};

export function Sky3RuModel({ showModal, handleMeshClick }: any) {
  const { nodes, materials } = useGLTF("/models/sky-3ru.glb") as GLTFResult;
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh10445_Sky-3ru_zone-413"].geometry}
        material={nodes["Mesh10445_Sky-3ru_zone-413"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh10445_Sky-3ru_zone-414"].geometry}
        material={nodes["Mesh10445_Sky-3ru_zone-414"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh10445_Sky-3ru_zone-424"].geometry}
        material={nodes["Mesh10445_Sky-3ru_zone-424"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh10445_Sky-3ru_zone-429"].geometry}
        material={nodes["Mesh10445_Sky-3ru_zone-429"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh10445_Sky-3ru_zone-432"].geometry}
        material={nodes["Mesh10445_Sky-3ru_zone-432"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh10445_Sky-3ru_zone-430"].geometry}
        material={nodes["Mesh10445_Sky-3ru_zone-430"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh10445_Sky-3ru_zone-431"].geometry}
        material={nodes["Mesh10445_Sky-3ru_zone-431"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh15721_Sky-3ru_zone-428"].geometry}
        material={nodes["Mesh15721_Sky-3ru_zone-428"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh15721_Sky-3ru_zone-427"].geometry}
        material={nodes["Mesh15721_Sky-3ru_zone-427"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh15721_Sky-3ru_zone-426"].geometry}
        material={nodes["Mesh15721_Sky-3ru_zone-426"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh15721_Sky-3ru_zone-425"].geometry}
        material={nodes["Mesh15721_Sky-3ru_zone-425"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh15721_Sky-3ru_zone-423"].geometry}
        material={nodes["Mesh15721_Sky-3ru_zone-423"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh15721_Sky-3ru_zone-422"].geometry}
        material={nodes["Mesh15721_Sky-3ru_zone-422"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh15721_Sky-3ru_zone-421"].geometry}
        material={nodes["Mesh15721_Sky-3ru_zone-421"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh15721_Sky-3ru_zone-420"].geometry}
        material={nodes["Mesh15721_Sky-3ru_zone-420"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh15721_Sky-3ru_zone-419"].geometry}
        material={nodes["Mesh15721_Sky-3ru_zone-419"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh15721_Sky-3ru_zone-418"].geometry}
        material={nodes["Mesh15721_Sky-3ru_zone-418"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh15721_Sky-3ru_zone-417"].geometry}
        material={nodes["Mesh15721_Sky-3ru_zone-417"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh15721_Sky-3ru_zone-415"].geometry}
        material={nodes["Mesh15721_Sky-3ru_zone-415"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh15721_Sky-3ru_zone-416"].geometry}
        material={nodes["Mesh15721_Sky-3ru_zone-416"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
    </group>
  );
}

useGLTF.preload("/models/sky-3ru.glb");
