import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh6271_chair3_1_583_Component_253_1_Group77_allseats1_Model: THREE.Mesh;
    Mesh6375_chair3_1_687_Component_253_1_Group77_allseats1_Model: THREE.Mesh;
    Mesh6693_chair3_1_1005_Component_254_1_Group77_allseats1_Model: THREE.Mesh;
    Mesh6925_chair3_1_1237_Component_254_1_Group77_allseats1_Model: THREE.Mesh;
    Mesh7189_chair3_1_1501_Component_158_14_Component_249_1_Group77: THREE.Mesh;
    Mesh7827_chair3_1_2139_Group77_allseats1_Model: THREE.Mesh;
    Mesh8072_chair3_1_2384_Group77_allseats1_Model: THREE.Mesh;
    Mesh8269_chair3_1_2581_Group77_allseats1_Model001: THREE.Mesh;
    Mesh8401_chair3_1_2713_Component_265_1_Group77_allseats1_Model: THREE.Mesh;
    Mesh19819_chair3_1_7033_Component_158_19_Component_249_2_Group7: THREE.Mesh;
    Mesh26589_chair3_5_706_Group77_allseats1_Model: THREE.Mesh;
    Mesh26751_chair3_5_868_Group77_allseats1_Model: THREE.Mesh;
    Mesh26954_chair3_5_1071_Group77_allseats1_Model: THREE.Mesh;
    Mesh27107_chair3_5_1224_Group77_allseats1_Model001: THREE.Mesh;
    Mesh27135_chair3_5_1252_Group77_allseats1_Model001: THREE.Mesh;
    Mesh27152_chair3_5_1269_Group77_allseats1_Model: THREE.Mesh;
    Mesh27367_chair3_5_1484_Group77_allseats1_Model: THREE.Mesh;
    Mesh27602_chair3_5_1719_Group77_allseats1_Model: THREE.Mesh;
    Mesh29412_chair3_5_2047_Group77_allseats1_Model: THREE.Mesh;
    Mesh29416_chair3_5_2051_Group77_allseats1_Model: THREE.Mesh;
    Mesh29567_chair3_5_2202_Group77_allseats1_Model: THREE.Mesh;
    Mesh29609_chair3_5_2244_Group77_allseats1_Model: THREE.Mesh;
  };
  materials: {
    lambert26SG: THREE.MeshStandardMaterial;
  };
};

export function CenterModel({ showModal, handleMeshClick }: any) {
  const { nodes, materials } = useGLTF("/models/center.glb") as GLTFResult;

  const [hoveredMesh, setHoveredMesh] = useState<THREE.Mesh | null>(null);
  const [clickedMesh, setClickedMesh] = useState<THREE.Mesh | null>(null);

  const defaultMaterial = materials.lambert26SG;
  const hoverMaterial = defaultMaterial?.clone();
  hoverMaterial?.color.set("#333");

  const onClickMesh = (info: any) => {
    handleMeshClick(info);
    // setClickedMesh(mesh);
  };
  // const onClickMesh = (mesh: THREE.Mesh, info: any) => {
  //   handleMeshClick(info);
  //   setClickedMesh(mesh);
  // };

  useEffect(() => {
    if (showModal == false) {
      setClickedMesh(null);
    }
  }, [showModal]);

  const onMeshOver = (mesh: THREE.Mesh) => {
    setHoveredMesh(mesh); // 현재 호버된 메쉬의 ID 저장
  };

  const onMeshOut = () => {
    setHoveredMesh(null); // 호버 상태 해제
  };

  // const getColor = (meshId: any) => {
  //   if (clickMesh === meshId) return hoveredColor; // 클릭된 메쉬일 때
  //   if (hoverColor === meshId) return hoveredColor; // 호버된 메쉬일 때
  //   return defaultColor; // 기본 재질
  // };

  const getMaterial = (mesh: THREE.Mesh) => {
    if (clickedMesh === mesh) return hoverMaterial; // 클릭된 메쉬일 때
    if (hoveredMesh === mesh) return hoverMaterial; // 호버된 메쉬일 때
    return defaultMaterial; // 기본 재질
  };

  // const meshes = Object.keys(nodes).map((key) => (
  //   <mesh
  //     key={key}
  //     castShadow
  //     receiveShadow
  //     geometry={nodes[key].geometry}
  //     material={getColor(nodes[key])}
  //     rotation={[-3.141, -1.305, -3.141]}
  //     scale={0.202}
  //     onClick={() => onClickMesh(nodes[key])}
  //     onPointerOver={() => onMeshOver(nodes[key])}
  //     onPointerOut={onMeshOut}
  //   />
  // ));

  // return <group dispose={null}>{meshes}</group>;

  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh6271_chair3_1_583_Component_253_1_Group77_allseats1_Model
            .geometry
        }
        material={
          nodes.Mesh6271_chair3_1_583_Component_253_1_Group77_allseats1_Model
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh6375_chair3_1_687_Component_253_1_Group77_allseats1_Model
            .geometry
        }
        material={
          nodes.Mesh6375_chair3_1_687_Component_253_1_Group77_allseats1_Model
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh6693_chair3_1_1005_Component_254_1_Group77_allseats1_Model
            .geometry
        }
        material={
          nodes.Mesh6693_chair3_1_1005_Component_254_1_Group77_allseats1_Model
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh6925_chair3_1_1237_Component_254_1_Group77_allseats1_Model
            .geometry
        }
        material={
          nodes.Mesh6925_chair3_1_1237_Component_254_1_Group77_allseats1_Model
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh7189_chair3_1_1501_Component_158_14_Component_249_1_Group77
            .geometry
        }
        material={
          nodes.Mesh7189_chair3_1_1501_Component_158_14_Component_249_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh7827_chair3_1_2139_Group77_allseats1_Model.geometry}
        material={nodes.Mesh7827_chair3_1_2139_Group77_allseats1_Model.material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh8072_chair3_1_2384_Group77_allseats1_Model.geometry}
        material={nodes.Mesh8072_chair3_1_2384_Group77_allseats1_Model.material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh8269_chair3_1_2581_Group77_allseats1_Model001.geometry
        }
        material={
          nodes.Mesh8269_chair3_1_2581_Group77_allseats1_Model001.material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh8401_chair3_1_2713_Component_265_1_Group77_allseats1_Model
            .geometry
        }
        material={
          nodes.Mesh8401_chair3_1_2713_Component_265_1_Group77_allseats1_Model
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        onClick={() =>
          onClickMesh({
            name: "지니존",
            text: "중앙",
          })
        }
        onPointerOver={() =>
          onMeshOver(
            nodes.Mesh19819_chair3_1_7033_Component_158_19_Component_249_2_Group7,
          )
        }
        onPointerOut={onMeshOut}
        material={getMaterial(
          nodes.Mesh19819_chair3_1_7033_Component_158_19_Component_249_2_Group7,
        )}
        // material={
        //   nodes.Mesh19819_chair3_1_7033_Component_158_19_Component_249_2_Group7
        //   .material
        // }
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh19819_chair3_1_7033_Component_158_19_Component_249_2_Group7
            .geometry
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh26589_chair3_5_706_Group77_allseats1_Model.geometry}
        material={nodes.Mesh26589_chair3_5_706_Group77_allseats1_Model.material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh26751_chair3_5_868_Group77_allseats1_Model.geometry}
        material={nodes.Mesh26751_chair3_5_868_Group77_allseats1_Model.material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh26954_chair3_5_1071_Group77_allseats1_Model.geometry
        }
        material={
          nodes.Mesh26954_chair3_5_1071_Group77_allseats1_Model.material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh27107_chair3_5_1224_Group77_allseats1_Model001.geometry
        }
        material={
          nodes.Mesh27107_chair3_5_1224_Group77_allseats1_Model001.material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh27135_chair3_5_1252_Group77_allseats1_Model001.geometry
        }
        material={
          nodes.Mesh27135_chair3_5_1252_Group77_allseats1_Model001.material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh27152_chair3_5_1269_Group77_allseats1_Model.geometry
        }
        material={
          nodes.Mesh27152_chair3_5_1269_Group77_allseats1_Model.material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh27367_chair3_5_1484_Group77_allseats1_Model.geometry
        }
        material={
          nodes.Mesh27367_chair3_5_1484_Group77_allseats1_Model.material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh27602_chair3_5_1719_Group77_allseats1_Model.geometry
        }
        material={
          nodes.Mesh27602_chair3_5_1719_Group77_allseats1_Model.material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh29412_chair3_5_2047_Group77_allseats1_Model.geometry
        }
        material={
          nodes.Mesh29412_chair3_5_2047_Group77_allseats1_Model.material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh29416_chair3_5_2051_Group77_allseats1_Model.geometry
        }
        material={
          nodes.Mesh29416_chair3_5_2051_Group77_allseats1_Model.material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh29567_chair3_5_2202_Group77_allseats1_Model.geometry
        }
        material={
          nodes.Mesh29567_chair3_5_2202_Group77_allseats1_Model.material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh29609_chair3_5_2244_Group77_allseats1_Model.geometry
        }
        material={
          nodes.Mesh29609_chair3_5_2244_Group77_allseats1_Model.material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
    </group>
  );
}

useGLTF.preload("/models/center.glb");
