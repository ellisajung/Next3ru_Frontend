//팀기록

const TeamRecord = () => {
  return (
    <div className="w-max h-max border-2 rounded-xl border-black bg-white">
      <div className="grid grid-cols-2">
        <div className="flex flex-row flex-col-span-1 items-center ">
          <h2>KT Wiz</h2>
          <h2>순위 (2024 KBO리그)</h2>
        </div>
        <div>
          <img /*Kt logo */ alt="kt wiz"></img>
        </div>
      </div>
      <hr></hr>
      <div>
        <h3>경기: </h3>
        <h3>승무패</h3>
        <h3>승률</h3>
        <h3>타율</h3>
        <h3>평균자책점</h3>
        <h3>안타</h3>
        <h3>홈런</h3>
        <h3>탈삼진</h3>
        <h3>득점</h3>
        <h3>실점</h3>
      </div>
    </div>
  );
};

export default TeamRecord;
