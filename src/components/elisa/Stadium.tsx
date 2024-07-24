import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  CameraControls,
  PerspectiveCamera,
  Center,
} from "@react-three/drei";
import Floor from "@/components/elisa/Floor";
import Modal from "@/components/elisa/Modal";
import StadiumModel from "@/components/elisa/StadiumModel";
import * as THREE from "three";

// interface IClickInfo {}

const Stadium = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [clickInfo, setClickInfo] = useState<any>();

  const handleMeshClick = (info: any) => {
    console.log(info);
    setShowModal(true);
    setClickInfo(info); // 클릭된 메쉬의 정보를 상태에 저장
  };

  return (
    <div className="stadium">
      {/* <Canvas>
        <Center> */}
      <StadiumModel
        showModal={showModal}
        handleMeshClick={handleMeshClick}
      />
      <Floor />
      {/* </Center>
        <Environment
          background={false}
          preset="city"
        />
        <CameraControls
          makeDefault
          enableZoom={true}
        />
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault={true}
          far={10000}
          near={0.2}
          fov={13}
          position={[120, 40, -100]}
        />
      </Canvas> */}
      {showModal ? (
        <Modal
          setShowModal={setShowModal}
          info={clickInfo}
        />
      ) : null}
    </div>
  );
};

export default Stadium;
