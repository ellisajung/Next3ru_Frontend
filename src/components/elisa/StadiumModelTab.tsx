import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn-ui/card";
import Image from "next/image";
import AreaNameSwiper from "./AreaNameSwiper";
import Stadium from "./Stadium";
import { Button } from "../shadcn-ui/button";
import { useState } from "react";
import SeatInfoModal from "./SeatInfoModal";

const StadiumModelTab = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <Card
      id="elisa"
      className="h-[900px] flex flex-col bg-gray-500 bg-opacity-15"
    >
      <CardHeader className="mb-4">
        <CardTitle>3D 좌석안내도</CardTitle>
        <CardDescription className="text-md">
          구역을 선택하여 좌석 정보를 확인해 보세요.
          <Button onClick={() => setShowModal(!showModal)}>
            좌석정보 모달창
          </Button>
        </CardDescription>
      </CardHeader>
      <CardContent className="grow">
        <div className="h-full grid grid-cols-5 gap-2">
          <div className="col-span-4">
            <Stadium />
          </div>
          <div className="col-span-1 flex flex-col ml-4">
            <Card className="grow flex justify-center items-center bg-gray-500 bg-opacity-20">
              <Image
                src="/images/elisa/seatmap.png"
                alt="baseball-field-icon"
                width={500}
                height={500}
              />
            </Card>
            <span className="grow-0 text-lg font-semibold p-1 mt-4">
              구역 선택
            </span>
            <Card className="grow flex justify-center bg-gray-500 bg-opacity-20">
              <AreaNameSwiper />
            </Card>
          </div>
        </div>
        {console.log("loaded!") as any}
      </CardContent>
      {showModal && (
        <SeatInfoModal
          setShowModal={setShowModal}
          info={{ area_name: "중앙지정석", zone: "113" }}
        />
      )}
    </Card>
  );
};

export default StadiumModelTab;
