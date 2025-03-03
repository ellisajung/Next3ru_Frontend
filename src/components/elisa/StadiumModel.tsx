"use client";

import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  CameraControls,
  PerspectiveCamera,
  Center,
} from "@react-three/drei";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../shadcn-ui/dialog";
import SeatInfoDialog from "./SeatInfoDialog";

export interface IClickedMeshInfo {
  area_name: any;
  zone: any;
}

export default function StadiumModel({ hides }: any) {
  const cameraRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [clickedMeshInfo, setClickedMeshInfo] = useState<IClickedMeshInfo>();
  const [hoveredMeshInfo, setHoveredMeshInfo] = useState<IClickedMeshInfo>();

  const handleMeshClick = (info: IClickedMeshInfo) => {
    setShowModal(true);
    setClickedMeshInfo(info); // 클릭된 메쉬의 정보를 상태에 저장
  };

  const handleMeshHover = (info: IClickedMeshInfo) => {
    setHoveredMeshInfo(info); // 호버된 메쉬의 정보를 상태에 저장
  };

  return (
    <>
      <Dialog
        open={showModal}
        onOpenChange={setShowModal}
      >
        <DialogContent className="max-md:w-72 max-md:h-2/3">
          <SeatInfoDialog
            areaName={clickedMeshInfo?.area_name}
            zone={clickedMeshInfo?.zone}
          />
        </DialogContent>
      </Dialog>
      <Canvas>
        <Center>
          <SkeletonModel
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          <CenterModel
            areaName="중앙지정석"
            hides={hides}
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          <Cheering1RuModel
            areaName="응원지정석(1루)"
            hides={hides}
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          <Cheering3RuModel
            areaName="응원지정석(3루)"
            hides={hides}
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          <Exiting1RuModel
            areaName="하이파이브존"
            hides={hides}
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          <Exiting3RuModel
            areaName="익사이팅석"
            hides={hides}
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          <GiniTvModel
            areaName="지니TV석"
            hides={hides}
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          <GiniModel
            areaName="지니존"
            hides={hides}
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          <Grass1RuModel
            areaName="외야잔디(자유석)"
            hides={hides}
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          <Grass3RuModel
            areaName="외야잔디(자유석)"
            hides={hides}
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          <Kidsland4thModel
            areaName="키즈랜드존"
            hides={hides}
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          <Kidsland5thModel
            areaName="키즈랜드존"
            hides={hides}
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          <KtAlphaModel
            areaName="KT알파쇼핑석"
            hides={hides}
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          <Sky1RuModel
            areaName="스카이존(1루)"
            hides={hides}
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          <Sky3RuModel
            areaName="스카이존(3루)"
            hides={hides}
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          <TvingTableModel
            areaName="티빙테이블석(외야)"
            hides={hides}
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          <YBoxModel
            areaName="Y박스석"
            hides={hides}
            showModal={showModal}
            handleMeshHover={handleMeshHover}
            handleMeshClick={handleMeshClick}
          />
          {/* <TooltipModel
            position={[100, 100, 100]}
            text="tooltip"
          /> */}
          {/* <Floor /> */}
        </Center>
        <Environment
          background={false}
          preset="city"
        />
        <CameraControls makeDefault />
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault={true}
          far={1000000}
          near={0.5}
          fov={13}
          position={[6000, 4000, 4000]}
        />
      </Canvas>
    </>
  );
}
