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

interface WeatherItem {
  baseDate: string;
  baseTime: string;
  category: string;
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
  nx: number;
  ny: number;
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

interface ChatBotStore {
  schedule: Game[] | null;
  weatherData: WeatherData | null;
  teamRanks: TeamRank[] | null;
  fetchSchedule: (date: string) => Promise<void>;
  fetchWeatherData: (nx: number, ny: number, date: string, time: string) => Promise<void>;
  fetchTeamRanks: () => Promise<void>;
}

const API_URL = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst";
const SERVICE_KEY =
  "88VloqlHkAFjb0CilmLNobTkiDhXaChOr3VVpA9lTYTuVkbyTL/HGEoiDaM8R71Ormc8J8yH+/8stJJrzF95CA==";

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

export const useStore = create<ChatBotStore>((set) => ({
  schedule: null,
  weatherData: null,
  teamRanks: null,

  fetchSchedule: async (date: string) => {
    try {
      const response = await axios.get(`http://43.203.217.238:5002/get_schedule?yearMonth=${date}`);
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

  fetchWeatherData: async (nx: number, ny: number, date: string, time: string) => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          serviceKey: SERVICE_KEY,
          base_date: date,
          base_time: time,
          nx,
          ny,
          pageNo: 1,
          numOfRows: 900,
          dataType: "JSON",
        },
      });

      console.log("Weather API response:", response.data);

      const weatherItems: WeatherItem[] = response.data?.response?.body?.items?.item || [];
      const temperatureItem = weatherItems.find((item) => item.category === "TMP");
      const precipitationProbabilityItem = weatherItems.find((item) => item.category === "POP");

      const filteredData: WeatherData = {
        temperature: temperatureItem ? parseFloat(temperatureItem.fcstValue) : null,
        precipitationProbability: precipitationProbabilityItem
          ? parseInt(precipitationProbabilityItem.fcstValue, 10)
          : null,
      };

      set({ weatherData: filteredData });
    } catch (error) {
      console.error("Failed to fetch weather data:", error);
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
}));
