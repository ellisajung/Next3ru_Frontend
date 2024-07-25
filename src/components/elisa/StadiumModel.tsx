// https://codesandbox.io/s/brnsm?file=/src/App.tsx

import { useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

interface IStadiumModelProps {
  showModal: boolean;
  handleMeshClick: (info: any) => void;
}

const StadiumModel: React.FC<IStadiumModelProps> = ({
  showModal,
  handleMeshClick,
}) => {
  const { nodes, materials } = useGLTF("src/models/factory.glb") as any;

  const [hoverColor, setHoverColor] = useState<string>("");
  const [clickMesh, setClickMesh] = useState<any>();

  const defaultColor = materials.lambert26SG;
  const hoveredColor = defaultColor.clone();
  hoveredColor.color.set("#333");

  const onClickMesh = (info: { name: string; text: string }) => {
    handleMeshClick(info);
    setClickMesh(info);
  };

  useEffect(() => {
    if (showModal == false) {
      setClickMesh(null);
    }
  }, [showModal]);

  const onMeshOver = (meshId: string) => {
    setHoverColor(meshId); // 현재 호버된 메쉬의 ID 저장
  };

  const onMeshOut = () => {
    setHoverColor(""); // 호버 상태 해제
  };

  const getColor = (meshId: string) => {
    if (clickMesh?.name === meshId) return hoveredColor; // 클릭된 메쉬일 때
    if (hoverColor === meshId) return hoveredColor; // 호버된 메쉬일 때
    return defaultColor; // 기본 재질
  };

  return (
    <group dispose={null}>
      <group
        rotation={[-Math.PI / 2, 0, 0]}
        position={[-3, 0, -10]}
      >
        <mesh
          onClick={() =>
            onClickMesh({ name: nodes.Object_30.name, text: "저장통" })
          }
          onPointerOver={() => onMeshOver(nodes.Object_30.name)}
          onPointerOut={onMeshOut}
          material={getColor(nodes.Object_30.name)}
          castShadow
          receiveShadow
          geometry={nodes.Object_30.geometry}
        />
      </group>
    </group>
  );
};

export default StadiumModel;
