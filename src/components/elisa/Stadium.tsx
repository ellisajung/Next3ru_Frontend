import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  CameraControls,
  PerspectiveCamera,
  Center,
} from "@react-three/drei";
import Floor from "./Floor";
import Modal from "./Modal";
import { FirstBaseModel } from "./FirstBaseModel";
import { ThirdBaseModel } from "./ThirdBaseModel";
import { SkeletonModel } from "./SkeletonModel";
import { CenterModel } from "./CenterModel";
import { SkyModel } from "./SkyModel";
import { GrassModel } from "./GrassModel";

interface ClickInfo {
  id: string;
  name: string;
  position: [number, number, number];
}

export default function Stadium() {
  const cameraRef = useRef<any>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [clickInfo, setClickInfo] = useState<ClickInfo | null>(null);

  const handleMeshClick = (info: ClickInfo) => {
    setShowModal(true);
    setClickInfo(info); // 클릭된 메쉬의 정보를 상태에 저장
  };

  return (
    <div
      id="stadium"
      className="h-full"
    >
      <Canvas>
        <Center>
          <SkeletonModel
            showModal={showModal}
            handleMeshClick={handleMeshClick}
          />
          <FirstBaseModel
            showModal={showModal}
            handleMeshClick={handleMeshClick}
          />
          <ThirdBaseModel
            showModal={showModal}
            handleMeshClick={handleMeshClick}
          />
          <CenterModel
            showModal={showModal}
            handleMeshClick={handleMeshClick}
          />
          <SkyModel
            showModal={showModal}
            handleMeshClick={handleMeshClick}
          />
          <GrassModel
            showModal={showModal}
            handleMeshClick={handleMeshClick}
          />
          <Floor />
        </Center>
        <Environment
          background={false}
          preset="city"
        />
        <CameraControls
          makeDefault
          // enableZoom={true}
        />
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault={true}
          far={1000000}
          near={0.5}
          fov={13}
          position={[120, 0, -100]}
        />
      </Canvas>
      {/* {showModal ? (
        <Modal
          setShowModal={setShowModal}
          info={clickInfo}
        />
      ) : null} */}
    </div>
  );
}
