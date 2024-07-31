import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "@/styles/elisa-copy.css";
import { seatInfo } from "@/components/elisa/seatInfo";

const AreaNameSwiper = () => {
  return (
    <div className="w-full h-full px-4 flex items-center">
      {console.log("area name swiper component loaded!") as any}
      <Swiper
        className="area-name-swiper"
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
