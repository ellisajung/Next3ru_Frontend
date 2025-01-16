"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import "../../styles/elisa-copy.css";
import { useEffect, useState } from "react";
import { fetchSupabaseData, useSupabseStore } from "@/store/SupabaseStore";

interface AreaNameSwiperProps {
  hides: { [key: string]: boolean };
  onToggleHide: (area: string) => void;
}

const AreaNameSwiper: React.FC<AreaNameSwiperProps> = ({
  hides,
  onToggleHide,
}) => {
  const { data } = useSupabseStore();
  if (!data) return null;

  console.log("AreaNameSwiper: ", data);

  return (
    <Swiper
      className="area-name-swiper"
      direction={"vertical"}
      slidesPerView={8}
      freeMode={true}
      mousewheel={true}
      scrollbar={true}
      modules={[FreeMode, Scrollbar, Mousewheel]}
    >
      {data.map(({ area_name, area_color }: any) => (
        <SwiperSlide key={area_name}>
          <div
            className="group relative flex justify-between items-center py-1"
            onClick={() => onToggleHide(area_name)}
          >
            <div
              className={`px-2 py-[2px] flex grow items-center gap-4 rounded-md transition-all duration-150 ease-in-out ${
                hides[area_name] ? "" : "bg-black/[.1] dark:bg-white/[.2]"
              }`}
            >
              <div
                className="w-5 h-5 rounded border-solid border-2 group-hover:outline transition-all duration-150 ease-in-out hover:outline-2 hover:outline-black dark:hover:outline-white"
                style={{ backgroundColor: area_color }}
              ></div>
              <p className="font-semibold group-hover:font-bold group-hover:text-lg transition-all duration-150 ease-in-out">
                {area_name}
              </p>
            </div>
            <div className="flex text-lg ml-4 mr-6 group-hover:text-2xl transition-all duration-150 ease-in-out">
              {hides[area_name] ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AreaNameSwiper;
