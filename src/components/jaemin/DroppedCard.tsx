// components/DroppablePlayerCard.tsx
import { useState } from "react";
import Image from "next/image";
import PlayerCard from "@/components/jaemin/PlayerCard";

interface PlayerCardProps {
  position_translated: string;
}

const DroppablePlayerCard: React.FC<PlayerCardProps> = ({
  position_translated,
}) => {
  const [droppedPlayer, setDroppedPlayer] = useState<any>(null); // droppedPlayer 상태 추가

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("player");
    if (data) {
      setDroppedPlayer(JSON.parse(data));
    }
  };

  const handleRemovePlayer = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // 전파막기
    setDroppedPlayer(null);
  };
  //삭제기능 함수

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragEnter}
      className="w-[130px] h-[100px] relative"
    >
      {droppedPlayer ? (
        <div className="relative w-full h-full">
          <button
            onClick={handleRemovePlayer}
            className="absolute z-10 top-[-10px] right-[-10px] bg-red-500 text-white rounded-full w-6 h-6 flex "
          ></button>
          <PlayerCard
            name={droppedPlayer.name}
            imageUrl={droppedPlayer.imageUrl}
            num={droppedPlayer.num}
            position_translated={
              droppedPlayer.position_translated || droppedPlayer.position
            }
            rating={droppedPlayer.rating}
            pcode={droppedPlayer.pcode}
            changeinn={droppedPlayer.changeinn}
          />
        </div>
      ) : (
        <div>
          {" "}
          <Image src="/images/drag.svg" alt="빈 칸" width={150} height={190} />
          <div
            className="bg-transparent text-red-700 text-[25px] font-extrabold absolute px-1 font-['KT'] "
            style={{ top: "130%", left: "65%" }}
          >
            {position_translated}
          </div>
        </div>
      )}
    </div>
  );
};

export default DroppablePlayerCard;
