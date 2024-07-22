//일정

const DailySchedule = () => {
  return (
    <>
      <div className="w-max h-max rounded-xl border-2  border-black bg-white">
        <div className="grid grid-cols-2">
          <div className="w-max flex flex-col items-center ">
            <h2>일정</h2>
            <div>Kt vs 상대팀</div>
          </div>
          <div>
            <img src="" alt="kt"></img>
            <img src="" alt="상대팀"></img>
          </div>
        </div>
        <hr />
        <div>
          <div className="flex flex-row">
            <div>구장</div>
            <div>ex:잠실야구장</div>
          </div>
          <div className="flex flex-row">
            <div>날씨</div>
            <div>날씨 아이콘</div>
            <div>강수확률 x%</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DailySchedule;
