import Image from "next/image";

const TodayLineUp = () => {
  return (
    <div className="w-max h-max rounded-xl p-3 border-2 border-black bg-slate-50">
      <div className="flex flex-col flex-start p-3">
        <div className="flex items-center">
          <h2 className="font-[KT] font-bold pr-1">삼성</h2>
          <div className="text-sm text-gray-400 font-bold pr-1">2</div>
          <div className="text-sm text-gray-400 font-bold pr-1">3</div>
          <h2 className="font-[KT] font-bold">한화</h2>
        </div>
        <div className="flex">
          <div className="text-xs text-gray-400 pr-1">7/24(수)</div>
          <div className="text-xs text-gray-400 pr-1">18:30</div>
          <div className="text-xs text-gray-400 pr-1">(승)주현상</div>
          <div className="text-xs text-gray-400">(패)오승환</div>
        </div>
      </div>
      <hr></hr>
      <div className="flex flex-col p-3">
        <div className="flex justify-start items-center">
          <div className="text-sm text-gray-400 font-[KT] pr-1">
            1. 지명타자
          </div>
          <div className="text-sm font-[KT]">김지찬(0.303)</div>
        </div>
        {/* 1번부터 9번까지 반복 */}
        <div className="flex justify-start items-center">
          <div className="text-sm text-gray-400 font-[KT] pr-1">선발투수</div>
          <div className="text-sm font-[KT]">코너(7승 5패, 3.890)</div>
        </div>
        <div className="flex justify-start items-center">
          <div className="text-sm text-gray-400 font-[KT] pr-1">상대투수</div>
          <div className="text-sm font-[KT]">류현진(5승 6패, 3.890)</div>
        </div>
      </div>
    </div>
  );
};

export default TodayLineUp;
