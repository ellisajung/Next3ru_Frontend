import * as THREE from "three";
import React, { useEffect, useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { IClickedMeshInfo } from "./StadiumModel";
import MeshLabel from "./MeshLabel";

type NodeKeys = "Mesh6965_1Ru-exiting";

type GLTFResult = GLTF & {
  nodes: {
    [key in NodeKeys]: THREE.Mesh;
  };
  materials: { [key: string]: THREE.MeshStandardMaterial };
};

export function Exiting1RuModel({
  hides,
  areaName,
  showModal,
  handleMeshHover,
  handleMeshClick,
}: any) {
  const { nodes, materials } = useGLTF("/models/exiting-1ru.glb") as GLTFResult;

  const [isHovered, setIsHovered] = useState(false);
  const [hoveredMesh, setHoveredMesh] = useState<IClickedMeshInfo | null>(null);
  const [clickedMesh, setClickedMesh] = useState<IClickedMeshInfo | null>(null);

  const defaultColor = nodes["Mesh6965_1Ru-exiting"]
    .material as THREE.MeshStandardMaterial;
  const hoverColor = defaultColor.clone();
  hoverColor.color.set("#36A09A");

  const onMeshClick = (info: IClickedMeshInfo): void => {
    handleMeshClick(info);
    setClickedMesh(info);
  };

  const onMeshOver = (info: IClickedMeshInfo): void => {
    handleMeshHover(info);
    setHoveredMesh(info);
  };

  const onMeshOut = (): void => {
    setHoveredMesh(null);
  };

  const getColor = (info: IClickedMeshInfo) =>
    !hides[areaName] || isHovered || info.zone === clickedMesh?.zone
      ? hoverColor
      : defaultColor;

  useEffect(() => {
    if (showModal == false) {
      setClickedMesh(null);
    }
  }, [showModal]);

  const mesh = nodes["Mesh6965_1Ru-exiting"];
  const zone = mesh.name.includes("zone") ? mesh.name.slice(-3) : null;
  const meshInfo: IClickedMeshInfo = {
    area_name: areaName,
    zone: zone,
  };

  return (
    <group
      dispose={null}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={mesh.geometry}
        material={getColor(meshInfo)}
        onClick={() => onMeshClick(meshInfo)}
        onPointerOver={() => onMeshOver(meshInfo)}
        onPointerOut={onMeshOut}
        position={[-509.209, 25.682, 155.138]}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      >
        {hoveredMesh?.zone === zone && (
          <Html distanceFactor={500}>
            <MeshLabel {...hoveredMesh} />
          </Html>
        )}
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/exiting-1ru.glb");
