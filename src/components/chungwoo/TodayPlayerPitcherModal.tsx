"use client";
import { useStore } from "@/store/Today-player";
import { Tooltip } from "@nextui-org/react";
const TodayPlayerPitcherModal = () => {
  const { players } = useStore();
  const { selectedPlayerPcode } = useStore();

  // selectedPlayerPcode와 일치하는 player 찾기
  const player = players.find(
    (p) =>
      p.pcode === selectedPlayerPcode &&
      (p.position === "SP" || p.position === "RP" || p.position === "CP")
  );

  const tooltipContent: { [key: string]: string } = {};

  if (!player) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 bg-gray-800 bg-opacity-75 pointer-events-none">
      <div
        className="bg-white p-4 rounded-lg shadow-lg pointer-events-auto "
        style={{ width: "1400px" }}
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
                <th className="px-4 py-2 border border-gray-200">
                  <Tooltip content="야구에서, 양 팀이 공격과 수비를 한 번씩 끝내는 시간. 곧, 한 회.">
                    이닝
                  </Tooltip>
                </th>
                <th className="px-4 py-2 border border-gray-200">
                  <Tooltip content="상대한 타자의 수">타석</Tooltip>
                </th>
                <th className="px-4 py-2 border border-gray-200">투구수</th>
                <th className="px-4 py-2 border border-gray-200">
                  <Tooltip content="타석 값에서 볼넷,몸에 맞은공 등을 뺀 값입니다">타수</Tooltip>
                </th>
                <th className="px-4 py-2 border border-gray-200">
                  <Tooltip content="안타를 맞은 횟수입니다">피안타</Tooltip>
                </th>
                <th className="px-4 py-2 border border-gray-200">
                  <Tooltip content="홈런을 맞은 횟수입니다">삼진</Tooltip>
                </th>
                <th className="px-4 py-2 border border-gray-200">
                  {" "}
                  <Tooltip content="투수가 타자에게 몸에 맞는공을 던진것입니다">사구</Tooltip>
                </th>
                <th className="px-4 py-2 border border-gray-200">
                  <Tooltip content="스트라이크 아웃">삼진</Tooltip>
                </th>
                <th className="px-4 py-2 border border-gray-200">
                  <Tooltip content="점수를 내준것입니다">실점</Tooltip>
                </th>
                <th className="px-4 py-2 border border-gray-200">
                  <Tooltip content="수비 등의 문제가아닌 투수때문에 잃은 점수입니다">자책</Tooltip>
                </th>
                <th className="px-4 py-2 border border-gray-200">
                  <Tooltip content="투수가 투구한 이닝 당 평균적으로 허용한 자책 실점 수입니다.">
                    평균 자책점
                  </Tooltip>
                </th>
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
                <td className="px-4 py-2 border border-gray-200">{player.pa}</td>
                <td className="px-4 py-2 border border-gray-200">{player.bf}</td>
                <td className="px-4 py-2 border border-gray-200">{player.ab}</td>
                <td className="px-4 py-2 border border-gray-200">{player.hit}</td>
                <td className="px-4 py-2 border border-gray-200">{player.hr}</td>
                <td className="px-4 py-2 border border-gray-200">{player.bbhp}</td>
                <td className="px-4 py-2 border border-gray-200">{player.kk}</td>
                <td className="px-4 py-2 border border-gray-200">{player.r}</td>
                <td className="px-4 py-2 border border-gray-200">{player.er}</td>
                <td className="px-4 py-2 border border-gray-200">{player.ERA}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TodayPlayerPitcherModal;
