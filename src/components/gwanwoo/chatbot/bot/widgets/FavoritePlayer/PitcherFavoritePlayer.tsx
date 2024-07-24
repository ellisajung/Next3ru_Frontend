//관심선수
import Image from "next/image";

const PitcherFavoritePlayer = () => {
  return (
    <div className="w-max h-max rounded-xl p-3 border-2 border-black bg-slate-50">
      <div className="flex">
        <div className="flex flex-col p-3 ">
          <h2 className="font-[KT] font-bold">선수이름</h2>
          <div className="text-sm text-gray-400 ">소속팀, (포지션, 나이) </div>
        </div>
        <div className="p-3">
          <Image src="" alt="선수이름" width={48} height={48} />
        </div>
      </div>
      <hr></hr>
      <div className="flex p-3">
        {/* 선수포지션 투수일떄 */}
        <div className="flex flex-col font-[KT]">
          <div className="font-[KT] ">승-패</div>
          <div>이닝</div>
          <div>평균자책</div>
          <div>탈삼진</div>
          <div>WHIP</div>
        </div>
        <div className="flex flex-col items-center p-3">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default PitcherFavoritePlayer;
