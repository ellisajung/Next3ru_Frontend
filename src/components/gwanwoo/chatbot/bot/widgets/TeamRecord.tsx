import { useEffect } from "react";
import { useStore } from "@/store/ChatBot"; // Zustand 스토어 경로를 실제 경로로 교체
import Image from "next/image";

const TeamRecord = () => {
  // Zustand 스토어에서 팀 순위와 관련된 상태 및 액션 가져오기
  const { teamRanks, fetchTeamRanks } = useStore((state) => ({
    teamRanks: state.teamRanks,
    fetchTeamRanks: state.fetchTeamRanks,
  }));

  // 컴포넌트가 마운트될 때 팀 순위 데이터를 가져옵니다.
  useEffect(() => {
    fetchTeamRanks();
  }, [fetchTeamRanks]);

  // 팀 순위 데이터가 로드되지 않았을 때 로딩 상태 처리
  if (!teamRanks) {
    return <div className="text-center py-2">로딩 중...</div>;
  }

  const ktTeamRank = teamRanks.find((rank) => rank.팀 === "KT");

  return (
    <div className="w-250px h-max border-2 rounded-xl p-3 border-black bg-slate-50">
      <div className="flex p-1 justify-between">
        <div className="flex-col">
          <h2 className="font-[KT] font-bold">KT Wiz</h2>
          <h2 className="text-sm text-gray-400 ">
            {ktTeamRank ? ktTeamRank.순위 : "데이터 없음"}위 (2024 KBO리그)
          </h2>
        </div>
        <div className="flex-end">
          <Image
            src="./images/chatbot/Kt Wiz.svg"
            alt="Kt Wiz"
            width={48}
            height={48}
          />
        </div>
      </div>
      <hr />

      <div className="overflow-hidden flex items-center justify-center">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-[30px] px-1 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                순위
              </th>
              <th className="w-[30px] px-1 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                팀
              </th>
              <th className="w-[30px] px-1 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                경기
              </th>
              <th className="w-[30px] px-1 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                승
              </th>
              <th className="w-[30px] px-1 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                무
              </th>
              <th className="w-[30px] px-1 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                패
              </th>
              <th className="w-[30px] px-1 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                승률
              </th>
              <th className="w-[30px] px-1 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                승차
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {teamRanks.map((rank) => (
              <tr key={rank.팀}>
                <td className="px-1 py-1 text-sm text-gray-900 text-center">
                  {rank.순위}
                </td>
                <td className="px-1 py-1 text-sm text-gray-500 text-center">
                  {rank.팀}
                </td>
                <td className="px-1 py-1 text-sm text-gray-500">{rank.G}</td>
                <td className="px-1 py-1 text-sm text-gray-500">{rank.승}</td>
                <td className="px-1 py-1 text-sm text-gray-500">{rank.무}</td>
                <td className="px-1 py-1 text-sm text-gray-500">{rank.패}</td>
                <td className="px-1 py-1 text-sm text-gray-500">{rank.승률}</td>
                <td className="px-1 py-1 text-sm text-gray-500">{rank.승차}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamRecord;
