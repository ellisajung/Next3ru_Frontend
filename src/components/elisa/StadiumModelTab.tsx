import { Card } from "@/components/shadcn-ui/card";
import Image from "next/image";
import AreaNameSwiper from "./AreaNameSwiper";
import StadiumModel from "./StadiumModel";
import { GrPowerReset } from "react-icons/gr";
import { Button } from "../shadcn-ui/button";
import { seatInfo } from "./seatInfo";
import { useState } from "react";
import SeatMapImg from "./SeatMapImg";

const StadiumModelTab = () => {
  // const [hide, setHide] = useState(true);
  const [hides, setHides] = useState<{ [key: string]: boolean }>(
    seatInfo.areas.reduce(
      (acc, curr) => ({ ...acc, [curr.area_name]: true }),
      {},
    ),
  ); // 동적 상태관리

  const handleToggleHide = (area: string) => {
    setHides((prevHides) => ({
      ...prevHides,
      [area]: !prevHides[area],
    }));
  };

  const handleReset = () => {
    setHides(
      seatInfo.areas.reduce(
        (acc, curr) => ({ ...acc, [curr.area_name]: true }),
        {},
      ),
    );
  };

  console.log(hides);

  return (
    <Card className="relative border-none w-full h-full flex flex-col dark:bg-black">
      <StadiumModel hides={hides} />
      <Card className="absolute min-w-min left-4 top-4 border-none flex flex-row items-center p-6 gap-10 bg-white bg-opacity-65 dark:bg-black dark:bg-opacity-55">
        <p className="text-2xl font-bold">3D 좌석안내도</p>
        <p className="full text-2xl font-semibold">|</p>
        <p className="text-2xl font-semibold">
          구역을 선택하여 좌석 정보와 리뷰를 확인해 보세요.
        </p>
      </Card>
      <div className="absolute w-[500px] inset-y-0 top-32 bottom-4 right-4 flex flex-col justify-between items-end">
        <Card className="border-none flex justify-center items-center bg-white bg-opacity-65 dark:bg-black dark:bg-opacity-55">
          <SeatMapImg />
        </Card>
        <Card className="w-[350px] h-[500px] border-none px-4 py-3 bg-white bg-opacity-65 dark:bg-black dark:bg-opacity-55">
          <div className="mb-6 p-1 flex justify-between items-center">
            <p className="text-lg font-semibold">구역 선택</p>
            <Button
              variant="outline"
              size="icon"
              className="border-none dark:bg-white dark:bg-opacity-20 bg-black bg-opacity-10"
              onClick={handleReset}
            >
              <GrPowerReset className="text-lg" />
            </Button>
          </div>
          <div
            id="area-name-swiper"
            className="w-full h-full max-h-96"
          >
            <AreaNameSwiper
              hides={hides}
              onToggleHide={handleToggleHide}
            />
          </div>
        </Card>
      </div>
    </Card>
  );
};

export default StadiumModelTab;
