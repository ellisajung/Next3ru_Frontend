// components/PlayerCard.tsx

import React from "react";
import Image from "next/image";
import Player from "@/store/Today-player";

const getColorClass = (rating: number) => {
  if (rating < 3.0) {
    return "bg-red-500";
  } else if (rating < 5.0) {
    return "bg-orange-500";
  } else if (rating < 8.0) {
    return "bg-green-500";
  } else {
    return "bg-blue-500";
  }
};

const PlayerCard: React.FC<Player> = ({
  name,
  imageUrl,
  number,
  position,
  role,
  rating,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="relative my-4 rounded-custom border border-black p-1 bg-black "
    >
      <div className="relative w-40 h-44">
        <Image src={imageUrl} alt={name} layout="fill" style={{ top: "-7%", left: "0%" }} />

        <div
          className={`absolute p-1 rounded-lg font-bold text-xl text-center w-12 h-8 ${getColorClass(
            rating
          )}`}
          style={{ top: "-10%", left: "90%" }}
        >
          {rating}
        </div>
        <div
          className="bg-black text-white text-lg absolute px-1 "
          style={{ top: "0%", left: "0%" }}
        >
          {role}
        </div>
      </div>
      <div className="text-white relative overflow-hidden p-1 rounded-lg">
        <div className="text-white-40 text-lg pl-1 flex justify-start ">No. {number}</div>
        <div className="ml-4 text-lg">
          {name}
          <Image
            src="/images/logo.svg"
            alt="로고다"
            width={51.37}
            height={54.17}
            className="absolute"
            style={{ top: "30%", left: "80%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
