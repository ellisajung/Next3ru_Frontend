import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { TClickedMeshInfo } from "./StadiumModel";

type NodeKeys =
  | "Mesh8072_Kt-alpha-right"
  | "Mesh8269_Kt-alpha-center"
  | "Mesh8401_Kt-alpha-left";

type GLTFResult = GLTF & {
  nodes: {
    [key in NodeKeys]: THREE.Mesh;
  };
  materials: { [key: string]: THREE.MeshStandardMaterial };
};

export function KtAlphaModel({ showModal, handleMeshClick }: any) {
  const { nodes, materials } = useGLTF("/models/kt-alpha.glb") as GLTFResult;

  const [isHovered, setIsHovered] = useState(false);
  const [hoveredMesh, setHoveredMesh] = useState<string | null>(null);
  const [clickedMesh, setClickedMesh] = useState<TClickedMeshInfo | null>(null);

  const defaultColor = nodes["Mesh8072_Kt-alpha-right"]
    .material as THREE.MeshStandardMaterial;
  const hoverColor = defaultColor.clone();
  hoverColor.color.set("#CE4E9D");

  const onClickMesh = (info: TClickedMeshInfo): void => {
    handleMeshClick(info);
    setClickedMesh(info);
  };

  const onMeshOver = (meshName: string): void => {
    setHoveredMesh(meshName);
  };

  const onMeshOut = (): void => {
    setHoveredMesh(null);
  };

  const getColor = (isHovered: boolean) =>
    isHovered ? hoverColor : defaultColor;

  const getTooltip = (meshName: string) => {
    if (clickedMesh?.area_name === meshName || hoveredMesh === meshName)
      return hoverColor;
    return defaultColor;
  };

  useEffect(() => {
    if (showModal == false) {
      setClickedMesh(null);
    }
  }, [showModal]);

  const meshes = (Object.keys(nodes) as NodeKeys[]).map((key) => {
    const mesh = nodes[key];
    return (
      <mesh
        key={key}
        castShadow
        receiveShadow
        geometry={mesh.geometry}
        material={getColor(isHovered)}
        onClick={() => onClickMesh({ area_name: mesh.name, zone: "113" })}
        // onPointerOver={() => onMeshOver(mesh.name)}
        // onPointerOut={onMeshOut}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
    );
  });

  return (
    <group
      dispose={null}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      {meshes}
    </group>
  );

  // 원래 코드
  // return (
  //   <group dispose={null}>
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh8072_Kt-alpha-right"].geometry}
  //       material={nodes["Mesh8072_Kt-alpha-right"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh8269_Kt-alpha-center"].geometry}
  //       material={nodes["Mesh8269_Kt-alpha-center"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh8401_Kt-alpha-left"].geometry}
  //       material={nodes["Mesh8401_Kt-alpha-left"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //   </group>
  // );
}

useGLTF.preload("/models/kt-alpha.glb");
