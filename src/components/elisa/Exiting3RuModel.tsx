import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { TClickedMeshInfo } from "./StadiumModel";
import { TTooltip } from "./CenterModel";

type NodeKeys = "Mesh22083_3Ru-exiting";

type GLTFResult = GLTF & {
  nodes: {
    [key in NodeKeys]: THREE.Mesh;
  };
  materials: { [key: string]: THREE.MeshStandardMaterial };
};

export function Exiting3RuModel({
  handleMeshHover,
  showModal,
  handleMeshClick,
}: any) {
  const { nodes, materials } = useGLTF("/models/exiting-3ru.glb") as GLTFResult;

  const [tooltip, setTooltip] = useState<TTooltip | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredMesh, setHoveredMesh] = useState<TClickedMeshInfo | null>(null);
  const [clickedMesh, setClickedMesh] = useState<TClickedMeshInfo | null>(null);

  const defaultColor = nodes["Mesh22083_3Ru-exiting"]
    .material as THREE.MeshStandardMaterial;
  const hoverColor = defaultColor.clone();
  hoverColor.color.set("#36A09A");

  const onMeshClick = (info: TClickedMeshInfo): void => {
    handleMeshClick(info);
    setClickedMesh(info);
  };

  const onMeshOver = (mesh: any, info: TClickedMeshInfo): void => {
    console.log(mesh); // mesh 객체의 구조를 확인
    handleMeshHover(info);
    setHoveredMesh(info);

    const worldPosition = new THREE.Vector3();
    // 월드 매트릭스 업데이트
    // group.current?.updateMatrixWorld(true);
    mesh.updateMatrixWorld(true);
    mesh.getWorldPosition(worldPosition);
    console.log(
      "mesh's world position: ",
      mesh.getWorldPosition(worldPosition),
    );

    // 툴팁의 오프셋을 추가하여 매쉬 위에 위치
    setTooltip({
      position: [worldPosition.x, worldPosition.y + 500, worldPosition.z], // 오프셋을 조정하여 위치 조정
      text: `${info.area_name}\n ${info.zone}번 구역`,
    });
  };

  const onMeshOut = (): void => {
    setHoveredMesh(null);
    setTooltip(null);
  };

  const getColor = (isHovered: boolean, meshName: string) =>
    isHovered || clickedMesh?.area_name === meshName
      ? hoverColor
      : defaultColor;

  useEffect(() => {
    if (showModal == false) {
      setClickedMesh(null);
    }
  }, [showModal]);

  const mesh = nodes["Mesh22083_3Ru-exiting"];
  const zone = mesh.name.slice(-3);
  const meshInfo: TClickedMeshInfo = {
    area_name: "3루 익사이팅존",
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
        material={getColor(isHovered, mesh.name)}
        onClick={() => onMeshClick(meshInfo)}
        onPointerOver={() => onMeshOver(mesh, meshInfo)}
        onPointerOut={onMeshOut}
        position={[323.71, 24.066, -399.248]}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
    </group>
  );
}

useGLTF.preload("/models/exiting-3ru.glb");
