import React from "react";
import Image from "next/image";

interface PlayerListProps {
  players: {
    name: string;
    imageUrl: string;
    number: string;
    position: {
      top: string;
      left: string;
    };
    role: string;
    rating: number;
  }[];
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

const TodayPlayerCon: React.FC<PlayerListProps> = ({ players }) => {
  return (
    <div className="flex flex-wrap">
      <div className="relative">
        <Image src="/images/Field.jpg" alt="야구장임" width={1500} height={1500} />
        {players.map((player, index) => (
          <div key={index}>
            <div key={index} className="absolute border border-black" style={{ top: player.position.top, left: player.position.left }}>
              <div className={`absolute rounded-lg p-1 ${getColorClass(player.rating)}`} style={{ top: "-14%", left: "85%" }}>
                {player.rating}
              </div>
              <div className="text-black text-sm">No. {player.number}</div>
              <div className="relative">
                <Image src={player.imageUrl} alt={player.name} width={96} height={96} />
                <div className="flex justify-end border">
                  <div className="bg-black text-white absolute px-1" style={{ top: "74%", left: "80%" }}>
                    {player.role}
                  </div>
                </div>
              </div>
              <div className="flex justify-center bg-black text-white">
                <span>{player.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayPlayerCon;
