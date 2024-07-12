// components/PlayerCard.tsx

import React from "react";
import Image from "next/image";

const getColorClass = (rating: number) => {
  if (rating < 2.0) {
    return "bg-violet-500";
  } else if (rating < 4.0) {
    return "bg-blue-500";
  } else if (rating < 6.0) {
    return "bg-green-500";
  } else if (rating < 8.0) {
    return "bg-orange-500";
  } else {
    return "bg-red-500 ";
  }
};
const getImageSrc = (rating: number) => {
  if (rating < 2.0) {
    return "/images/번개.svg";
  } else if (rating < 4.0) {
    return "/images/비.svg";
  } else if (rating < 6.0) {
    return "/images/구름.svg";
  } else if (rating < 8.0) {
    return "/images/해구름.svg";
  } else {
    return "/images/해.svg";
  }
};

const getImageTop = (imageSrc: String) => {
  if (imageSrc === "/images/번개.svg") {
    return "-37%";
  } else if (imageSrc === "/images/비.svg") {
    return "-37%";
  } else {
    return "-37%";
  }
};

const getImageLeft = (imageSrc: String) => {
  if (imageSrc === "/images/해구름.svg") {
    return "-50%";
  } else if (imageSrc === "/images/구름.svg") {
    return "-50%";
  } else {
    return "-50%";
  }
};
interface PlayerCardProps {
  name: string;
  imageUrl: string;
  number: string;
  position_translated: string;
  rating: number;
  pcode: string;
  changeinn: string;
}
const PlayerCard: React.FC<PlayerCardProps> = ({
  name,
  imageUrl,
  number,
  position_translated,
  rating,
  pcode,
  changeinn,
}) => {
  const colorClass = getColorClass(rating);
  const imageSrc = getImageSrc(rating);

  return (
    <div className="relative my-4 p-1 rounded-[18px] border border-black bg-black ">
      <div className="relative w-32 h-36">
        <Image src={imageUrl} alt={name} layout="fill" style={{ top: "0%", left: "0%" }} />

        <div
          className={`absolute p-1 rounded-[18px] font-bold text-xl text-center w-16 h-8 ${colorClass}`}
          style={{ top: "-10%", left: "80%" }}
        >
          {rating.toFixed(2)}
        </div>
        <div
          className={`absolute w-32 h-28`}
          style={{ top: getImageTop(imageSrc), left: getImageLeft(imageSrc) }}
        >
          <Image src={imageSrc} alt="weather" layout="fill" />
        </div>
      </div>
      <div className="text-white relative overflow-hidden p-1 rounded-lg">
        <div className="text-white-40 text-lg pl-1 flex justify-start ">No. {number}</div>
        <div
          className="bg-black text-white text-lg absolute px-1"
          style={{ top: "6%", left: "80%" }}
        >
          {position_translated}
        </div>
        <div className="ml-4 text-lg">
          {name}
          <Image
            src="/images/logo.svg"
            alt="로고다"
            width={51.37}
            height={54.17}
            className="absolute"
            style={{ top: "50%", left: "70%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
