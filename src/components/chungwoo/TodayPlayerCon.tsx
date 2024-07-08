// components/TodayPlayerCon.tsx
"use client";
import Image from "next/image";
import PlayerCard from "@/components/chungwoo/PlayerCard";
import { useStore } from "@/store/Today-player";

const TodayPlayerCon = () => {
  const { todayPlayers, setSelectedPlayerPcode, selectedPlayerPcode } =
    useStore((state) => ({
      todayPlayers: state.todayPlayers,
      setSelectedPlayerPcode: state.setSelectedPlayerPcode,
      selectedPlayerPcode: state.selectedPlayerPcode,
    }));

  const startingMember = todayPlayers.filter(
    (changeinn) => changeinn.changeinn == ""
  );
  const todayPlayersSub = todayPlayers.filter(
    (changeinn) => changeinn.changeinn !== ""
  );

  const handlePlayerCardClick =
    (pcode: string) => (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation(); // 이벤트 전파 막기
      setSelectedPlayerPcode(pcode); // Zustand의 상태 업데이트
    };

  const handleParentClick = () => {
    setSelectedPlayerPcode("0"); // 부모 요소 클릭 시 초기화
  };

  return (
    <div className="relative flex" onClick={handleParentClick}>
      <Image
        src="/images/DiamondField.svg"
        alt="야구장"
        width={1200}
        height={1200}
      />
      {startingMember.map((player, index) => (
        <div
          onClick={handlePlayerCardClick(player.pcode)}
          flex-wrap
          justify-center
          key={index}
          className="absolute cursor-pointer"
          style={{ top: player.position.top, left: player.position.left }}
        >
          <PlayerCard
            name={player.name}
            imageUrl={player.imageUrl}
            number={player.number}
            position={player.position}
            role={player.role}
            rating={player.rating}
            pcode={player.pcode}
            changeinn={player.changeinn}
          />
        </div>
      ))}
      <div>
        {/* <PlayerList playerList={todayPlayersSub} onClick={handlePlayerCardClick}></PlayerList> */}
        {todayPlayersSub.map((player, index) => (
          <div
            onClick={handlePlayerCardClick(player.pcode)}
            key={index}
            className="my-12"
          >
            <PlayerCard
              name={player.name}
              imageUrl={player.imageUrl}
              number={player.number}
              position={player.position}
              role={player.role}
              rating={player.rating}
              pcode={player.pcode}
              changeinn={player.changeinn}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayPlayerCon;
