"use client";

import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { type TClickedMeshInfo } from "@/components/elisa/StadiumModel";
import { Button } from "../shadcn-ui/button";
import { TooltipModel } from "./TooltipModel";
import Tooltip from "./Tooltip";
import { useThree } from "@react-three/fiber";

type NodeKeys =
  | "Mesh6271_Center_zone-218"
  | "Mesh6375_Center_zone-315"
  | "Mesh6693_Center_zone-316"
  | "Mesh6925_Center_zone-219"
  | "Mesh26589_Center_zone-223"
  | "Mesh26751_Center_zone-320"
  | "Mesh26954_Center_zone-221"
  | "Mesh27107_Center_zone-222"
  | "Mesh27135_Center_zone-318"
  | "Mesh27152_Center_zone-319"
  | "Mesh27367_Center_zone-220"
  | "Mesh27602_Center_zone-317"
  | "Mesh29412_Center_zone-313"
  | "Mesh29416_Center_zone-314"
  | "Mesh29567_Center_zone-216"
  | "Mesh29609_Center_zone-217";

type GLTFResult = GLTF & {
  nodes: {
    [key in NodeKeys]: THREE.Mesh;
  };
  materials: { [key: string]: THREE.MeshStandardMaterial };
};

export type TTooltip = {
  position: [number, number, number];
  text: string;
};

type MeshData = {
  name: NodeKeys;
  position: [number, number, number];
};

const meshesData: MeshData[] = [
  { name: "Mesh6271_Center_zone-218", position: [-668.369, 93.28, -672.119] },
  { name: "Mesh6375_Center_zone-315", position: [-770.7, 133.355, -761.811] },
  { name: "Mesh6693_Center_zone-316", position: [-683.357, 134.097, -859.907] },
  { name: "Mesh6925_Center_zone-219", position: [-596.307, 92.654, -750.01] },
  { name: "Mesh26589_Center_zone-223", position: [-223.563, 92.991, -845.238] },
  {
    name: "Mesh26751_Center_zone-320",
    position: [-196.068, 135.063, -985.662],
  },
  { name: "Mesh26954_Center_zone-221", position: [-398.738, 92.419, -848.117] },
  { name: "Mesh27107_Center_zone-222", position: [-318.131, 94.057, -860.653] },
  { name: "Mesh27135_Center_zone-318", position: [-443.34, 134.782, -984.996] },
  {
    name: "Mesh27152_Center_zone-319",
    position: [-321.874, 135.153, -999.929],
  },
  { name: "Mesh27367_Center_zone-220", position: [-484.707, 93.876, -825.675] },
  {
    name: "Mesh27602_Center_zone-317",
    position: [-556.104, 135.356, -947.347],
  },
  { name: "Mesh29412_Center_zone-313", position: [-865.271, 133.45, -539.77] },
  {
    name: "Mesh29416_Center_zone-314",
    position: [-837.074, 134.665, -644.885],
  },
  { name: "Mesh29567_Center_zone-216", position: [-726.564, 91.116, -505.264] },
  { name: "Mesh29609_Center_zone-217", position: [-712.201, 93.337, -582.115] },
];

export function CenterModel({
  showModal,
  handleMeshHover,
  handleMeshClick,
}: any) {
  // const group = useRef<THREE.Group>(null);

  const { nodes, materials } = useGLTF("/models/center.glb") as GLTFResult;
  const { camera, gl } = useThree(); // Use `useThree` to get camera and renderer

  const [tooltip, setTooltip] = useState({
    x: 0,
    y: 0,
    text: "",
    visible: false,
  });
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredMesh, setHoveredMesh] = useState<TClickedMeshInfo | null>(null);
  const [clickedMesh, setClickedMesh] = useState<TClickedMeshInfo | null>(null);

  const defaultColor = nodes["Mesh6271_Center_zone-218"]
    .material as THREE.MeshStandardMaterial;
  const hoverColor = defaultColor.clone();
  hoverColor.color.set("#702CA4");

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  const onMeshClick = (info: TClickedMeshInfo): void => {
    handleMeshClick(info);
    setClickedMesh(info);
  };

  const onMeshOver = (e: any, mesh: any, info: TClickedMeshInfo): void => {
    console.log(mesh); // mesh 객체의 구조를 확인
    handleMeshHover(info);
    setHoveredMesh(info);

    // const worldPosition = new THREE.Vector3();
    // // 월드 매트릭스 업데이트
    // // group.current?.updateMatrixWorld(true);
    // mesh.updateMatrixWorld(true);
    // mesh.getWorldPosition(worldPosition);
    // console.log(
    //   "mesh's world position: ",
    //   mesh.getWorldPosition(worldPosition),
    // );

    // // 툴팁의 오프셋을 추가하여 매쉬 위에 위치
    // setTooltip({
    //   position: [worldPosition.x, worldPosition.y + 10, worldPosition.z], // 오프셋을 조정하여 위치 조정
    //   text: `${info.area_name}\n ${info.zone}번 구역`,
    // });

    // Set mouse position for raycasting
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

    // Raycaster update and intersect
    raycaster.ray.origin.copy(camera.position);
    raycaster.ray.direction
      .set(mouse.x, mouse.y, 1)
      .unproject(camera)
      .sub(camera.position)
      .normalize();

    const intersects = raycaster.intersectObject(mesh);
    if (intersects.length > 0) {
      const intersect = intersects[0];
      const { x, y } = intersect.point;

      // Convert 3D world coordinates to 2D screen coordinates
      const vector = new THREE.Vector3(x, y, 0.5);
      vector.project(camera);

      // Map normalized device coordinates to screen coordinates
      const screenX = (vector.x * 0.5 + 0.5) * window.innerWidth;
      const screenY = (-vector.y * 0.5 + 0.5) * window.innerHeight;

      setTooltip({
        x: screenX,
        y: screenY,
        text: `${info.area_name}\n ${info.zone}번 구역`,
        visible: true,
      });
    }
  };

  const onMeshOut = (): void => {
    setHoveredMesh(null);
    setTooltip((prevState) => ({ ...prevState, visible: false }));
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
      area_name: "중앙지정석",
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
        onPointerOver={(e) => onMeshOver(e, mesh, meshInfo)}
        onPointerOut={onMeshOut}
        position={position}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
    );
  });

  return (
    <>
      <group
        dispose={null}
        onPointerOver={() => setIsHovered(true)}
        onPointerOut={() => setIsHovered(false)}
      >
        {meshes}
      </group>
      {tooltip.visible && (
        <Tooltip
          x={tooltip.x}
          y={tooltip.y}
          text={tooltip.text}
        />
      )}
    </>
  );
}

useGLTF.preload("/models/center.glb");
