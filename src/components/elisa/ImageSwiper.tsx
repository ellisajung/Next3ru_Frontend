import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../../styles/image-swiper.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

const ImageSwiper = ({ imgUrls }: { imgUrls: string[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={5}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {imgUrls?.map((url: string, i) => (
          <SwiperSlide key={i}>
            <Image
              src={url}
              alt="Thumbnail Image"
              width={500}
              height={500}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={(swiperInstance: SwiperClass) =>
          setThumbsSwiper(swiperInstance)
        }
        loop={true}
        spaceBetween={2}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {imgUrls?.map((url: string, i: number) => (
          <SwiperSlide key={i}>
            <Image
              src={url}
              alt="Image List"
              width={200}
              height={200}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ImageSwiper;
