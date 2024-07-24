"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "@/styles/elisa.css";
import { seatInfo } from "@/components/elisa/seatInfo";

const AreaNameSwiper = () => {
  return (
    <div className="area-name-swiper">
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
            <div>
              <div>
                <div
                  className="w-3 h-3"
                  style={{ backgroundColor: area_color }}
                ></div>
              </div>
              <p>{area_name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AreaNameSwiper;
