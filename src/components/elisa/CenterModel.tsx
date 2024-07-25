import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

interface CenterModelProps {
  showModal: boolean;
  handleMeshClick: (info: any) => void;
}

export function CenterModel({ showModal, handleMeshClick }: CenterModelProps) {
  const { nodes, materials } = useGLTF("/models/center.glb") as unknown as {
    nodes: { [key: string]: Mesh };
    materials: any;
  };

  const [hoverColor, setHoverColor] = useState<string | null>(null);
  const [clickMesh, setClickMesh] = useState<{ id: string } | null>(null);

  const defaultColor = materials.lambert26SG;
  const hoveredColor = defaultColor?.clone();
  hoveredColor?.color.set("#333");

  const onClickMesh = (info: any) => {
    handleMeshClick(info);
    setClickMesh(info);
  };

  useEffect(() => {
    if (showModal == false) {
      setClickMesh(null);
    }
  }, [showModal]);

  const onMeshOver = (meshId: any) => {
    setHoverColor(meshId); // 현재 호버된 메쉬의 ID 저장
  };

  const onMeshOut = () => {
    setHoverColor(null); // 호버 상태 해제
  };

  const getColor = (meshId: any) => {
    if (clickMesh?.id === meshId) return hoveredColor; // 클릭된 메쉬일 때
    if (hoverColor === meshId) return hoveredColor; // 호버된 메쉬일 때
    return defaultColor; // 기본 재질
  };

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
        rotation={[Math.PI / 2, 0, 0]}
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
        rotation={[Math.PI / 2, 0, 0]}
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
        rotation={[Math.PI / 2, 0, 0]}
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
        rotation={[Math.PI / 2, 0, 0]}
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
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        onClick={() =>
          onClickMesh({
            name: nodes.Mesh7827_chair3_1_2139_Group77_allseats1_Model.name,
            text: "중앙",
          })
        }
        onPointerOver={() =>
          onMeshOver(nodes.Mesh7827_chair3_1_2139_Group77_allseats1_Model.name)
        }
        onPointerOut={onMeshOut}
        geometry={nodes.Mesh7827_chair3_1_2139_Group77_allseats1_Model.geometry}
        // material={nodes.Mesh7827_chair3_1_2139_Group77_allseats1_Model.material}
        material={getColor(
          nodes.Mesh7827_chair3_1_2139_Group77_allseats1_Model.name,
        )}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh8072_chair3_1_2384_Group77_allseats1_Model.geometry}
        material={nodes.Mesh8072_chair3_1_2384_Group77_allseats1_Model.material}
        rotation={[Math.PI / 2, 0, 0]}
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
        position={[45.21, -32.058, 0]}
        rotation={[Math.PI / 2, 0, 0]}
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
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh19819_chair3_1_7033_Component_158_19_Component_249_2_Group7
            .geometry
        }
        material={
          nodes.Mesh19819_chair3_1_7033_Component_158_19_Component_249_2_Group7
            .material
        }
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh26589_chair3_5_706_Group77_allseats1_Model.geometry}
        material={nodes.Mesh26589_chair3_5_706_Group77_allseats1_Model.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh26751_chair3_5_868_Group77_allseats1_Model.geometry}
        material={nodes.Mesh26751_chair3_5_868_Group77_allseats1_Model.material}
        rotation={[Math.PI / 2, 0, 0]}
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
        rotation={[Math.PI / 2, 0, 0]}
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
        position={[8.579, -28.189, 0]}
        rotation={[Math.PI / 2, 0, 0]}
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
        position={[30.886, -54.417, 0]}
        rotation={[Math.PI / 2, 0, 0]}
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
        rotation={[Math.PI / 2, 0, 0]}
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
        rotation={[Math.PI / 2, 0, 0]}
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
        rotation={[Math.PI / 2, 0, 0]}
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
        rotation={[Math.PI / 2, 0, 0]}
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
        rotation={[Math.PI / 2, 0, 0]}
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
        rotation={[Math.PI / 2, 0, 0]}
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
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/center.glb");
