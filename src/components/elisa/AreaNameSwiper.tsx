import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import "../../styles/elisa-copy.css";
import { seatInfo } from "@/components/elisa/seatInfo";
import { useState } from "react";

const AreaNameSwiper = () => {
  // const [hide, setHide] = useState(true);
  const [hides, setHides] = useState<{ [key: number]: boolean }>(
    seatInfo.areas.reduce((acc, _, i) => ({ ...acc, [i]: true }), {}),
  ); // 동적 상태관리

  const toggleHide = (i: number) => {
    setHides((prevHides) => ({
      ...prevHides,
      [i]: !prevHides[i],
    }));
  };

  return (
    <div
      id="area-name-swiper"
      className="w-full h-full py-4 px-6 flex items-center"
    >
      <Swiper
        className="area-name-swiper"
        direction={"vertical"}
        slidesPerView={"auto"}
        freeMode={true}
        mousewheel={true}
        scrollbar={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
      >
        {seatInfo.areas.map(({ area_name, area_color }, i) => (
          <SwiperSlide key={i}>
            <div className="group relative flex justify-between items-center p-1">
              <div className="flex grow items-center gap-4">
                <div
                  className="w-5 h-5 rounded border-solid border-2 group-hover:outline transition-all duration-150 ease-in-out hover:outline-2 hover:outline-black dark:hover:outline-white"
                  style={{ backgroundColor: area_color }}
                ></div>
                <p className="font-semibold group-hover:font-bold group-hover:text-lg transition-all duration-150 ease-in-out">
                  {area_name}
                </p>
              </div>
              <button
                onClick={() => toggleHide(i)}
                className="flex text-lg mx-5 group-hover:text-2xl transition-all duration-150 ease-in-out"
              >
                {hides[i] ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AreaNameSwiper;
