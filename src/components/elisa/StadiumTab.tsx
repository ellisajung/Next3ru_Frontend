"use client";

import { Card, CardDescription, CardTitle } from "@/components/shadcn-ui/card";
import AreaNameSwiper from "./AreaNameSwiper";
import StadiumModel from "./StadiumModel";
import { GrPowerReset } from "react-icons/gr";
import { Button } from "../shadcn-ui/button";
import { useEffect, useState } from "react";
import SeatMapImg from "./SeatMapImg";
import { useSeatsStore } from "@/store/SeatsStore";
import { CardHeader } from "@nextui-org/react";

const StadiumTab = () => {
  const data = useSeatsStore((state) => state.data);
  const fetchData = useSeatsStore((state) => state.fetchData);
  const [hides, setHides] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      setHides(
        data.reduce(
          (acc: any, curr: any) => ({ ...acc, [curr.area_name]: true }),
          {},
        ),
      );
    }
  }, [data]);

  const handleToggleHide = (area: string) => {
    setHides((prevHides) => ({
      ...prevHides,
      [area]: !prevHides[area],
    }));
  };

  const handleReset = () => {
    setHides(
      data.reduce(
        (acc: any, curr: any) => ({ ...acc, [curr.area_name]: true }),
        {},
      ),
    );
  };

  console.log(hides);

  return (
    <Card className="relative rounded-xl border-none w-full h-full flex flex-col dark:bg-black">
      <StadiumModel hides={hides} />
      <Card className="rounded-xl flex flex-col absolute min-w-min left-4 top-4 p-4 gap-2 border-none items-start bg-white bg-opacity-65 dark:bg-black dark:bg-opacity-55">
        <CardTitle className="text-black dark:text-white">
          3D 좌석 안내도
        </CardTitle>
        <CardDescription className="text-black dark:text-white">
          구역을 선택하여 좌석 정보와 리뷰를 확인해 보세요.
        </CardDescription>
      </Card>
      <div className="absolute w-[500px] inset-y-0 top-32 bottom-4 right-4 flex flex-col justify-between items-end">
        <Card className="rounded-xl border-none flex justify-center items-center bg-white bg-opacity-65 dark:bg-black dark:bg-opacity-55">
          <SeatMapImg />
        </Card>
        <Card className="rounded-xl w-[350px] h-[500px] border-none px-4 py-3 bg-white bg-opacity-65 dark:bg-black dark:bg-opacity-55">
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
          <AreaNameSwiper
            hides={hides}
            onToggleHide={handleToggleHide}
          />
        </Card>
      </div>
    </Card>
  );
};

export default StadiumTab;
