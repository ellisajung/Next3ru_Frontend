"use client";

import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { type TClickedMeshInfo } from "@/components/elisa/Stadium";

type GLTFResult = GLTF & {
  nodes: {
    ["Mesh6271_Center_zone-218"]: THREE.Mesh;
    ["Mesh6375_Center_zone-315"]: THREE.Mesh;
    ["Mesh6693_Center_zone-316"]: THREE.Mesh;
    ["Mesh6925_Center_zone-219"]: THREE.Mesh;
    ["Mesh26589_Center_zone-223"]: THREE.Mesh;
    ["Mesh26751_Center_zone-320"]: THREE.Mesh;
    ["Mesh26954_Center_zone-221"]: THREE.Mesh;
    ["Mesh27107_Center_zone-222"]: THREE.Mesh;
    ["Mesh27135_Center_zone-318"]: THREE.Mesh;
    ["Mesh27152_Center_zone-319"]: THREE.Mesh;
    ["Mesh27367_Center_zone-220"]: THREE.Mesh;
    ["Mesh27602_Center_zone-317"]: THREE.Mesh;
    ["Mesh29412_Center_zone-313"]: THREE.Mesh;
    ["Mesh29416_Center_zone-314"]: THREE.Mesh;
    ["Mesh29567_Center_zone-216"]: THREE.Mesh;
    ["Mesh29609_Center_zone-217"]: THREE.Mesh;
  };
  materials: { [key: string]: THREE.MeshStandardMaterial };
};

export function CenterModel({ showModal, handleMeshClick }: any) {
  const { nodes, materials } = useGLTF("/models/center.glb") as GLTFResult;

  const [hoveredMesh, setHoveredMesh] = useState<string | null>(null);
  const [clickedMesh, setClickedMesh] = useState<TClickedMeshInfo | null>(null);

  const defaultColor = nodes["Mesh6271_Center_zone-218"]
    .material as THREE.MeshStandardMaterial;
  const hoverColor = defaultColor.clone();
  hoverColor.color.set("#702CA4");

  const onClickMesh = (info: TClickedMeshInfo): void => {
    console.log("clicked!!");
    handleMeshClick(info);
    // console.log(showModal); // false
    setClickedMesh(info);
  };

  const onMeshOver = (meshName: string): void => {
    setHoveredMesh(meshName);
  };

  const onMeshOut = (): void => {
    setHoveredMesh(null);
  };

  const getColor = (meshName: string) => {
    if (clickedMesh?.area_name === meshName || hoveredMesh === meshName)
      return hoverColor;
    return defaultColor;
  };

  useEffect(() => {
    if (showModal == false) {
      setClickedMesh(null);
    }
  }, [showModal]);

  return (
    <group dispose={null}>
      <mesh
        onClick={() =>
          onClickMesh({
            area_name: nodes["Mesh6271_Center_zone-218"].name,
            zone: "113",
          })
        }
        onPointerOver={() => onMeshOver(nodes["Mesh6271_Center_zone-218"].name)}
        onPointerOut={onMeshOut}
        material={getColor(nodes["Mesh6271_Center_zone-218"].name)}
        geometry={nodes["Mesh6271_Center_zone-218"].geometry}
        // material={nodes["Mesh6271_Center_zone-218"].material}
        castShadow
        receiveShadow
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh6375_Center_zone-315"].geometry}
        material={nodes["Mesh6375_Center_zone-315"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh6693_Center_zone-316"].geometry}
        material={nodes["Mesh6693_Center_zone-316"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh6925_Center_zone-219"].geometry}
        material={nodes["Mesh6925_Center_zone-219"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh26589_Center_zone-223"].geometry}
        material={nodes["Mesh26589_Center_zone-223"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh26751_Center_zone-320"].geometry}
        material={nodes["Mesh26751_Center_zone-320"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh26954_Center_zone-221"].geometry}
        material={nodes["Mesh26954_Center_zone-221"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh27107_Center_zone-222"].geometry}
        material={nodes["Mesh27107_Center_zone-222"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh27135_Center_zone-318"].geometry}
        material={nodes["Mesh27135_Center_zone-318"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh27152_Center_zone-319"].geometry}
        material={nodes["Mesh27152_Center_zone-319"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh27367_Center_zone-220"].geometry}
        material={nodes["Mesh27367_Center_zone-220"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh27602_Center_zone-317"].geometry}
        material={nodes["Mesh27602_Center_zone-317"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh29412_Center_zone-313"].geometry}
        material={nodes["Mesh29412_Center_zone-313"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh29416_Center_zone-314"].geometry}
        material={nodes["Mesh29416_Center_zone-314"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh29567_Center_zone-216"].geometry}
        material={nodes["Mesh29567_Center_zone-216"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh29609_Center_zone-217"].geometry}
        material={nodes["Mesh29609_Center_zone-217"].material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.292}
      />
    </group>
  );
}

useGLTF.preload("/models/center.glb");
