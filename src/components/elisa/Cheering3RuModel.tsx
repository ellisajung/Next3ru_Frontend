import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { TClickedMeshInfo } from "./StadiumModel";

type NodeKeys =
  | "Mesh8727_3Ru-cheering_zone-331"
  | "Mesh8772_3Ru-cheering_zone-332"
  | "Mesh8827_3Ru-cheering_zone-235"
  | "Mesh9339_3Ru-cheering_zone-234"
  | "Mesh9722_3Ru-cheering_zone-126"
  | "Mesh15857_3Ru-cheering_zone-130"
  | "Mesh16724_3Ru-cheering_zone-123"
  | "Mesh17026_3Ru-cheering_zone-238"
  | "Mesh17139_3Ru-cheering_zone-237"
  | "Mesh17448_3Ru-cheering_zone-129"
  | "Mesh17961_3Ru-cheering_zone-236"
  | "Mesh18287_3Ru-cheering_zone-227"
  | "Mesh18359_3Ru-cheering_zone-228"
  | "Mesh18560_3Ru-cheering_zone-325"
  | "Mesh18605_3Ru-cheering_zone-324"
  | "Mesh18769_3Ru-cheering_zone-233"
  | "Mesh18784_3Ru-cheering_zone-232"
  | "Mesh18867_3Ru-cheering_zone-330"
  | "Mesh19105_3Ru-cheering_zone-329"
  | "Mesh19263_3Ru-cheering_zone-124"
  | "Mesh20190_3Ru-cheering_zone-121"
  | "Mesh20447_3Ru-cheering_zone-327"
  | "Mesh20487_3Ru-cheering_zone-230"
  | "Mesh20811_3Ru-cheering_zone-127"
  | "Mesh21021_3Ru-cheering_zone-128"
  | "Mesh21152_3Ru-cheering_zone-231"
  | "Mesh21452_3Ru-cheering_zone-328"
  | "Mesh21517_3Ru-cheering_zone-122"
  | "Mesh21667_3Ru-cheering_zone-229"
  | "Mesh22046_3Ru-cheering_zone-326"
  | "Mesh22397_3Ru-cheering_zone-125"
  | "Mesh22451_3Ru-cheering_zone-119"
  | "Mesh23225_3Ru-cheering_zone-120";

type GLTFResult = GLTF & {
  nodes: {
    [key in NodeKeys]: THREE.Mesh;
  };
  materials: { [key: string]: THREE.MeshStandardMaterial };
};

export function Cheering3RuModel({ showModal, handleMeshClick }: any) {
  const { nodes, materials } = useGLTF(
    "/models/cheering-3ru.glb",
  ) as GLTFResult;

  const [isHovered, setIsHovered] = useState(false);
  const [hoveredMesh, setHoveredMesh] = useState<string | null>(null);
  const [clickedMesh, setClickedMesh] = useState<TClickedMeshInfo | null>(null);

  const defaultColor = nodes["Mesh8727_3Ru-cheering_zone-331"]
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
  //       geometry={nodes["Mesh8727_3Ru-cheering_zone-331"].geometry}
  //       material={nodes["Mesh8727_3Ru-cheering_zone-331"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh8772_3Ru-cheering_zone-332"].geometry}
  //       material={nodes["Mesh8772_3Ru-cheering_zone-332"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh8827_3Ru-cheering_zone-235"].geometry}
  //       material={nodes["Mesh8827_3Ru-cheering_zone-235"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh9339_3Ru-cheering_zone-234"].geometry}
  //       material={nodes["Mesh9339_3Ru-cheering_zone-234"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh9722_3Ru-cheering_zone-126"].geometry}
  //       material={nodes["Mesh9722_3Ru-cheering_zone-126"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh15857_3Ru-cheering_zone-130"].geometry}
  //       material={nodes["Mesh15857_3Ru-cheering_zone-130"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh16724_3Ru-cheering_zone-123"].geometry}
  //       material={nodes["Mesh16724_3Ru-cheering_zone-123"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh17026_3Ru-cheering_zone-238"].geometry}
  //       material={nodes["Mesh17026_3Ru-cheering_zone-238"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh17139_3Ru-cheering_zone-237"].geometry}
  //       material={nodes["Mesh17139_3Ru-cheering_zone-237"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh17448_3Ru-cheering_zone-129"].geometry}
  //       material={nodes["Mesh17448_3Ru-cheering_zone-129"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh17961_3Ru-cheering_zone-236"].geometry}
  //       material={nodes["Mesh17961_3Ru-cheering_zone-236"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh18287_3Ru-cheering_zone-227"].geometry}
  //       material={nodes["Mesh18287_3Ru-cheering_zone-227"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh18359_3Ru-cheering_zone-228"].geometry}
  //       material={nodes["Mesh18359_3Ru-cheering_zone-228"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh18560_3Ru-cheering_zone-325"].geometry}
  //       material={nodes["Mesh18560_3Ru-cheering_zone-325"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh18605_3Ru-cheering_zone-324"].geometry}
  //       material={nodes["Mesh18605_3Ru-cheering_zone-324"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh18769_3Ru-cheering_zone-233"].geometry}
  //       material={nodes["Mesh18769_3Ru-cheering_zone-233"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh18784_3Ru-cheering_zone-232"].geometry}
  //       material={nodes["Mesh18784_3Ru-cheering_zone-232"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh18867_3Ru-cheering_zone-330"].geometry}
  //       material={nodes["Mesh18867_3Ru-cheering_zone-330"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh19105_3Ru-cheering_zone-329"].geometry}
  //       material={nodes["Mesh19105_3Ru-cheering_zone-329"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh19263_3Ru-cheering_zone-124"].geometry}
  //       material={nodes["Mesh19263_3Ru-cheering_zone-124"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh20190_3Ru-cheering_zone-121"].geometry}
  //       material={nodes["Mesh20190_3Ru-cheering_zone-121"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh20447_3Ru-cheering_zone-327"].geometry}
  //       material={nodes["Mesh20447_3Ru-cheering_zone-327"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh20487_3Ru-cheering_zone-230"].geometry}
  //       material={nodes["Mesh20487_3Ru-cheering_zone-230"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh20811_3Ru-cheering_zone-127"].geometry}
  //       material={nodes["Mesh20811_3Ru-cheering_zone-127"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh21021_3Ru-cheering_zone-128"].geometry}
  //       material={nodes["Mesh21021_3Ru-cheering_zone-128"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh21152_3Ru-cheering_zone-231"].geometry}
  //       material={nodes["Mesh21152_3Ru-cheering_zone-231"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh21452_3Ru-cheering_zone-328"].geometry}
  //       material={nodes["Mesh21452_3Ru-cheering_zone-328"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh21517_3Ru-cheering_zone-122"].geometry}
  //       material={nodes["Mesh21517_3Ru-cheering_zone-122"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh21667_3Ru-cheering_zone-229"].geometry}
  //       material={nodes["Mesh21667_3Ru-cheering_zone-229"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh22046_3Ru-cheering_zone-326"].geometry}
  //       material={nodes["Mesh22046_3Ru-cheering_zone-326"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh22397_3Ru-cheering_zone-125"].geometry}
  //       material={nodes["Mesh22397_3Ru-cheering_zone-125"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh22451_3Ru-cheering_zone-119"].geometry}
  //       material={nodes["Mesh22451_3Ru-cheering_zone-119"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh23225_3Ru-cheering_zone-120"].geometry}
  //       material={nodes["Mesh23225_3Ru-cheering_zone-120"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //   </group>
  // );
}

useGLTF.preload("/models/cheering-3ru.glb");
