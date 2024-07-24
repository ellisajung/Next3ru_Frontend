//관심선수

const FavoritePlayer = () => {
  return (
    <div className="w-max h-max rounded-xl p-3 border-2 border-black  bg-slate-50">
      <div className="flex">
        <div className="flex flex-col p-3 ">
          <h2>선수이름</h2>
          <div>소속팀, (포지션, 나이) </div>
        </div>
        <div className="p-3">
          <img alt="선수이름" />
        </div>
      </div>
      <hr></hr>
      <div className="flex p-3">
        {/* 선수포지션 투수일떄 */}
        <div className="flex flex-col items-center p-3">
          <div>승-패</div>
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

export default FavoritePlayer;
