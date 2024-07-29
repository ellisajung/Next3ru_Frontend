import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh5748_chair3_1_60_Group77_allseats1_Model: THREE.Mesh;
    Mesh5778_chair3_1_90_Group77_allseats1_Model: THREE.Mesh;
    Mesh6032_chair3_1_344_Group77_allseats1_Model: THREE.Mesh;
    Mesh6059_chair3_1_371_Group77_allseats1_Model: THREE.Mesh;
    Mesh6965_chair3_1_1277_Component_232_1_Group77_allseats1_Model: THREE.Mesh;
    Mesh16083_chair3_1_3297_Component_264_1_Group77_allseats1_Model: THREE.Mesh;
    Mesh16392_chair3_1_3606_Component_264_1_Group77_allseats1_Model: THREE.Mesh;
    Mesh16522_chair3_1_3736_Component_14_11_Component_211_1_Group77: THREE.Mesh;
    Mesh16609_chair3_1_3823_Component_103_6_Component_262_1_Group77: THREE.Mesh;
    Mesh16639_chair3_1_3853_Component_103_8_Component_262_1_Group77: THREE.Mesh;
    Mesh19141_chair3_1_6355_Component_231_10_Group77_allseats1_Mode: THREE.Mesh;
    Mesh19380_chair3_1_6594_Component_231_17_Group77_allseats1_Mode: THREE.Mesh;
    Mesh19404_chair3_1_6618_Component_231_18_Group77_allseats1_Mode: THREE.Mesh;
    Mesh19475_chair3_1_6689_Component_118_5_Component_259_1_Group77: THREE.Mesh;
    Mesh19674_chair3_1_6888_Component_118_20_Component_259_1_Group7: THREE.Mesh;
    Mesh20316_chair3_1_7530_Component_231_21_Group77_allseats1_Mode: THREE.Mesh;
    Mesh22787_chair3_1_10001_Component_162_7_Component_244_1_Group7: THREE.Mesh;
    Mesh23149_chair3_1_10363_Component_16_5_Component_241_1_Group77: THREE.Mesh;
    Mesh23780_chair3_1_10994_Component_48_3_Component_243_1_Group77: THREE.Mesh;
    Mesh23940_chair3_1_11154_Component_92_7_Component_228_1_Group77: THREE.Mesh;
    Mesh24131_chair3_1_11345_Component_30_9_Component_226_1_Group77: THREE.Mesh;
    Mesh24329_chair3_1_11543_Component_30_23_Component_226_1_Group7: THREE.Mesh;
    Mesh24550_chair3_1_11764_Component_23_8_Component_224_1_Group77: THREE.Mesh;
    Mesh24648_chair3_1_11862_Component_23_16_Component_224_1_Group7: THREE.Mesh;
    Mesh25167_chair3_1_12381_Group77_allseats1_Model: THREE.Mesh;
    Mesh25273_chair3_1_12487_Group77_allseats1_Model: THREE.Mesh;
    Mesh25506_chair3_1_12720_Group77_allseats1_Model: THREE.Mesh;
    Mesh25634_chair3_1_12848_Group77_allseats1_Model: THREE.Mesh;
    Mesh25661_chair3_1_12875_Group77_allseats1_Model: THREE.Mesh;
    Mesh25841_chair3_1_13055_Group77_allseats1_Model: THREE.Mesh;
    Mesh25999_chair3_1_13213_Group77_allseats1_Model: THREE.Mesh;
    Mesh26049_chair3_5_201_Group77_allseats1_Model: THREE.Mesh;
    Mesh26234_chair3_5_386_Group77_allseats1_Model: THREE.Mesh;
    Mesh26341_chair3_5_493_Group77_allseats1_Model: THREE.Mesh;
    Mesh26464_chair3_5_616_Group77_allseats1_Model: THREE.Mesh;
    Mesh27760_chair3_1_13304_Component_434_2_Component_479_1_Group7: THREE.Mesh;
    Mesh28127_chair3_1_13671_Component_434_28_Component_479_1_Group: THREE.Mesh;
    Mesh28311_chair3_1_13855_Component_452_6_Group77_allseats1_Mode: THREE.Mesh;
    Mesh28677_chair3_1_14221_Component_469_9_Group77_allseats1_Mode: THREE.Mesh;
    Mesh28805_chair3_1_14349_Component_501_2_Component_482_1_Group7: THREE.Mesh;
    Mesh29042_chair3_1_14586_Component_500_12_Component_459_1_Group: THREE.Mesh;
    Mesh29115_chair3_1_14659_Component_464_6_Group77_allseats1_Mode: THREE.Mesh;
    Mesh29153_chair3_1_14697_Group77_allseats1_Model: THREE.Mesh;
  };
  materials: {
    lambert26SG: THREE.MeshStandardMaterial;
  };
};

export function FirstBaseModel({ showModal, handleMeshClick }: any) {
  const { nodes, materials } = useGLTF("/models/firstbase.glb") as GLTFResult;

  const [hoverColor, setHoverColor] = useState<THREE.Mesh | null>(null);
  const [clickMesh, setClickMesh] = useState<THREE.Mesh | null>(null);

  const defaultColor = materials.lambert26SG;
  const hoveredColor = defaultColor?.clone();
  hoveredColor?.color.set("#333");

  const onClickMesh = (info: THREE.Mesh) => {
    handleMeshClick(info);
    setClickMesh(info);
  };

  useEffect(() => {
    if (showModal == false) {
      setClickMesh(null);
    }
  }, [showModal]);

  const onMeshOver = (meshId: THREE.Mesh) => {
    setHoverColor(meshId); // 현재 호버된 메쉬의 ID 저장
  };

  const onMeshOut = () => {
    setHoverColor(null); // 호버 상태 해제
  };

  const getColor = (meshId: THREE.Mesh) => {
    if (clickMesh === meshId) return hoveredColor; // 클릭된 메쉬일 때
    if (hoverColor === meshId) return hoveredColor; // 호버된 메쉬일 때
    return defaultColor; // 기본 재질
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
        geometry={nodes.Mesh5748_chair3_1_60_Group77_allseats1_Model.geometry}
        material={nodes.Mesh5748_chair3_1_60_Group77_allseats1_Model.material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh5778_chair3_1_90_Group77_allseats1_Model.geometry}
        material={nodes.Mesh5778_chair3_1_90_Group77_allseats1_Model.material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh6032_chair3_1_344_Group77_allseats1_Model.geometry}
        material={nodes.Mesh6032_chair3_1_344_Group77_allseats1_Model.material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh6059_chair3_1_371_Group77_allseats1_Model.geometry}
        material={nodes.Mesh6059_chair3_1_371_Group77_allseats1_Model.material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh6965_chair3_1_1277_Component_232_1_Group77_allseats1_Model
            .geometry
        }
        material={
          nodes.Mesh6965_chair3_1_1277_Component_232_1_Group77_allseats1_Model
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh16083_chair3_1_3297_Component_264_1_Group77_allseats1_Model
            .geometry
        }
        material={
          nodes.Mesh16083_chair3_1_3297_Component_264_1_Group77_allseats1_Model
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh16392_chair3_1_3606_Component_264_1_Group77_allseats1_Model
            .geometry
        }
        material={
          nodes.Mesh16392_chair3_1_3606_Component_264_1_Group77_allseats1_Model
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh16522_chair3_1_3736_Component_14_11_Component_211_1_Group77
            .geometry
        }
        material={
          nodes.Mesh16522_chair3_1_3736_Component_14_11_Component_211_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh16609_chair3_1_3823_Component_103_6_Component_262_1_Group77
            .geometry
        }
        material={
          nodes.Mesh16609_chair3_1_3823_Component_103_6_Component_262_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh16639_chair3_1_3853_Component_103_8_Component_262_1_Group77
            .geometry
        }
        material={
          nodes.Mesh16639_chair3_1_3853_Component_103_8_Component_262_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh19141_chair3_1_6355_Component_231_10_Group77_allseats1_Mode
            .geometry
        }
        material={
          nodes.Mesh19141_chair3_1_6355_Component_231_10_Group77_allseats1_Mode
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh19380_chair3_1_6594_Component_231_17_Group77_allseats1_Mode
            .geometry
        }
        material={
          nodes.Mesh19380_chair3_1_6594_Component_231_17_Group77_allseats1_Mode
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh19404_chair3_1_6618_Component_231_18_Group77_allseats1_Mode
            .geometry
        }
        material={
          nodes.Mesh19404_chair3_1_6618_Component_231_18_Group77_allseats1_Mode
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh19475_chair3_1_6689_Component_118_5_Component_259_1_Group77
            .geometry
        }
        material={
          nodes.Mesh19475_chair3_1_6689_Component_118_5_Component_259_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh19674_chair3_1_6888_Component_118_20_Component_259_1_Group7
            .geometry
        }
        material={
          nodes.Mesh19674_chair3_1_6888_Component_118_20_Component_259_1_Group7
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh20316_chair3_1_7530_Component_231_21_Group77_allseats1_Mode
            .geometry
        }
        material={
          nodes.Mesh20316_chair3_1_7530_Component_231_21_Group77_allseats1_Mode
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh22787_chair3_1_10001_Component_162_7_Component_244_1_Group7
            .geometry
        }
        material={
          nodes.Mesh22787_chair3_1_10001_Component_162_7_Component_244_1_Group7
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh23149_chair3_1_10363_Component_16_5_Component_241_1_Group77
            .geometry
        }
        material={
          nodes.Mesh23149_chair3_1_10363_Component_16_5_Component_241_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh23780_chair3_1_10994_Component_48_3_Component_243_1_Group77
            .geometry
        }
        material={
          nodes.Mesh23780_chair3_1_10994_Component_48_3_Component_243_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh23940_chair3_1_11154_Component_92_7_Component_228_1_Group77
            .geometry
        }
        material={
          nodes.Mesh23940_chair3_1_11154_Component_92_7_Component_228_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh24131_chair3_1_11345_Component_30_9_Component_226_1_Group77
            .geometry
        }
        material={
          nodes.Mesh24131_chair3_1_11345_Component_30_9_Component_226_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh24329_chair3_1_11543_Component_30_23_Component_226_1_Group7
            .geometry
        }
        material={
          nodes.Mesh24329_chair3_1_11543_Component_30_23_Component_226_1_Group7
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh24550_chair3_1_11764_Component_23_8_Component_224_1_Group77
            .geometry
        }
        material={
          nodes.Mesh24550_chair3_1_11764_Component_23_8_Component_224_1_Group77
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh24648_chair3_1_11862_Component_23_16_Component_224_1_Group7
            .geometry
        }
        material={
          nodes.Mesh24648_chair3_1_11862_Component_23_16_Component_224_1_Group7
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh25167_chair3_1_12381_Group77_allseats1_Model.geometry
        }
        material={
          nodes.Mesh25167_chair3_1_12381_Group77_allseats1_Model.material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh25273_chair3_1_12487_Group77_allseats1_Model.geometry
        }
        material={
          nodes.Mesh25273_chair3_1_12487_Group77_allseats1_Model.material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh25506_chair3_1_12720_Group77_allseats1_Model.geometry
        }
        material={
          nodes.Mesh25506_chair3_1_12720_Group77_allseats1_Model.material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh25634_chair3_1_12848_Group77_allseats1_Model.geometry
        }
        material={
          nodes.Mesh25634_chair3_1_12848_Group77_allseats1_Model.material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh25661_chair3_1_12875_Group77_allseats1_Model.geometry
        }
        material={
          nodes.Mesh25661_chair3_1_12875_Group77_allseats1_Model.material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh25841_chair3_1_13055_Group77_allseats1_Model.geometry
        }
        material={
          nodes.Mesh25841_chair3_1_13055_Group77_allseats1_Model.material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh25999_chair3_1_13213_Group77_allseats1_Model.geometry
        }
        material={
          nodes.Mesh25999_chair3_1_13213_Group77_allseats1_Model.material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh26049_chair3_5_201_Group77_allseats1_Model.geometry}
        material={nodes.Mesh26049_chair3_5_201_Group77_allseats1_Model.material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh26234_chair3_5_386_Group77_allseats1_Model.geometry}
        material={nodes.Mesh26234_chair3_5_386_Group77_allseats1_Model.material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh26341_chair3_5_493_Group77_allseats1_Model.geometry}
        material={nodes.Mesh26341_chair3_5_493_Group77_allseats1_Model.material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh26464_chair3_5_616_Group77_allseats1_Model.geometry}
        material={nodes.Mesh26464_chair3_5_616_Group77_allseats1_Model.material}
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh27760_chair3_1_13304_Component_434_2_Component_479_1_Group7
            .geometry
        }
        material={
          nodes.Mesh27760_chair3_1_13304_Component_434_2_Component_479_1_Group7
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh28127_chair3_1_13671_Component_434_28_Component_479_1_Group
            .geometry
        }
        material={
          nodes.Mesh28127_chair3_1_13671_Component_434_28_Component_479_1_Group
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh28311_chair3_1_13855_Component_452_6_Group77_allseats1_Mode
            .geometry
        }
        material={
          nodes.Mesh28311_chair3_1_13855_Component_452_6_Group77_allseats1_Mode
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh28677_chair3_1_14221_Component_469_9_Group77_allseats1_Mode
            .geometry
        }
        material={
          nodes.Mesh28677_chair3_1_14221_Component_469_9_Group77_allseats1_Mode
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh28805_chair3_1_14349_Component_501_2_Component_482_1_Group7
            .geometry
        }
        material={
          nodes.Mesh28805_chair3_1_14349_Component_501_2_Component_482_1_Group7
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh29042_chair3_1_14586_Component_500_12_Component_459_1_Group
            .geometry
        }
        material={
          nodes.Mesh29042_chair3_1_14586_Component_500_12_Component_459_1_Group
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh29115_chair3_1_14659_Component_464_6_Group77_allseats1_Mode
            .geometry
        }
        material={
          nodes.Mesh29115_chair3_1_14659_Component_464_6_Group77_allseats1_Mode
            .material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Mesh29153_chair3_1_14697_Group77_allseats1_Model.geometry
        }
        material={
          nodes.Mesh29153_chair3_1_14697_Group77_allseats1_Model.material
        }
        rotation={[-3.141, -1.305, -3.141]}
        scale={0.202}
      />
    </group>
  );
}

useGLTF.preload("/models/firstbase.glb");
