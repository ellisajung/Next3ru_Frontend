"use client";
import { useStore } from "@/store/Today-player";

const TodayPlayerPitcherModal = () => {
  const { players } = useStore();
  const { selectedPlayerPcode } = useStore();

  // selectedPlayerPcode와 일치하는 player 찾기
  const player = players.find(
    (p) =>
      p.pcode === selectedPlayerPcode &&
      (p.position === "SP" || p.position === "RP" || p.position === "CP")
  );

  if (!player) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 bg-gray-800 bg-opacity-75 pointer-events-none">
      <div
        className="bg-white p-4 rounded-lg shadow-lg pointer-events-auto "
        style={{ width: "1200px" }}
      >
        <h1 className="text-3xl font-bold mb-4">
          {`${player.gday.slice(0, 4)}-${player.gday.slice(4, 6)}-${player.gday.slice(6, 8)}`}{" "}
          {player.name} 기록
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border border-gray-200">선수명</th>
                <th className="px-4 py-2 border border-gray-200">등판</th>
                <th className="px-4 py-2 border border-gray-200">승</th>
                <th className="px-4 py-2 border border-gray-200">패</th>
                <th className="px-4 py-2 border border-gray-200">세</th>
                <th className="px-4 py-2 border border-gray-200">이닝</th>
                <th className="px-4 py-2 border border-gray-200">타자</th>
                <th className="px-4 py-2 border border-gray-200">투구수</th>
                <th className="px-4 py-2 border border-gray-200">타수</th>
                <th className="px-4 py-2 border border-gray-200">피안타</th>
                <th className="px-4 py-2 border border-gray-200">피홈런</th>
                <th className="px-4 py-2 border border-gray-200">사구</th>
                <th className="px-4 py-2 border border-gray-200">삼진</th>
                <th className="px-4 py-2 border border-gray-200">실점</th>
                <th className="px-4 py-2 border border-gray-200">자책</th>
                <th className="px-4 py-2 border border-gray-200">평균 자책점</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="px-4 py-2 border border-gray-200">{player.name}</td>
                <td className="px-4 py-2 border border-gray-200">{player.changeinn}</td>
                <td className="px-4 py-2 border border-gray-200">{player.w}</td>
                <td className="px-4 py-2 border border-gray-200">{player.l}</td>
                <td className="px-4 py-2 border border-gray-200">{player.s}</td>
                <td className="px-4 py-2 border border-gray-200">{player.inn}</td>
                <td className="px-4 py-2 border border-gray-200">{player.bf}</td>
                <td className="px-4 py-2 border border-gray-200">{player.tb}</td>
                <td className="px-4 py-2 border border-gray-200">{player.ab}</td>
                <td className="px-4 py-2 border border-gray-200">{player.hit}</td>
                <td className="px-4 py-2 border border-gray-200">{player.hr}</td>
                <td className="px-4 py-2 border border-gray-200">{player.bbhp}</td>
                <td className="px-4 py-2 border border-gray-200">{player.kk}</td>
                <td className="px-4 py-2 border border-gray-200">{player.r}</td>
                <td className="px-4 py-2 border border-gray-200">{player.er}</td>
                <td className="px-4 py-2 border border-gray-200">
                  {player.accmEr === 0
                    ? "0.00"
                    : ((player.accmEr / player.accmInn2) * 9).toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TodayPlayerPitcherModal;
