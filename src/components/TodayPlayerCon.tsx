// components/TodayPlayerCon.tsx
"use client";
import Image from "next/image";
import PlayerCard from "./PlayerCard";
import { useStore } from "@/store/Today-player";
import PlayerList from "./PlayerList";

const TodayPlayerCon = () => {
  const { todayPlayers, todayPlayersSub } = useStore((state) => ({
    todayPlayers: state.todayPlayers,
    todayPlayersSub: state.todayPlayersSub,
  }));

  const handlePlayerCardClick = (playerName: string) => {
    alert(`Player ${playerName} clicked!`);
  };
  return (
    <div className="relative flex">
      <Image src="/images/Field.jpg" alt="야구장" width={1500} height={1500} />
      {todayPlayers.map((player, index) => (
        <div
          flex-wrap
          justify-center
          key={index}
          className="absolute"
          style={{ top: player.position.top, left: player.position.left }}
        >
          <PlayerCard
            name={player.name}
            imageUrl={player.imageUrl}
            number={player.number}
            position={player.position}
            role={player.role}
            rating={player.rating}
            onClick={() => handlePlayerCardClick(player.name)}
          />
        </div>
      ))}
      <div>
        <PlayerList playerList={todayPlayersSub} onClick={handlePlayerCardClick}></PlayerList>
      </div>
    </div>
  );
};

export default TodayPlayerCon;
