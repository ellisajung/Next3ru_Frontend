import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh9812_chair3_2_66_whiterow6_1_9_Component_280_1_Group77_alls: THREE.Mesh;
    Mesh10445_chair3_2_699_Component_174_27_Component_280_3_Group77: THREE.Mesh;
    Mesh15721_chair3_2_5935_whiterow6_1_140_Component_280_5_Group77: THREE.Mesh;
  };
  materials: {};
};

export function SkyModel({ showModal, handleMeshClick }: any) {
  const { nodes, materials } = useGLTF("/models/sky.glb") as GLTFResult;
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh9812_chair3_2_66_whiterow6_1_9_Component_280_1_Group77_alls
            .geometry
        }
        material={
          nodes.Mesh9812_chair3_2_66_whiterow6_1_9_Component_280_1_Group77_alls
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh10445_chair3_2_699_Component_174_27_Component_280_3_Group77
            .geometry
        }
        material={
          nodes.Mesh10445_chair3_2_699_Component_174_27_Component_280_3_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh15721_chair3_2_5935_whiterow6_1_140_Component_280_5_Group77
            .geometry
        }
        material={
          nodes.Mesh15721_chair3_2_5935_whiterow6_1_140_Component_280_5_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
    </group>
  );
}

useGLTF.preload("/models/sky.glb");
