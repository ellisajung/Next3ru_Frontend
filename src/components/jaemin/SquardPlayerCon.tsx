// components/TodayPlayerCon.tsx
"use client";
import Image from "next/image";
import PlayerCard from "@/components/jaemin/PlayerCard";
import DroppablePlayerCard from "@/components/jaemin/DroppedCard";

import { useStore } from "@/store/Today-player";
import { useEffect, useState } from "react";
import "react-tooltip/dist/react-tooltip.css"; // 툴팁 css
import { Tooltip } from "react-tooltip";

const SquardPlayerCon = () => {
  const [isHovered, setIsHovered] = useState(false);

  const { players, setSelectedPlayerPcode, selectedPlayerPcode, fetchPlayers } =
    useStore((state) => ({
      players: state.players,
      setSelectedPlayerPcode: state.setSelectedPlayerPcode,
      selectedPlayerPcode: state.selectedPlayerPcode,
      fetchPlayers: state.fetchPlayers,
    }));

  useEffect(() => {
    // 예시로 특정 날짜 데이터 가져오기 (2024년 7월 4일)
    fetchPlayers("20240702");
  }, []);

  const startingMember = players
    ? players.filter((changeinn) => changeinn.changeinn === "")
    : [];
  const todayPlayersSub = players
    ? players.filter((changeinn) => changeinn.changeinn !== "")
    : [];

  const handlePlayerCardClick =
    (pcode: string) => (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation(); // 이벤트 전파 막기
      setSelectedPlayerPcode(pcode); // Zustand의 상태 업데이트
    };

  const handleParentClick = () => {
    setSelectedPlayerPcode("0"); // 부모 요소 클릭 시 초기화
  };

  const handleDragStart =
    (player: any) => (event: React.DragEvent<HTMLDivElement>) => {
      event.dataTransfer.setData("player", JSON.stringify(player));
    };

  const getPositionStyle = (role: string) => {
    switch (role) {
      case "SP":
        return "top-[8%] left-[5%]";
      case "CP":
        return "top-[30%] left-[80%]";
      case "C":
        return "top-[65%] left-[46.5%]";
      case "1B":
        return "top-[53%] left-[69%]";
      case "2B":
        return "top-[45%] left-[56%]";
      case "SS":
        return "top-[45%] left-[35%]";
      case "3B":
        return "top-[53%] left-[22%]";
      case "LF":
        return "top-[27%] left-[25%]";
      case "CF":
        return "top-[17%] left-[46%]";
      case "RF":
        return "top-[27%] left-[67%]";
      case "DH":
        return "top-[65%] left-[10%]";
      default:
        return "top-1/2 left-1/2"; // 기본 위치 (중앙)
    }
  };

  return (
    <div id="today-player" onClick={handleParentClick} className="bg-[#F7F7F7]">
      <div id="ai_button_container" className="pt-5 pl-5">
        <p className="p-3 text-lg font-['KT']">내가 짜는 wiz 스쿼드</p>
        <hr className="border-solid border-[1px] border-slate-600 w-[20%]" />
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`hover:cursor-pointer p-3`}
        >
          <Image
            src={isHovered ? "/images/AI_hover.svg" : "/images/AI.svg"}
            alt="AI 라인업 추천"
            width={140}
            height={100}
            data-tooltip-content="AI가 제작하는 라인업을 지금 만나보세요!"
            data-tooltip-id="tooltip"
          />
        </button>
        <Tooltip
          id="tooltip"
          className=" mt-[-10px] p-2"
          place="bottom-start"
          arrowColor=" bg-gray-400"
        />
      </div>

      <div id="squard-wrap" className="relative flex justify-start items-start">
        {/* 선발선수 영역시작 */}
        <button id="starting-members">
          <div
            id="starting-members-wrap"
            className="relative w-[60vw] h-[100vh]"
          >
            <Image
              src="/images/Field.svg"
              style={{
                transform: "scale(1)",
                position: "absolute",
                top: 0,
                left: 0,
              }}
              alt="야구장"
              layout="fill"
            />

            {startingMember.map((player, index) => (
              <div
                style={{
                  transform: "scale(1)",
                }}
                onClick={handlePlayerCardClick(player.pcode)}
                onDragStart={handleDragStart(player)}
                draggable
                key={index}
                className={`absolute cursor-pointer  ${getPositionStyle(
                  player.position_translated || player.position
                )}`}
              >
                <DroppablePlayerCard
                  position_translated={
                    player.position_translated || player.position
                  }
                />
              </div>
            ))}
          </div>
        </button>
        {/* 선발선수 영역 끝 */}

        {/* 교체 선수 영역 시작 */}
        <button
          id="change-members"
          className="w-[560px] rounded-bl-[0px] rounded-[25px] m-10 h-[70vh] flex-grow-0 p-[16px_1px_0_17px] backdrop-blur-[10px] shadow-2xl bg-gradient-to-b from-[rgba(30,30,30,0.8)] to-[rgba(132,132,132,0.6)]"
        >
          <div
            id="change-members-wrap"
            className="grid grid-cols-3 gap-5 m-3 overflow-auto h-[calc(100%-32px)]"
          >
            {todayPlayersSub.concat(startingMember).map((player, index) => (
              <div
                onClick={() => handlePlayerCardClick(player.pcode)}
                onDragStart={handleDragStart(player)}
                draggable
                key={index}
                className="cursor-pointer p-2 w-[150px] h-[190px]"
              >
                <PlayerCard
                  name={player.name}
                  imageUrl={player.imageUrl}
                  num={player.num} //number 로 이건 보자고
                  position_translated={
                    player.position_translated || player.position
                  }
                  rating={player.rating}
                  pcode={player.pcode}
                  changeinn={player.changeinn}
                />
              </div>
            ))}
          </div>
        </button>
      </div>
    </div>
  );
};

export default SquardPlayerCon;
