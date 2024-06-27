// components/PlayerList.tsx

import React from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

interface PlayerListProps {
  players2: {
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

const PlayerList: React.FC<PlayerListProps> = ({ players2 }) => {
  return (
    <div className="flex flex-col">
      {players2.map((player, index) => (
        <PlayerCard key={index} name={player.name} imageUrl={player.imageUrl} number={player.number} position={player.position} role={player.role} rating={player.rating} />
      ))}
    </div>
  );
};

export default PlayerList;
