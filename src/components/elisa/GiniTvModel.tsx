import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { TClickedMeshInfo } from "./StadiumModel";

type NodeKeys =
  | "Mesh15944_Gini-tv_zone-116"
  | "Mesh18309_Gini-tv_zone-226"
  | "Mesh18613_Gini-tv_zone-323"
  | "Mesh22240_Gini-tv_zone-117"
  | "Mesh22432_Gini-tv_zone-118"
  | "Mesh23420_Gini-tv_zone-225"
  | "Mesh23667_Gini-tv_zone-322"
  | "Mesh26793_Gini-tv_zone-321"
  | "Mesh29225_Gini-tv_zone-224";

type GLTFResult = GLTF & {
  nodes: {
    [key in NodeKeys]: THREE.Mesh;
  };
  materials: { [key: string]: THREE.MeshStandardMaterial };
};

export function GiniTvModel({ showModal, handleMeshClick }: any) {
  const { nodes, materials } = useGLTF("/models/gini-tv.glb") as GLTFResult;

  const [isHovered, setIsHovered] = useState(false);
  const [hoveredMesh, setHoveredMesh] = useState<string | null>(null);
  const [clickedMesh, setClickedMesh] = useState<TClickedMeshInfo | null>(null);

  const defaultColor = nodes["Mesh29225_Gini-tv_zone-224"]
    .material as THREE.MeshStandardMaterial;
  const hoverColor = defaultColor.clone();
  hoverColor.color.set("#4F9236");

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
  //       geometry={nodes["Mesh15944_Gini-tv_zone-116"].geometry}
  //       material={nodes["Mesh15944_Gini-tv_zone-116"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh18309_Gini-tv_zone-226"].geometry}
  //       material={nodes["Mesh18309_Gini-tv_zone-226"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh18613_Gini-tv_zone-323"].geometry}
  //       material={nodes["Mesh18613_Gini-tv_zone-323"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh22240_Gini-tv_zone-117"].geometry}
  //       material={nodes["Mesh22240_Gini-tv_zone-117"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh22432_Gini-tv_zone-118"].geometry}
  //       material={nodes["Mesh22432_Gini-tv_zone-118"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh23420_Gini-tv_zone-225"].geometry}
  //       material={nodes["Mesh23420_Gini-tv_zone-225"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh23667_Gini-tv_zone-322"].geometry}
  //       material={nodes["Mesh23667_Gini-tv_zone-322"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh26793_Gini-tv_zone-321"].geometry}
  //       material={nodes["Mesh26793_Gini-tv_zone-321"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh29225_Gini-tv_zone-224"].geometry}
  //       material={nodes["Mesh29225_Gini-tv_zone-224"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //   </group>
  // );
}

useGLTF.preload("/models/gini-tv.glb");
