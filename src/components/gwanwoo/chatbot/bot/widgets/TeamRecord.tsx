//팀기록
import Image from "next/image";

const TeamRecord = () => {
  return (
    <div className="w-max h-max border-2 rounded-xl p-3 border-black bg-slate-50">
      <div className="flex p-3">
        <div className="flex-col">
          <h2 className="font-[KT]">KT Wiz</h2>
          <h2>순위 (2024 KBO리그)</h2>
        </div>
        <div>
          <Image
            src="./images/chatbot/Kt Wiz.svg"
            alt="Kt Wiz"
            width={24}
            height={24}
          />
        </div>
      </div>
      <hr></hr>
      <div className="flex flex-row p-3 ">
        <div className="font-[KT]">
          <h3>경기</h3>
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
        <div>
          <h3>순위: </h3>
          <h3>1위</h3>
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
    </div>
  );
};

export default TeamRecord;
