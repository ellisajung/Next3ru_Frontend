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
  weatherIcon: string;
  temperature: number;
  precipitationProbability: number;
}
interface WeatherData {
  temperature: number | null;
  precipitationProbability: number | null;
}

interface TeamRank {
  G: string;
  무: string;
  순위: string;
  승: string;
  승률: string;
  승차: string;
  팀: string;
  패: string;
}

interface StartMember {
  name: string;
  imageUrl: string;
  number: string;
  gmkey: string;
  gday: string;
  tb: string;
  pcode: string;
  turn: string;
  oneturn: string;
  position: string;
  position_translated: string;
  rating: number;
  changeinn: string;
  inn1: string;
  il1: string;
  inn2: string;
  il2: string;
  inn3: string;
  il3: string;
  inn4: string;
  il4: string;
  inn5: string;
  il5: string;
  inn6: string;
  il6: string;
  inn7: string;
  il7: string;
  inn8: string;
  il8: string;
  inn9: string;
  il9: string;
  inn10: string;
  il10: string;
  inn11: string;
  il11: string;
  inn12: string;
  il12: string;
  inn13: string;
  il13: string;
  inn14: string;
  il14: string;
  inn15: string;
  il15: string;
  inn16: string;
  il16: string;
  inn17: string;
  il17: string;
  inn18: string;
  il18: string;
  inn19: string;
  il19: string;
  inn20: string;
  il20: string;
  inn21: string;
  il21: string;
  inn22: string;
  il22: string;
  inn23: string;
  il23: string;
  inn24: string;
  il24: string;
  inn25: string;
  il25: string;
  run: number;
  rbi: number;
  accmHit: number;
  accmAb: number;
  ab: number;
  accmEr: number;
  accmInn2: number;
  bbhp: number;
  bf: number;
  er: number;
  game: number;
  hit: number;
  hr: number;
  inn: string;
  kk: number;
  l: number;
  pa: number;
  pos: string;
  r: number;
  s: number;
  w: number;
  wls: string;
  hitter: boolean; // 추가: hitter 여부를 나타내는 필드
  pitcher: boolean; // 추가: pitcher 여부를 나타내는 필드
  getImageUrl: () => string;
  num: string;
  ERA: string;
}
const translatePosition = (position: string): string => {
  if (position === "좌중") {
    return "LF";
  } else if (position === "타좌") {
    return "H";
  } else if (position === "타一") {
    return "H";
  } else if (position === "우좌") {
    return "RF";
  }
  return position;
};

interface ChatBotStore {
  schedule: Game[] | null;
  teamRanks: TeamRank[] | null;
  fetchSchedule: (date: string) => Promise<void>;
  fetchTeamRanks: () => Promise<void>;
  fetchStartMember: (date: string) => Promise<void>;
  loading: boolean; // 로딩 상태 추가
  startMember: StartMember[];
}

const getWeatherIconByPrecipitation = (precipitationProbability: number) => {
  if (precipitationProbability >= 70) {
    return "rainy-6";
  } else if (precipitationProbability >= 50) {
    return "cloudy";
  } else {
    return "day";
  }
};

const getRandomTemperature = () => {
  // 여름철 온도 범위: 26도에서 35도 사이
  return Math.floor(Math.random() * (35 - 26 + 1)) + 26;
};

const getRandomPrecipitationProbability = () => {
  // 강수 확률 범위: 0%에서 90% 사이
  return Math.floor(Math.random() * 91);
};
const apiUrl = process.env.NEXT_PUBLIC_KTWIZ_API_URL;
export const useStore = create<ChatBotStore>((set) => ({
  schedule: null,
  teamRanks: null,
  loading: false,
  startMember: [],

  fetchSchedule: async (date: string) => {
    try {
      const response = await axios.get(`${apiUrl}/get_schedule?yearMonth=${date}`);
      const scheduleData = response.data;
      const gameList: Game[] = scheduleData.data.list;

      const now = new Date();
      const currentDate = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(
        2,
        "0"
      )}${String(now.getDate()).padStart(2, "0")}`;

      const ktGames = gameList.filter((game) => {
        return (game.homeKey === "KT" || game.visitKey === "KT") && game.displayDate >= currentDate;
      });

      const updatedKtGames = ktGames.map((game) => {
        // 강수 확률을 설정하지 않았을 경우 랜덤 값을 생성
        if (game.temperature === undefined || game.precipitationProbability === undefined) {
          const precipitationProbability =
            game.precipitationProbability ?? getRandomPrecipitationProbability();
          return {
            ...game,
            weatherIcon: getWeatherIconByPrecipitation(precipitationProbability),
            temperature: game.temperature === undefined ? getRandomTemperature() : game.temperature,
            precipitationProbability: precipitationProbability,
          };
        }

        // 강수 확률에 따라 날씨 아이콘 업데이트
        return {
          ...game,
          weatherIcon: getWeatherIconByPrecipitation(game.precipitationProbability),
        };
      });

      set({ schedule: updatedKtGames });
    } catch (error) {
      console.error("Failed to fetch schedule:", error);
    }
  },

  fetchTeamRanks: async () => {
    try {
      // 팀 순위 데이터를 가져올 API URL을 입력하세요
      const response = await axios.get("http://43.203.217.238:5002/today_rank"); // 실제 API URL로 교체

      const teamRanks: TeamRank[] = response.data;

      set({ teamRanks });
    } catch (error) {
      console.error("Failed to fetch team ranks:", error);
    }
  },

  fetchStartMember: async (date) => {
    try {
      set({ loading: true });
      const response = await axios.get(`http://43.203.217.238:5002/get_info?date=${date}`);
      const { KTbatters, KTpitchers } = response.data;
      const batters: StartMember[] = KTbatters.map((player: StartMember) => ({
        // Player 타입 명시
        ...player,
        position_translated:
          player.position_translated === "Unknown position"
            ? translatePosition(player.position)
            : player.position_translated,
        hitter: true,
        pitcher: false,
      }));
      const pitchers: StartMember[] = KTpitchers.map((player: StartMember) => ({
        // Player 타입 명시
        ...player,
        hitter: false,
        pitcher: true,
      }));
      const startMember: StartMember[] = [...batters, ...pitchers];

      set({ startMember });
      set({ loading: false });
    } catch (error) {
      set({ loading: false });
      console.error("Error fetching startMember:", error);
    }
  },
}));
