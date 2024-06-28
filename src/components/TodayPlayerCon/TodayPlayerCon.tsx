// components/TodayPlayerCon.tsx
import React from "react";
import Image from "next/image";
import PlayerCard from "../PlayerCard/PlayerCard";

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

const TodayPlayerCon: React.FC<PlayerListProps> = ({ players }) => {
  return (
    <div className="relative">
      <Image src="/images/Field.jpg" alt="야구장" width={1500} height={1500} />
      {players.map((player, index) => (
        <div key={index} className="absolute" style={{ top: player.position.top, left: player.position.left }}>
          <PlayerCard name={player.name} imageUrl={player.imageUrl} number={player.number} position={player.position} role={player.role} rating={player.rating} />
        </div>
      ))}
    </div>
  );
};

export default TodayPlayerCon;
