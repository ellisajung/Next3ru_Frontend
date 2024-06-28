// components/PlayerCard.tsx

import React from "react";
import Image from "next/image";

interface PlayerCardProps {
  name: string;
  imageUrl: string;
  number: string;
  position: {
    top: string;
    left: string;
  };
  role: string;
  rating: number;
}

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

const PlayerCard: React.FC<PlayerCardProps> = ({ name, imageUrl, number, position, role, rating }) => {
  return (
    <div className="relative my-4 rounded-custom border border-black p-1 bg-black w-122 h-166.87">
      <div className="relative">
        <Image src={imageUrl} alt={name} width={113} height={151} />
        <div className={`absolute px-1 rounded-custom text-lg ${getColorClass(rating)}`} style={{ top: "-13%", left: "88%" }}>
          {rating}
        </div>
        <div className="bg-black text-white text-sm absolute px-1 " style={{ top: "0%", left: "0%" }}>
          {role}
        </div>
      </div>
      <div className="text-white relative overflow-hidden p-1 rounded-lg">
        <div className="text-white-40 text-sm pl-1 flex justify-start ">No. {number}</div>

        <div className="ml-4 ">
          {name}
          <Image src="/images/logo.svg" alt="로고다" width={41.37} height={44.17} className="absolute" style={{ top: "12%", left: "73%" }} />
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
