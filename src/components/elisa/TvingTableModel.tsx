import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { TClickedMeshInfo } from "./StadiumModel";

type NodeKeys = "Mesh2887_Tving-table";

type GLTFResult = GLTF & {
  nodes: {
    [key in NodeKeys]: THREE.Mesh;
  };
  materials: { [key: string]: THREE.MeshStandardMaterial };
};

export function TvingTableModel({ showModal, handleMeshClick }: any) {
  const { nodes, materials } = useGLTF("/models/tving-table.glb") as GLTFResult;

  const [isHovered, setIsHovered] = useState(false);
  const [hoveredMesh, setHoveredMesh] = useState<string | null>(null);
  const [clickedMesh, setClickedMesh] = useState<TClickedMeshInfo | null>(null);

  const defaultColor = nodes["Mesh2887_Tving-table"]
    .material as THREE.MeshStandardMaterial;
  const hoverColor = defaultColor.clone();
  hoverColor.color.set("#DB7390");

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

  return (
    <group
      dispose={null}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh2887_Tving-table"].geometry}
        material={getColor(isHovered)}
        onClick={() =>
          onClickMesh({
            area_name: nodes["Mesh2887_Tving-table"].name,
            zone: "113",
          })
        }
        // onPointerOver={() => onMeshOver(mesh.name)}
        // onPointerOut={onMeshOut}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
    </group>
  );
}

useGLTF.preload("/models/tving-table.glb");
