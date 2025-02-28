"use client";

import { Card, CardDescription, CardTitle } from "@/components/shadcn-ui/card";
import AreaNameSwiper from "./AreaNameSwiper";
import StadiumModel from "./StadiumModel";
import { GrPowerReset } from "react-icons/gr";
import { Button } from "../shadcn-ui/button";
import { useEffect, useState } from "react";
import SeatMapImg from "./SeatMapImg";
import { useQuery } from "@tanstack/react-query";
import { fetchSeatsData } from "@/app/actions/seats";
import { LuInfo } from "react-icons/lu";

const StadiumTab = () => {
  // const data = useSeatsStore((state) => state.data);
  // const fetchData = useSeatsStore((state) => state.fetchData);
  const [hides, setHides] = useState<{ [key: string]: boolean }>({});

  // useEffect(() => {
  //   fetchData();
  // }, []);
  const { data, error } = useQuery({
    queryKey: ["seats"],
    queryFn: fetchSeatsData,
  });

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
      data?.reduce(
        (acc: any, curr: any) => ({ ...acc, [curr.area_name]: true }),
        {},
      ),
    );
  };

  // console.log(hides);

  return (
    <>
      <div className="relative w-full h-full">
        <StadiumModel hides={hides} />
        {/* 페이지 설명 카드 */}
        <div className="absolute top-0 left-0 px-4 pt-14 xl:pt-16">
          <Card className="rounded-xl flex min-w-min p-4 gap-2 md:gap-10 border-none items-center bg-white bg-opacity-65 dark:bg-black dark:bg-opacity-55">
            <CardTitle className="max-md:hidden text-lg">
              3D 좌석 안내도
            </CardTitle>
            <LuInfo className="md:hidden" />
            <CardDescription className="dark:text-white">
              구역을 선택하여 좌석 정보를 확인해 보세요.
            </CardDescription>
          </Card>
        </div>
        {/* 지도 & 구역이름 카드 */}
        <div className="absolute bottom-0 right-0 p-4">
          <div className="min-w-max flex justify-center items-center md:gap-8 rounded-xl bg-white bg-opacity-65 dark:bg-black dark:bg-opacity-55 p-4">
            {/* 2D 지도 카드 */}
            <div className="max-md:hidden min-w-max flex justify-center items-center relative">
              <SeatMapImg />
            </div>
            {/* 구역이름 스와이퍼 카드 */}
            <div className="max-xl:w-60 xl:w-80 max-xl:h-60 xl:h-80 flex flex-col justify-start gap-3 text-sm">
              <div className="flex justify-between items-center">
                <p className="font-semibold">구역 선택</p>
                <Button
                  variant="outline"
                  className="rounded-xl p-2 text-lg"
                  onClick={handleReset}
                >
                  <GrPowerReset />
                </Button>
              </div>
              <div className="w-full max-xl:h-48 xl:h-64">
                <AreaNameSwiper
                  hides={hides}
                  onToggleHide={handleToggleHide}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StadiumTab;
