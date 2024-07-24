import axios from "axios";
import { create } from "zustand";

interface Game {
  broadcast: string;
  displayDate: string;
  gameDate: number;
  gmkey: string;
  gtime: string;
  home: string;
  homeKey: string;
  homeScore?: number;
  matchTeamCode: string;
  matchTeamName: string;
  outcome: string;
  stadium: string;
  stadiumKey: string;
  status: string;
  visit: string;
  visitKey: string;
  visitScore?: number;
}

interface ChatBotStore {
  schedule: Game[] | null; // Game 배열 타입으로 정의
  fetchSchedule: (date: string) => Promise<void>;
}

export const useStore = create<ChatBotStore>((set) => ({
  schedule: null,

  fetchSchedule: async (date) => {
    try {
      const response = await axios.get(`http://43.203.217.238:5002/get_schedule?yearMonth=${date}`);
      const scheduleData: { list: Game[] } = response.data;

      // KT 경기를 필터링
      const ktGames = scheduleData.list.filter(
        (game) => game.homeKey === "KT" || game.visitKey === "KT"
      );

      set({ schedule: ktGames }); // 필터링된 경기 데이터를 설정
    } catch (error) {
      console.error("Error fetching scheduleData:", error);
    }
  },
}));
