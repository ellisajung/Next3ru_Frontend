"use client";
import React, { ReactNode } from "react";
import { useStore } from "@/store/Today-player";
import { Tooltip } from "@nextui-org/react";

const TodayPlayerHitterModal = () => {
  const { players, selectedPlayerPcode } = useStore();

  // selectedPlayerPcode와 일치하는 player 찾기
  const player = players.find((p) => p.pcode === selectedPlayerPcode && parseInt(p.turn) > 0);

  const tooltipContent: { [key: string]: string } = {
    좌홈: "좌익수 위치의 홈런",
    중비: "중견수 플라이 볼",
    땅볼: "땅볼 아웃",
    좌비: "좌익수 플라이 볼",
    좌안: "좌전 안타",
    삼진: "스트라이크 아웃",
    유땅: "유격수 방향 땅볼",
    유병: "유격수 방향 뜬공",
    투땅: "투수 앞 땅볼",
    포파: "포수 앞 파울 플라이",
    "1비": "1루수 플라이 볼",
    "2비": "2루수 플라이 볼",
    "3비": "3루수 플라이 볼",
    유비: "유격수 플라이 볼",
    우비: "우익수 플라이 볼",
    투번: "투수 앞 번트",
    포번: "포수 앞 번트",
    "1번": "1루수 앞 번트",
    "2번": "2루수 앞 번트",
    "3번": "3루수 앞 번트",
    유번: "유격수 앞 번트",
    투희: "투수 앞 희생 플라이",
    좌희: "좌익수 앞 희생 플라이",
    중희: "중견수 앞 희생 플라이",
    우희: "우익수 앞 희생 플라이",
    중안: "중전 안타",
    우안: "우전 안타",
    좌2: "좌익수 앞 2루타",
    중2: "중견수 앞 2루타",
    우2: "우익수 앞 2루타",
    좌3: "좌익수 앞 3루타",
    중3: "중견수 앞 3루타",
    우3: "우익수 앞 3루타",
    투직: "투수 직선 타구",
    "1직": "1루수 직선 타구",
    "2직": "2루수 직선 타구",
    "3직": "3루수 직선 타구",
    유직: "유격수 직선 타구",
    중홈: "중견수 위치의 홈런",
    우홈: "우익수 위치의 홈런",
    투실: "투수 실책",
    포실: "포수 실책",
    "1실": "1루수 실책",
    "2실": "2루수 실책",
    "3실": "3루수 실책",
    유실: "유격수 실책",
    좌실: "좌익수 실책",
    중실: "중견수 실책",
    우실: "우익수 실책",
    사구: "볼넷",
    "1땅": "1루수 앞 땅볼",
    "2땅": "2루수 앞 땅볼",
    "3땅": "3루수 앞 땅볼",
    "4구": "볼넷",
    "1파": "1루수 방향 뜬 공",
    "2파": "2루수 방향 뜬 공",
    "3파": "3루수 방향 뜬 공",
    좌중안: "좌측 중견수 앞 안타",
    우중안: "우측 중견수 앞 안타",
    "3병": "3번 던져서 스트라이크 아웃",
    고4: "고의로 볼넷으로 밀어내기",
    우중홈: "우익수 중견수 사이로 날아가는 홈런",
    투희번: "희생번트",
  };

  // player가 존재하지 않으면 null을 반환하여 아무것도 렌더링하지 않음
  if (!player) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 bg-gray-800 bg-opacity-75 pointer-events-none">
      <div
        className="bg-white p-4 rounded-lg shadow-lg pointer-events-auto"
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
                <th className="px-4 py-2 border border-gray-200">타순</th>
                <th className="px-4 py-2 border border-gray-200">포지션</th>
                <th className="px-4 py-2 border border-gray-200">이름</th>
                {[...Array(12).keys()].map((_, index) => (
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
                <td className="px-4 py-2 border border-gray-200 ">{player.oneturn}</td>
                <td className="px-4 py-2 border border-gray-200 ">{player.position_translated}</td>
                <td className="px-4 py-2 border border-gray-200">{player.name}</td>
                {[...Array(12).keys()].map((_, index) => (
                  <td key={index} className="px-4 py-2 border border-gray-200 ">
                    <Tooltip
                      key={index}
                      placement="bottom"
                      content={
                        tooltipContent[player[`inn${index + 1}` as keyof typeof player] as any]
                      }
                      color="secondary"
                    >
                      {player[`inn${index + 1}` as keyof typeof player] as ReactNode}
                    </Tooltip>
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
