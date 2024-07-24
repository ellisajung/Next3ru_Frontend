//일정
import Image from "next/image";

const DailySchedule = () => {
  return (
    <div className="w-max h-max rounded-xl border-2 p-3 border-black bg-slate-50">
      <div>
        <div className="w-max flex flex-col flex-start p-3">
          <div className="flex space-x-2">
            <div className="font-[KT]">Kt</div>
            <div>vs</div>
            <div>상대팀</div>
          </div>
          <div className="font-[KT] text-sm text-gray-400">경기시간</div>
        </div>
      </div>
      <hr />
      {/* <div className="flex flex-start">
        <div className="flex flex-col font-[KT] p-3">
          <div>구장</div>
          <div>날씨</div>
        </div>
        <div className="flex flex-col p-3 text-sm text-gray-400">
          <div>ex:잠실야구장</div>
          <div className="leading-8">날씨 아이콘</div>
        </div>
        <div className="flex flex-col p-3 text-sm text-gray-400">
          <br />
          <div className="leading-8">강수확률 x%</div>
        </div>
      </div> */}
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
