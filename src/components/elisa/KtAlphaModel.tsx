import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { TClickedMeshInfo } from "./StadiumModel";
import { TTooltip } from "./CenterModel";

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

type MeshData = {
  name: NodeKeys;
  position: [number, number, number];
};

const meshesData: MeshData[] = [
  { name: "Mesh8072_Kt-alpha-right", position: [-572.012, 57.268, -540.046] },
  { name: "Mesh8269_Kt-alpha-center", position: [-458.05, 57.828, -675.671] },
  { name: "Mesh8401_Kt-alpha-left", position: [-300.116, 57.392, -712.899] },
];

export function KtAlphaModel({
  showModal,
  handleMeshHover,
  handleMeshClick,
}: any) {
  const { nodes, materials } = useGLTF("/models/kt-alpha.glb") as GLTFResult;

  const [tooltip, setTooltip] = useState<TTooltip | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredMesh, setHoveredMesh] = useState<TClickedMeshInfo | null>(null);
  const [clickedMesh, setClickedMesh] = useState<TClickedMeshInfo | null>(null);

  const defaultColor = nodes["Mesh8072_Kt-alpha-right"]
    .material as THREE.MeshStandardMaterial;
  const hoverColor = defaultColor.clone();
  hoverColor.color.set("#CE4E9D");

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

  const meshes = meshesData.map(({ name, position }) => {
    const mesh = nodes[name];
    const zone = name.slice(-3);
    const meshInfo: TClickedMeshInfo = {
      area_name: "kt알파석",
      zone: zone,
    };
    return (
      <mesh
        key={name}
        castShadow
        receiveShadow
        geometry={mesh.geometry}
        material={getColor(isHovered, name)}
        onClick={() => onMeshClick(meshInfo)}
        onPointerOver={() => onMeshOver(mesh, meshInfo)}
        onPointerOut={onMeshOut}
        position={position}
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
}

useGLTF.preload("/models/kt-alpha.glb");
