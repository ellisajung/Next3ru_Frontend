import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh1608_Component_110_1_Component_112_1_Component_149_1_wrigle: THREE.Mesh;
    Mesh2655_Component_111_244_Component_112_244_wrigley1_Model: THREE.Mesh;
    Mesh2887_Component_111_293_Component_112_293_wrigley1_Model: THREE.Mesh;
    Mesh3475_Component_110_943_Component_112_472_wrigley1_Model: THREE.Mesh;
  };
  materials: {};
};

export function GrassModel({ showModal, handleMeshClick }: any) {
  const { nodes, materials } = useGLTF("/models/grass.glb") as GLTFResult;
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh1608_Component_110_1_Component_112_1_Component_149_1_wrigle
            .geometry
        }
        material={
          nodes.Mesh1608_Component_110_1_Component_112_1_Component_149_1_wrigle
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh2655_Component_111_244_Component_112_244_wrigley1_Model
            .geometry
        }
        material={
          nodes.Mesh2655_Component_111_244_Component_112_244_wrigley1_Model
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh2887_Component_111_293_Component_112_293_wrigley1_Model
            .geometry
        }
        material={
          nodes.Mesh2887_Component_111_293_Component_112_293_wrigley1_Model
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh3475_Component_110_943_Component_112_472_wrigley1_Model
            .geometry
        }
        material={
          nodes.Mesh3475_Component_110_943_Component_112_472_wrigley1_Model
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
    </group>
  );
}

useGLTF.preload("/models/grass.glb");
