"use client";
import { useStore as useTodayPlayerModalStore } from "@/store/Today-player-Modal";
import { useStore as useTodayPlayerStore } from "@/store/Today-player";

const TodayPlayerHitterModal = () => {
  const { todayPlayers2 } = useTodayPlayerModalStore();
  const { selectedPlayerPcode } = useTodayPlayerStore();

  // selectedPlayerPcode와 일치하는 player 찾기
  const player = todayPlayers2.find((p) => p.pcode === selectedPlayerPcode);

  // player가 존재하지 않으면 null을 반환하여 아무것도 렌더링하지 않음
  if (!player) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 bg-gray-800 bg-opacity-75 pointer-events-none">
      <div className="bg-white p-4 rounded-lg shadow-lg " style={{ width: "1200px" }}>
        <h1 className="text-3xl font-bold mb-4">
          {`${player.gday.slice(0, 4)}-${player.gday.slice(4, 6)}-${player.gday.slice(6, 8)}`}{" "}
          {player.name} 기록
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border border-gray-200">타순</th>
                <th className="px-4 py-2 border border-gray-200">포지션</th>
                <th className="px-4 py-2 border border-gray-200">이름</th>
                {[...Array(9).keys()].map((_, index) => (
                  <th key={index} className="px-4 py-2 border border-gray-200">
                    {index + 1}회
                  </th>
                ))}
                <th className="px-4 py-2 border border-gray-200">타수</th>
                <th className="px-4 py-2 border border-gray-200">득점</th>
                <th className="px-4 py-2 border border-gray-200">안타</th>
                <th className="px-4 py-2 border border-gray-200">타점</th>
                <th className="px-4 py-2 border border-gray-200">타율</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="px-4 py-2 border border-gray-200">{player.turn}</td>
                <td className="px-4 py-2 border border-gray-200">{player.position}</td>
                <td className="px-4 py-2 border border-gray-200">{player.name}</td>
                {[...Array(9).keys()].map((_, index) => (
                  <td key={index} className="px-4 py-2 border border-gray-200">
                    {player[`inn${index + 1}` as keyof typeof player]}
                  </td>
                ))}
                <td className="px-4 py-2 border border-gray-200">{player.ab}</td>
                <td className="px-4 py-2 border border-gray-200">{player.run}</td>
                <td className="px-4 py-2 border border-gray-200">{player.hit}</td>
                <td className="px-4 py-2 border border-gray-200">{player.rbi}</td>
                <td className="px-4 py-2 border border-gray-200">
                  {player.accmAb === 0 ? "0.000" : (player.accmHit / player.accmAb).toFixed(3)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TodayPlayerHitterModal;
