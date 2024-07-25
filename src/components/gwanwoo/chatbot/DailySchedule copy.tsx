//일정
import Image from "next/image";

const DailySchedule = () => {
  return (
    <div className="w- h-max rounded-xl border-2 p-3 border-black bg-slate-50">
      <div>
        <div className="w-max flex flex-col flex-start p-3">
          <div className="flex space-x-2">
            <div className="font-[KT]">Kt</div>
            <div className="font-[KT] text-sm text-gray-400 py-0">vs</div>
            <div className="font-[KT]">상대팀</div>
          </div>
          <div className="font-[KT] text-sm text-gray-400">경기시간</div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col flex-start p-3">
        <div className="flex ">
          <div>구장</div>
          <div>잠실야구장</div>
          <div></div>
        </div>
        <div className="flex">
          <div>날씨</div>
          <div>날씨 아이콘</div>
          <div>강수확률 x%</div>
        </div>
      </div>
      <div>
        <div className="w-max flex flex-col flex-start p-3">
          <div className="flex space-x-2">
            <div className="font-[KT]">Kt</div>
            <div className="font-[KT] text-sm text-gray-400 py-0">vs</div>
            <div className="font-[KT]">상대팀</div>
          </div>
          <div className="font-[KT] text-sm text-gray-400">경기시간</div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col flex-start p-3">
        <div className="flex ">
          <div>구장</div>
          <div>잠실야구장</div>
          <div></div>
        </div>
        <div className="flex">
          <div>날씨</div>
          <div>날씨 아이콘</div>
          <div>강수확률 x%</div>
        </div>
      </div>
    </div>
  );
};

export default DailySchedule;
