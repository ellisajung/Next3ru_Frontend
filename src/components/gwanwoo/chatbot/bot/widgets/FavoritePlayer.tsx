//관심선수

const FavoritePlayer = () => {
  return (
    <div className="w-max h-max rounded-xl border-2 border-black bg-white ">
      <div>
        <h2>선수이름</h2>
        <div>소속팀, (포지션, 나이) </div>
        <img alt="선수이름" />
      </div>
      <hr></hr>
      <div>
        {/* 선수포지션 투수일떄 */}
        <div>
          <div>승-패</div>
          <div>기록</div>
        </div>
        <div>
          <div>이닝</div>
          <div>36</div>
        </div>
        <div>
          <div>평균자책</div>
          <div>2.0</div>
        </div>
        <div>
          <div></div>탈삼진
        </div>
        <div>30</div>
      </div>
      <div>
        <div>WHIP</div>
        <div>1.0</div>
      </div>
    </div>
  );
};

export default FavoritePlayer;
