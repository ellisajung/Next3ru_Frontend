// PitcherDashBoard.js
"use client";
import { useStore } from "@/store/PlayerPitcher";
import React from "react";

const PitcherDashBoard = () => {
  {
    const { pitchers, setSelectedPlayerPcode, selectedPlayerPcode } = useStore((state) => ({
      pitchers: state.pitchers,
      setSelectedPlayerPcode: state.setSelectedPlayerPcode,
      selectedPlayerPcode: state.selectedPlayerPcode,
    }));
    return (
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center p-4 bg-white shadow">
            <img
              src="player-image-url" // Replace with actual image URL or import
              alt="Player"
              className="w-32 h-32 rounded-full"
            />
            <div className="ml-4">
              <p>이름: 김성호</p>
              <p>등번호: 19</p>
              <p>포지션: 선발투수</p>
              <p>투타: 좌투우타</p>
              <p>생년월일: 2004.04.12</p>
              <p>체격: 187cm, 90kg</p>
              <p>출신교: 영화초-성남중-성남고</p>
            </div>
          </div>
          <div className="p-4 bg-white shadow">
            <h3 className="text-lg font-semibold">Stat Chart</h3>
            <div className="h-32 bg-gray-200 mt-2">Chart Placeholder</div>
          </div>
          <div className="p-4 bg-white shadow">
            <h3 className="text-lg font-semibold">연봉 그래프</h3>
            <div className="h-32 bg-gray-200 mt-2">Graph Placeholder</div>
          </div>
          <div className="p-4 bg-white shadow">
            <h3 className="text-lg font-semibold">볼 구종</h3>
            <div className="h-32 bg-gray-200 mt-2">Pie Chart Placeholder</div>
          </div>
          <div className="col-span-2 p-4 bg-white shadow">
            <h3 className="text-lg font-semibold">Avg. Energy Activity</h3>
            <div className="mt-2">
              <p className="text-2xl">2,589 kcal</p>
              <div className="h-32 bg-gray-200 mt-2">Activity Chart Placeholder</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default PitcherDashBoard;
