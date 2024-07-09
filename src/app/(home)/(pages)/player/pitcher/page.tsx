import PitcherDashBoard from "@/components/chungwoo/PitcherDashBoard";
import PlayerPitcher from "@/components/chungwoo/PlayerPitcher";
import React from "react";

const page = () => {
  return (
    <div className="flex p-4 bg-gray-100 min-h-screen">
      <div className="w-1/3 bg-white shadow p-4">
        <PlayerPitcher />
      </div>
      <div className="w-2/3 bg-white shadow p-4 ml-4">
        <PitcherDashBoard />
      </div>
    </div>
  );
};

export default page;
