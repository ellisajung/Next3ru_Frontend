"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "@/styles/elisa-copy.css";
import { seatInfo } from "@/components/elisa/seatInfo";

const AreaNameSwiper = () => {
  return (
    <div
      id="area-name-swiper"
      className="w-2/3 h-full flex items-center"
    >
      <Swiper
        direction={"vertical"}
        slidesPerView={"auto"}
        freeMode={true}
        scrollbar={true}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
      >
        {seatInfo.areas.map(({ area_name, area_color }) => (
          <SwiperSlide>
            <div className="w-full flex justify-start items-center p-1">
              <div
                className="w-5 h-5 rounded border-solid border-2 hover:outline hover:outline-2 hover:outline-black dark:hover:outline-white mr-2"
                style={{ backgroundColor: area_color }}
              ></div>
              <p>{area_name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AreaNameSwiper;
