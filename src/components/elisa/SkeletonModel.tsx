import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export function SkeletonModel(props: any) {
  const { nodes, materials } = useGLTF("/models/skeleton.glb") as unknown as {
    nodes: { [key: string]: Mesh };
    materials: any;
  };
  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh17_Group17_Group_382_1_Model.geometry}
        material={nodes.Mesh17_Group17_Group_382_1_Model.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/skeleton.glb");
