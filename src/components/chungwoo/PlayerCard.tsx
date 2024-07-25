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

interface PlayerCardProps {
  name: string;
  imageUrl: string;
  number: string;
  position_translated: string;
  rating: number;
  pcode: string;
  changeinn: string;
  isMaxRating: boolean;
}
const PlayerCard: React.FC<PlayerCardProps> = ({
  name,
  imageUrl,
  number,
  position_translated,
  rating,
  pcode,
  changeinn,
  isMaxRating,
}) => {
  const colorClass = getColorClass(rating);
  const imageSrc = getImageSrc(rating);

  return (
    <div
      className={`relative p-1 rounded-[18px] border border-black bg-black ${
        isMaxRating ? "animate-pulseBorder animate-burningImage" : ""
      }`}
    >
      <Image src={imageUrl} alt={name} layout="fill" style={{ top: "-25%", left: "0%" }} />
      <div className="relative w-32 h-32">
        <div
          className={`absolute rounded-[9px] flex justify-center items-center p-1  font-bold text-lg  w-12 h-8 ${colorClass}`}
          style={{ top: "-15%", left: "-20%" }}
        >
          {rating.toFixed(2)}
        </div>
        <div className={`absolute w-20 h-20`} style={{ top: "-35%", left: "75%" }}>
          <Image src={imageSrc} alt="weather" layout="fill" />
        </div>
      </div>
      <div className="text-white relative overflow-hidden p-1 rounded-lg">
        <div className="flex justify-between text-sm">
          <div className="text-gray-400">No. {number}</div>
          <div className=" text-white">{position_translated}</div>
        </div>
        <div className="ml-4 text-lg">
          {name}
          <Image
            src="/images/card_logo.svg"
            alt="로고다"
            width={51.37}
            height={54.17}
            className="absolute"
            style={{ top: "50%", left: "75%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
