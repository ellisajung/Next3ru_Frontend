import { Card } from "@/components/shadcn-ui/card";
import Image from "next/image";
import AreaNameSwiper from "./AreaNameSwiper";
import StadiumModel from "./StadiumModel";

const StadiumModelTab = () => {
  return (
    <Card className="relative border-none h-full flex flex-col dark:bg-black">
      <StadiumModel />
      <Card className="absolute border-none left-4 top-4 bg-white bg-opacity-65 dark:bg-black dark:bg-opacity-55">
        <div className="flex flex-row items-center p-6 gap-16">
          <p className="text-2xl font-bold">3D 좌석안내도</p>
          <p className="text-lg font-semibold">
            |&nbsp;&nbsp;&nbsp;구역을 선택하여 좌석 정보와 리뷰를 확인해 보세요.
          </p>
        </div>
      </Card>
      <div className="absolute inset-y-0 top-4 bottom-4 right-4 flex flex-col justify-between">
        <Card className="border-none flex justify-center items-center bg-white bg-opacity-65 dark:bg-black dark:bg-opacity-55">
          <Image
            src="/images/elisa/seatmap.png"
            alt="baseball-field-icon"
            width={300}
            height={300}
          />
        </Card>
        <div>
          <span className="text-lg font-semibold p-1">구역 선택</span>
          <Card className="border-none h-96 flex justify-center items-center bg-white bg-opacity-65 dark:bg-black dark:bg-opacity-55">
            <AreaNameSwiper />
          </Card>
        </div>
      </div>
    </Card>
  );
};

export default StadiumModelTab;
