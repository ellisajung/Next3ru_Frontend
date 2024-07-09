"use client";
import React from "react";
import Image from "next/image";
import { useStore } from "@/store/PlayerPitcher"; // assuming your store import is correct

const PlayerCard = () => {
  const { pitchers, setSelectedPlayerPcode, selectedPlayerPcode } = useStore((state) => ({
    pitchers: state.pitchers,
    setSelectedPlayerPcode: state.setSelectedPlayerPcode,
    selectedPlayerPcode: state.selectedPlayerPcode,
  }));

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {pitchers.map((player) => (
        <div className="">
          <div
            key={player.pcode} // assuming each player has a unique pcode
            className="relative my-4 p-1 rounded-[18px] border border-black bg-black"
          >
            <div className="relative w-40 h-36 ">
              <Image
                src={player.imageUrl}
                alt={player.name}
                layout="fill"
                style={{ top: "0%", left: "0%" }}
              />
              <div className="bg-black text-white absolute px-1" style={{ top: "0%", left: "0%" }}>
                {player.role}
              </div>
            </div>
            <div className="text-white relative overflow-hidden p-1 rounded-lg">
              <div className="text-gray-500  pl-1 flex justify-start">No. {player.number}</div>
              <div className="ml-4 font-bold">
                {player.name}
                <Image
                  src="/images/logo.svg"
                  alt="로고다"
                  width={41.37}
                  height={44.17}
                  className="absolute"
                  style={{ top: "30%", left: "75%" }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayerCard;
