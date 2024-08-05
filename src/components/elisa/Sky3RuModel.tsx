import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { TClickedMeshInfo } from "./StadiumModel";

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

export function Sky3RuModel({ showModal, handleMeshClick }: any) {
  const { nodes, materials } = useGLTF("/models/sky-3ru.glb") as GLTFResult;

  const [isHovered, setIsHovered] = useState(false);
  const [hoveredMesh, setHoveredMesh] = useState<string | null>(null);
  const [clickedMesh, setClickedMesh] = useState<TClickedMeshInfo | null>(null);

  const defaultColor = nodes["Mesh10445_Sky-3ru_zone-413"]
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
  //       geometry={nodes["Mesh10445_Sky-3ru_zone-413"].geometry}
  //       material={nodes["Mesh10445_Sky-3ru_zone-413"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh10445_Sky-3ru_zone-414"].geometry}
  //       material={nodes["Mesh10445_Sky-3ru_zone-414"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh10445_Sky-3ru_zone-424"].geometry}
  //       material={nodes["Mesh10445_Sky-3ru_zone-424"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh10445_Sky-3ru_zone-429"].geometry}
  //       material={nodes["Mesh10445_Sky-3ru_zone-429"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh10445_Sky-3ru_zone-432"].geometry}
  //       material={nodes["Mesh10445_Sky-3ru_zone-432"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh10445_Sky-3ru_zone-430"].geometry}
  //       material={nodes["Mesh10445_Sky-3ru_zone-430"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh10445_Sky-3ru_zone-431"].geometry}
  //       material={nodes["Mesh10445_Sky-3ru_zone-431"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh15721_Sky-3ru_zone-428"].geometry}
  //       material={nodes["Mesh15721_Sky-3ru_zone-428"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh15721_Sky-3ru_zone-427"].geometry}
  //       material={nodes["Mesh15721_Sky-3ru_zone-427"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh15721_Sky-3ru_zone-426"].geometry}
  //       material={nodes["Mesh15721_Sky-3ru_zone-426"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh15721_Sky-3ru_zone-425"].geometry}
  //       material={nodes["Mesh15721_Sky-3ru_zone-425"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh15721_Sky-3ru_zone-423"].geometry}
  //       material={nodes["Mesh15721_Sky-3ru_zone-423"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh15721_Sky-3ru_zone-422"].geometry}
  //       material={nodes["Mesh15721_Sky-3ru_zone-422"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh15721_Sky-3ru_zone-421"].geometry}
  //       material={nodes["Mesh15721_Sky-3ru_zone-421"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh15721_Sky-3ru_zone-420"].geometry}
  //       material={nodes["Mesh15721_Sky-3ru_zone-420"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh15721_Sky-3ru_zone-419"].geometry}
  //       material={nodes["Mesh15721_Sky-3ru_zone-419"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh15721_Sky-3ru_zone-418"].geometry}
  //       material={nodes["Mesh15721_Sky-3ru_zone-418"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh15721_Sky-3ru_zone-417"].geometry}
  //       material={nodes["Mesh15721_Sky-3ru_zone-417"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh15721_Sky-3ru_zone-415"].geometry}
  //       material={nodes["Mesh15721_Sky-3ru_zone-415"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //     <mesh
  //       castShadow
  //       receiveShadow
  //       geometry={nodes["Mesh15721_Sky-3ru_zone-416"].geometry}
  //       material={nodes["Mesh15721_Sky-3ru_zone-416"].material}
  //       rotation={[-3.141, -1.305, -3.141]}
  //       scale={0.292}
  //     />
  //   </group>
  // );
}

useGLTF.preload("/models/sky-3ru.glb");
