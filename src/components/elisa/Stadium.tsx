"use client";

import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  CameraControls,
  PerspectiveCamera,
  Center,
} from "@react-three/drei";
import Floor from "./Floor";
import { SkeletonModel } from "./SkeletonModel";
import { CenterModel } from "./CenterModel";
import { Cheering1RuModel } from "./Cheering1RuModel";
import { Cheering3RuModel } from "./Cheering3RuModel";
import { Exiting1RuModel } from "./Exiting1RuModel";
import { Exiting3RuModel } from "./Exiting3RuModel";
import { GiniTvModel } from "./GiniTvModel";
import { GiniModel } from "./GiniModel";
import { Grass1RuModel } from "./Grass1RuModel";
import { Grass3RuModel } from "./Grass3RuModel";
import { Kidsland4thModel } from "./Kidsland4thModel";
import { Kidsland5thModel } from "./Kidsland5thModel";
import { KtAlphaModel } from "./KtAlphaModel";
import { Sky1RuModel } from "./Sky1RuModel";
import { Sky3RuModel } from "./Sky3RuModel";
import { TvingTableModel } from "./TvingTableModel";
import { YBoxModel } from "./YBoxModel";
import SeatInfoModal from "./SeatInfoModal";

export type TClickedMeshInfo = {
  area_name: string;
  zone: string;
};

export default function Stadium() {
  const cameraRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [clickedMeshInfo, setClickedMeshInfo] = useState<
    TClickedMeshInfo | undefined
  >();

  const handleMeshClick = (info: TClickedMeshInfo) => {
    setShowModal(true);
    console.log("setting modal to true!");
    // console.log(showModal); // false
    setClickedMeshInfo(info); // 클릭된 메쉬의 정보를 상태에 저장
    console.log(info);
  };

  console.log(showModal); // true

  return (
    <div
      id="stadium"
      className="relative h-full"
      // className="h-full" // 아니 이거 때문이라니...
    >
      <Canvas>
        <Center>
          <SkeletonModel
            showModal={showModal}
            handleMeshClick={handleMeshClick}
          />
          <CenterModel
            showModal={showModal}
            handleMeshClick={handleMeshClick}
          />
          <Cheering1RuModel
            showModal={showModal}
            handleMeshClick={handleMeshClick}
          />
          <Cheering3RuModel
            showModal={showModal}
            handleMeshClick={handleMeshClick}
          />
          <Exiting1RuModel
            showModal={showModal}
            handleMeshClick={handleMeshClick}
          />
          <Exiting3RuModel
            showModal={showModal}
            handleMeshClick={handleMeshClick}
          />
          <GiniTvModel
            showModal={showModal}
            handleMeshClick={handleMeshClick}
          />
          <GiniModel
            showModal={showModal}
            handleMeshClick={handleMeshClick}
          />
          <Grass1RuModel
            showModal={showModal}
            handleMeshClick={handleMeshClick}
          />
          <Grass3RuModel
            showModal={showModal}
            handleMeshClick={handleMeshClick}
          />
          <Kidsland4thModel
            showModal={showModal}
            handleMeshClick={handleMeshClick}
          />
          <Kidsland5thModel
            showModal={showModal}
            handleMeshClick={handleMeshClick}
          />
          <KtAlphaModel
            showModal={showModal}
            handleMeshClick={handleMeshClick}
          />
          <Sky1RuModel
            showModal={showModal}
            handleMeshClick={handleMeshClick}
          />
          <Sky3RuModel
            showModal={showModal}
            handleMeshClick={handleMeshClick}
          />
          <TvingTableModel
            showModal={showModal}
            handleMeshClick={handleMeshClick}
          />
          <YBoxModel
            showModal={showModal}
            handleMeshClick={handleMeshClick}
          />
          {/* <Floor /> */}
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
      {showModal && (
        <SeatInfoModal
          setShowModal={setShowModal} // 에러 해결: https://velog.io/@keynene/ErrorTypeScript-TS2322-Type-DispatchSetStateActionboolean-is-not-assignable-to-type-boolean.-setState%EB%8A%94-boolean%ED%83%80%EC%9E%85%EC%9D%B4-%EC%95%84%EB%8B%98-ReactTypeScript%EC%97%90%EC%84%9C-setState-props-%EC%A0%84%EB%8B%AC%ED%95%98%EA%B8%B0
          info={clickedMeshInfo}
        />
      )}
    </div>
  );
}
