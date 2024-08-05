import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { TClickedMeshInfo } from "./StadiumModel";

type NodeKeys =
  | "Mesh5748_1Ru-cheering_zone-309"
  | "Mesh5778_1Ru-cheering_zone-308"
  | "Mesh6032_1Ru-cheering_zone-212"
  | "Mesh6059_1Ru-cheering_zone-211"
  | "Mesh16083_1Ru-cheering_zone-304"
  | "Mesh16392_1Ru-cheering_zone-207"
  | "Mesh16522_1Ru-cheering_zone-110"
  | "Mesh16609_1Ru-cheering_zone-108"
  | "Mesh16639_1Ru-cheering_zone-109"
  | "Mesh19141_1Ru-cheering_zone-306"
  | "Mesh19380_1Ru-cheering_zone-208"
  | "Mesh19404_1Ru-cheering_zone-209"
  | "Mesh19475_1Ru-cheering_zone-307"
  | "Mesh19674_1Ru-cheering_zone-210"
  | "Mesh20316_1Ru-cheering_zone-305"
  | "Mesh22787_1Ru-cheering_zone-111"
  | "Mesh23149_1Ru-cheering_zone-107"
  | "Mesh25167_1Ru-cheering_zone-105"
  | "Mesh25273_1Ru-cheering_zone-106"
  | "Mesh25506_1Ru-cheering_zone-205"
  | "Mesh25634_1Ru-cheering_zone-302"
  | "Mesh25661_1Ru-cheering_zone-301"
  | "Mesh25841_1Ru-cheering_zone-206"
  | "Mesh25999_1Ru-cheering_zone-303"
  | "Mesh26464_1Ru-cheering_zone-112"
  | "Mesh27760_1Ru-cheering_zone-204"
  | "Mesh28127_1Ru-cheering_zone-203"
  | "Mesh28311_1Ru-cheering_zone-202"
  | "Mesh28677_1Ru-cheering_zone-201"
  | "Mesh28805_1Ru-cheering_zone-104"
  | "Mesh29042_1Ru-cheering_zone-103"
  | "Mesh29115_1Ru-cheering_zone-102"
  | "Mesh29153_1Ru-cheering_zone-101";

type GLTFResult = GLTF & {
  nodes: {
    [key in NodeKeys]: THREE.Mesh;
  };
  materials: { [key: string]: THREE.MeshStandardMaterial };
};

export function Cheering1RuModel({ showModal, handleMeshClick }: any) {
  const { nodes, materials } = useGLTF(
    "/models/cheering-1ru.glb",
  ) as GLTFResult;

  const [isHovered, setIsHovered] = useState(false);
  const [hoveredMesh, setHoveredMesh] = useState<string | null>(null);
  const [clickedMesh, setClickedMesh] = useState<TClickedMeshInfo | null>(null);

  const defaultColor = nodes["Mesh5748_1Ru-cheering_zone-309"]
    .material as THREE.MeshStandardMaterial;
  const hoverColor = defaultColor.clone();
  hoverColor.color.set("#C63736");

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
  //       geometry={nodes["Mesh5748_1Ru-cheering_zone-309"].geometry}
  //       material={nodes["Mesh5748_1Ru-cheering_zone-309"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh5778_1Ru-cheering_zone-308"].geometry}
  //       material={nodes["Mesh5778_1Ru-cheering_zone-308"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh6032_1Ru-cheering_zone-212"].geometry}
  //       material={nodes["Mesh6032_1Ru-cheering_zone-212"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh6059_1Ru-cheering_zone-211"].geometry}
  //       material={nodes["Mesh6059_1Ru-cheering_zone-211"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh16083_1Ru-cheering_zone-304"].geometry}
  //       material={nodes["Mesh16083_1Ru-cheering_zone-304"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh16392_1Ru-cheering_zone-207"].geometry}
  //       material={nodes["Mesh16392_1Ru-cheering_zone-207"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh16522_1Ru-cheering_zone-110"].geometry}
  //       material={nodes["Mesh16522_1Ru-cheering_zone-110"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh16609_1Ru-cheering_zone-108"].geometry}
  //       material={nodes["Mesh16609_1Ru-cheering_zone-108"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh16639_1Ru-cheering_zone-109"].geometry}
  //       material={nodes["Mesh16639_1Ru-cheering_zone-109"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh19141_1Ru-cheering_zone-306"].geometry}
  //       material={nodes["Mesh19141_1Ru-cheering_zone-306"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh19380_1Ru-cheering_zone-208"].geometry}
  //       material={nodes["Mesh19380_1Ru-cheering_zone-208"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh19404_1Ru-cheering_zone-209"].geometry}
  //       material={nodes["Mesh19404_1Ru-cheering_zone-209"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh19475_1Ru-cheering_zone-307"].geometry}
  //       material={nodes["Mesh19475_1Ru-cheering_zone-307"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh19674_1Ru-cheering_zone-210"].geometry}
  //       material={nodes["Mesh19674_1Ru-cheering_zone-210"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh20316_1Ru-cheering_zone-305"].geometry}
  //       material={nodes["Mesh20316_1Ru-cheering_zone-305"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh22787_1Ru-cheering_zone-111"].geometry}
  //       material={nodes["Mesh22787_1Ru-cheering_zone-111"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh23149_1Ru-cheering_zone-107"].geometry}
  //       material={nodes["Mesh23149_1Ru-cheering_zone-107"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh25167_1Ru-cheering_zone-105"].geometry}
  //       material={nodes["Mesh25167_1Ru-cheering_zone-105"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh25273_1Ru-cheering_zone-106"].geometry}
  //       material={nodes["Mesh25273_1Ru-cheering_zone-106"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh25506_1Ru-cheering_zone-205"].geometry}
  //       material={nodes["Mesh25506_1Ru-cheering_zone-205"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh25634_1Ru-cheering_zone-302"].geometry}
  //       material={nodes["Mesh25634_1Ru-cheering_zone-302"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh25661_1Ru-cheering_zone-301"].geometry}
  //       material={nodes["Mesh25661_1Ru-cheering_zone-301"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh25841_1Ru-cheering_zone-206"].geometry}
  //       material={nodes["Mesh25841_1Ru-cheering_zone-206"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh25999_1Ru-cheering_zone-303"].geometry}
  //       material={nodes["Mesh25999_1Ru-cheering_zone-303"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh26464_1Ru-cheering_zone-112"].geometry}
  //       material={nodes["Mesh26464_1Ru-cheering_zone-112"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh27760_1Ru-cheering_zone-204"].geometry}
  //       material={nodes["Mesh27760_1Ru-cheering_zone-204"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh28127_1Ru-cheering_zone-203"].geometry}
  //       material={nodes["Mesh28127_1Ru-cheering_zone-203"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh28311_1Ru-cheering_zone-202"].geometry}
  //       material={nodes["Mesh28311_1Ru-cheering_zone-202"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh28677_1Ru-cheering_zone-201"].geometry}
  //       material={nodes["Mesh28677_1Ru-cheering_zone-201"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh28805_1Ru-cheering_zone-104"].geometry}
  //       material={nodes["Mesh28805_1Ru-cheering_zone-104"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh29042_1Ru-cheering_zone-103"].geometry}
  //       material={nodes["Mesh29042_1Ru-cheering_zone-103"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh29115_1Ru-cheering_zone-102"].geometry}
  //       material={nodes["Mesh29115_1Ru-cheering_zone-102"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh29153_1Ru-cheering_zone-101"].geometry}
  //       material={nodes["Mesh29153_1Ru-cheering_zone-101"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //   </group>
  // );
}

useGLTF.preload("/models/cheering-1ru.glb");
