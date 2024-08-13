import * as THREE from "three";
import { useEffect, useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { TClickedMeshInfo } from "./StadiumModel";
import MeshLabel from "./MeshLabel";

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

  const onMeshOver = (info: TClickedMeshInfo): void => {
    handleMeshHover(info);
    setHoveredMesh(info);
  };

  const onMeshOut = (): void => {
    setHoveredMesh(null);
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
  const zone = mesh.name.includes("zone") ? mesh.name.slice(-3) : null;
  const meshInfo: TClickedMeshInfo = {
    area_name: "익사이팅석",
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
        onPointerOver={() => onMeshOver(meshInfo)}
        onPointerOut={onMeshOut}
        position={[323.71, 24.066, -399.248]}
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

useGLTF.preload("/models/exiting-3ru.glb");
