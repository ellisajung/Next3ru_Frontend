// components/TodayPlayerCon.tsx
"use client";
import Image from "next/image";
import PlayerCard from "@/components/chungwoo/PlayerCard";
import { useStore } from "@/store/Today-player";
import { useEffect } from "react";
import ColorMeaning from "./ColorMeaning";

const TodayPlayerCon = () => {
  const { players, setSelectedPlayerPcode, selectedPlayerPcode, fetchPlayers } = useStore(
    (state) => ({
      players: state.players,
      setSelectedPlayerPcode: state.setSelectedPlayerPcode,
      selectedPlayerPcode: state.selectedPlayerPcode,
      fetchPlayers: state.fetchPlayers,
    })
  );

  useEffect(() => {
    // 예시로 특정 날짜 데이터 가져오기 (2024년 7월 4일)
    fetchPlayers("20240702");
  }, []);

  const startingMember = players ? players.filter((changeinn) => changeinn.changeinn === "") : [];
  const todayPlayersSub = players ? players.filter((changeinn) => changeinn.changeinn !== "") : [];

  const handlePlayerCardClick = (pcode: string) => (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // 이벤트 전파 막기
    setSelectedPlayerPcode(pcode); // Zustand의 상태 업데이트
  };

  const handleParentClick = () => {
    setSelectedPlayerPcode("0"); // 부모 요소 클릭 시 초기화
  };

  const getPositionStyle = (role: string) => {
    switch (role) {
      case "SP":
        return "top-[53%] left-[46.5%]";
      case "CP":
        return "top-[30%] left-[56%]";
      case "RF":
        return "top-[22%] left-[72%]";
      case "C":
        return "top-[75%] left-[46.5%]";
      case "1B":
        return "top-[53%] left-[63%]";
      case "2B":
        return "top-[35%] left-[57%]";
      case "SS":
        return "top-[35%] left-[38%]";
      case "3B":
        return "top-[53%] left-[29%]";
      case "LF":
        return "top-[22%] left-[20%]";
      case "CF":
        return "top-[17%] left-[46.5%]";
      case "RF":
        return "top-[12%] left-[66%]";
      case "DH":
        return "top-[75%] left-[29%]";
      default:
        return "top-1/2 left-1/2"; // 기본 위치 (중앙)
    }
  };

  return (
    <div id="today-player" onClick={handleParentClick}>
      <div id="today-player-wrap" className="relative flex justify-center items-center h-full">
        {/* 선발선수 영역시작 */}
        <div id="starting-members">
          <div id="starting-members-wrap" className="relative w-[1700px] h-[1677px]">
            <Image src="/images/DiamondField.svg" alt="야구장" layout="fill" />
            {startingMember.map((player, index) => (
              <div
                onClick={handlePlayerCardClick(player.pcode)}
                key={index}
                className={`absolute cursor-pointer ${getPositionStyle(
                  player.position_translated || player.position
                )}`}
              >
                <PlayerCard
                  name={player.name}
                  imageUrl={player.imageUrl}
                  number={player.number}
                  position_translated={player.position_translated || player.position}
                  rating={player.rating}
                  pcode={player.pcode}
                  changeinn={player.changeinn}
                />
              </div>
            ))}
          </div>
        </div>
        {/* 선발선수 영역 끝 */}
        {/* 교체 선수 영역 시작 */}
        <div id="change-members">
          <div id="change-members-wrap" className="flex-col h-full">
            {todayPlayersSub.map((player, index) => (
              <div
                onClick={handlePlayerCardClick(player.pcode)}
                key={index}
                className="my-12 cursor-pointer "
              >
                <PlayerCard
                  name={player.name}
                  imageUrl={player.imageUrl}
                  number={player.number}
                  position_translated={player.position_translated || player.position}
                  rating={player.rating}
                  pcode={player.pcode}
                  changeinn={player.changeinn}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayPlayerCon;
