import React from "react";

const ColorMeaning = () => {
  return (
    <div className="flex flex-col">
      <div className="my-2 mt-4 text-lg">색깔별 컨디션 점수범위</div>
      <div className="flex items-center p-4 mb-2">
        <div className="w-8 h-8 bg-violet-500 border border-black"></div>
        <span className="ml-2 ">0점이상~2.0점미만</span>
      </div>
      <div className="flex items-center  p-4 mb-2 ">
        <div className="w-8 h-8 bg-blue-500 border border-black"></div>
        <span className="ml-2">2.0점이상~4.0점미만</span>
      </div>
      <div className="flex items-center  p-4 mb-2 ">
        <div className="w-8 h-8 bg-green-500 border border-black"></div>
        <span className="ml-2">4.0점이상~6.0점미만</span>
      </div>

      <div className="flex items-center  p-4 mb-2 ">
        <div className="w-8 h-8 bg-orange-500 border border-black"></div>
        <span className="ml-2">6.0점이상~8.0점미만</span>
      </div>

      <div className="flex items-center  p-4 mb-2 ">
        <div className="w-8 h-8 bg-red-500 border border-black"></div>
        <span className="ml-2">8.0점이상~10.0점이하</span>
      </div>
    </div>
  );
};

export default ColorMeaning;
