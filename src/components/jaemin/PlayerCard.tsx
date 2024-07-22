// components/PlayerCard.tsx

import React from "react";
import Image from "next/image";

interface PlayerCardProps {
  name: string;
  imageUrl: string;
  num: string;
  position_translated: string;
  rating: number;
  pcode: string;
  changeinn: string;
}
const PlayerCard: React.FC<PlayerCardProps> = ({
  name,
  imageUrl,
  num,
  position_translated,
  rating,
  pcode,
  changeinn,
}) => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text", event.currentTarget.id);
  };

  return (
    <div
      id={pcode}
      draggable="true"
      onDragStart={handleDragStart}
      className="relative  rounded-3xl border border-black bg-black "
    >
      <div className="relative w-[130px] h-[120px]">
        <Image
          draggable="false"
          src={imageUrl}
          alt={name}
          layout="fill"
          style={{ transform: "scale(1.1)", top: "-5%", left: "5%", zIndex: 1 }}
        />
      </div>
      <div
        className="bg-transparent text-white text-xl absolute px-1 font-['KT'] opacity-40"
        style={{ top: "2%", right: "72%" }}
      >
        {position_translated}
      </div>
      <div className="text-white relative overflow-hidden p-1 rounded-lg">
        <div className="text-sm mt-2 ml-1 flex justify-start opacity-40 font-['KT']">
          NO. {num}
        </div>

        <div className="ml-5 mt-[-5px] text-lg font-['KT'] ">
          {name}
          <Image
            draggable="false"
            src="/images/card_logo.svg"
            alt="로고다"
            width={45}
            height={45}
            className="absolute"
            style={{
              top: "18%",
              left: "72%",
              opacity: 0.6,
              borderBottomRightRadius: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
