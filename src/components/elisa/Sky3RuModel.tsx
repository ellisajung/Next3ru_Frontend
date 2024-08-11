import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { TClickedMeshInfo } from "./StadiumModel";
import { TTooltip } from "./CenterModel";

type NodeKeys =
  | "Mesh10445_Sky-3ru_zone-413"
  | "Mesh10445_Sky-3ru_zone-414"
  | "Mesh10445_Sky-3ru_zone-424"
  | "Mesh10445_Sky-3ru_zone-429"
  | "Mesh10445_Sky-3ru_zone-432"
  | "Mesh10445_Sky-3ru_zone-430"
  | "Mesh10445_Sky-3ru_zone-431"
  | "Mesh15721_Sky-3ru_zone-428"
  | "Mesh15721_Sky-3ru_zone-427"
  | "Mesh15721_Sky-3ru_zone-426"
  | "Mesh15721_Sky-3ru_zone-425"
  | "Mesh15721_Sky-3ru_zone-423"
  | "Mesh15721_Sky-3ru_zone-422"
  | "Mesh15721_Sky-3ru_zone-421"
  | "Mesh15721_Sky-3ru_zone-420"
  | "Mesh15721_Sky-3ru_zone-419"
  | "Mesh15721_Sky-3ru_zone-418"
  | "Mesh15721_Sky-3ru_zone-417"
  | "Mesh15721_Sky-3ru_zone-415"
  | "Mesh15721_Sky-3ru_zone-416";

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
  {
    name: "Mesh10445_Sky-3ru_zone-413",
    position: [-468.97, 204.719, -767.589],
  },
  {
    name: "Mesh10445_Sky-3ru_zone-414",
    position: [-386.778, 204.713, -802.599],
  },
  {
    name: "Mesh10445_Sky-3ru_zone-424",
    position: [440.242, 249.653, -697.006],
  },
  {
    name: "Mesh10445_Sky-3ru_zone-429",
    position: [817.138, 246.934, -554.682],
  },
  {
    name: "Mesh10445_Sky-3ru_zone-432",
    position: [1025.563, 239.602, -465.475],
  },
  { name: "Mesh10445_Sky-3ru_zone-430", position: [887.668, 228.443, -495.66] },
  {
    name: "Mesh10445_Sky-3ru_zone-431",
    position: [963.378, 239.558, -488.137],
  },
  {
    name: "Mesh15721_Sky-3ru_zone-428",
    position: [730.661, 237.448, -569.527],
  },
  {
    name: "Mesh15721_Sky-3ru_zone-427",
    position: [661.029, 239.601, -598.768],
  },
  { name: "Mesh15721_Sky-3ru_zone-426", position: [589.042, 234.961, -616.91] },
  {
    name: "Mesh15721_Sky-3ru_zone-425",
    position: [519.667, 234.943, -642.246],
  },
  {
    name: "Mesh15721_Sky-3ru_zone-423",
    position: [350.404, 244.373, -720.836],
  },
  {
    name: "Mesh15721_Sky-3ru_zone-422",
    position: [285.903, 243.688, -740.817],
  },
  { name: "Mesh15721_Sky-3ru_zone-421", position: [204.53, 231.085, -741.849] },
  {
    name: "Mesh15721_Sky-3ru_zone-420",
    position: [128.825, 242.246, -781.831],
  },
  { name: "Mesh15721_Sky-3ru_zone-419", position: [64.477, 239.807, -795.325] },
  {
    name: "Mesh15721_Sky-3ru_zone-418",
    position: [-21.945, 228.708, -799.528],
  },
  {
    name: "Mesh15721_Sky-3ru_zone-417",
    position: [-116.81, 245.396, -854.827],
  },
  {
    name: "Mesh15721_Sky-3ru_zone-415",
    position: [-298.689, 208.321, -824.326],
  },
  {
    name: "Mesh15721_Sky-3ru_zone-416",
    position: [-210.247, 247.601, -882.065],
  },
];

export function Sky3RuModel({
  showModal,
  handleMeshHover,
  handleMeshClick,
}: any) {
  const { nodes, materials } = useGLTF("/models/sky-3ru.glb") as GLTFResult;

  const [tooltip, setTooltip] = useState<TTooltip | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredMesh, setHoveredMesh] = useState<TClickedMeshInfo | null>(null);
  const [clickedMesh, setClickedMesh] = useState<TClickedMeshInfo | null>(null);

  const defaultColor = nodes["Mesh10445_Sky-3ru_zone-413"]
    .material as THREE.MeshStandardMaterial;
  const hoverColor = defaultColor.clone();
  hoverColor.color.set("#211C79");

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
      area_name: "3루 스카이존",
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

useGLTF.preload("/models/sky-3ru.glb");
