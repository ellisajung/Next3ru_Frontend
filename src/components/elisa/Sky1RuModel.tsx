import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { TClickedMeshInfo } from "./StadiumModel";

type NodeKeys =
  | "Mesh10445_Sky-1ru_zone-401"
  | "Mesh10445_Sky-1ru_zone-402"
  | "Mesh10445_Sky-1ru_zone-403"
  | "Mesh10445_Sky-1ru_zone-405"
  | "Mesh10445_Sky-1ru_zone-406"
  | "Mesh10445_Sky-1ru_zone-407"
  | "Mesh10445_Sky-1ru_zone-408"
  | "Mesh15721_Sky-1ru_zone-410"
  | "Mesh9812_Sky-1ru_zone-404"
  | "Mesh10445_Sky-1ru_zone-409"
  | "Mesh10445_Sky-1ru_zone-411"
  | "Mesh10445_Sky-1ru_zone-412";

type GLTFResult = GLTF & {
  nodes: {
    [key in NodeKeys]: THREE.Mesh;
  };
  materials: { [key: string]: THREE.MeshStandardMaterial };
};

export function Sky1RuModel({ showModal, handleMeshClick }: any) {
  const { nodes, materials } = useGLTF("/models/sky-1ru.glb") as GLTFResult;

  const [isHovered, setIsHovered] = useState(false);
  const [hoveredMesh, setHoveredMesh] = useState<string | null>(null);
  const [clickedMesh, setClickedMesh] = useState<TClickedMeshInfo | null>(null);

  const defaultColor = nodes["Mesh10445_Sky-1ru_zone-401"]
    .material as THREE.MeshStandardMaterial;
  const hoverColor = defaultColor.clone();
  hoverColor.color.set("#211C79");

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
  //       geometry={nodes["Mesh10445_Sky-1ru_zone-401"].geometry}
  //       material={nodes["Mesh10445_Sky-1ru_zone-401"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh10445_Sky-1ru_zone-402"].geometry}
  //       material={nodes["Mesh10445_Sky-1ru_zone-402"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh10445_Sky-1ru_zone-403"].geometry}
  //       material={nodes["Mesh10445_Sky-1ru_zone-403"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh10445_Sky-1ru_zone-405"].geometry}
  //       material={nodes["Mesh10445_Sky-1ru_zone-405"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh10445_Sky-1ru_zone-406"].geometry}
  //       material={nodes["Mesh10445_Sky-1ru_zone-406"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh10445_Sky-1ru_zone-407"].geometry}
  //       material={nodes["Mesh10445_Sky-1ru_zone-407"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh10445_Sky-1ru_zone-408"].geometry}
  //       material={nodes["Mesh10445_Sky-1ru_zone-408"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh15721_Sky-1ru_zone-410"].geometry}
  //       material={nodes["Mesh15721_Sky-1ru_zone-410"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh9812_Sky-1ru_zone-404"].geometry}
  //       material={nodes["Mesh9812_Sky-1ru_zone-404"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh10445_Sky-1ru_zone-409"].geometry}
  //       material={nodes["Mesh10445_Sky-1ru_zone-409"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh10445_Sky-1ru_zone-411"].geometry}
  //       material={nodes["Mesh10445_Sky-1ru_zone-411"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh10445_Sky-1ru_zone-412"].geometry}
  //       material={nodes["Mesh10445_Sky-1ru_zone-412"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //   </group>
  // );
}

useGLTF.preload("/models/sky-1ru.glb");
