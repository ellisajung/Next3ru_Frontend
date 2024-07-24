"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useStore } from "@/store/ChatBot";
import { useEffect } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/styles/gwanwoo.css";

export default function DailySchedule() {
  const { schedule, fetchSchedule, weatherData, fetchWeatherData } = useStore((state) => ({
    schedule: state.schedule,
    fetchSchedule: state.fetchSchedule,
    weatherData: state.weatherData,
    fetchWeatherData: state.fetchWeatherData,
  }));

  useEffect(() => {
    fetchSchedule("202407");
  }, [fetchSchedule]);

  useEffect(() => {
    // 예를 들어 55, 127은 특정 위치의 좌표입니다.
    // 날씨 데이터와 요청할 날짜와 시간
    fetchWeatherData(55, 127, "20240723", "0500");
  }, [fetchWeatherData]);

  function formatDate(dateString: string) {
    const year = parseInt(dateString.substring(0, 4), 10);
    const month = parseInt(dateString.substring(4, 6), 10) - 1; // 월은 0부터 시작
    const day = parseInt(dateString.substring(6, 8), 10);

    const date = new Date(year, month, day);

    const weekdays = ["일", "월", "화", "수", "목", "금", "토"];

    const formattedMonth = String(date.getMonth() + 1).padStart(2, "0");
    const formattedDay = String(date.getDate()).padStart(2, "0");
    const weekday = weekdays[date.getDay()];

    return `${formattedMonth}/${formattedDay}(${weekday})`;
  }

  function formatStadiumName(shortName: string) {
    const stadiumMap: { [key: string]: string } = {
      창원: "창원 NC 파크",
      대구: "대구 삼성라이온즈 파크",
      고척: "고척 스카이 돔",
      광주: "광주 KIA챔피언스 필드",
      인천: "인천 SSG랜더스 필드",
      수원: "수원 KT위즈 파크",
      사직: "사직 야구장",
      서울: "서울 종합운동장 야구장",
      대전: "대전 한화생명이글스 파크",
    };

    return stadiumMap[shortName] || shortName;
  }

  // 데이터가 로드될 때까지 대기할 수 있는 상태를 정의
  const isDataLoaded = schedule && weatherData;

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={550}
      slidesPerView={1}
      effect={"fade"}
      fadeEffect={{ crossFade: true }}
      navigation
    >
      {isDataLoaded &&
        schedule.map((game, index) => (
          <SwiperSlide key={index} className="flex flex-start">
            <div className="w-max h-max rounded-xl border-2 p-3 border-black bg-slate-50 ml-12">
              <div>
                <div className="w-max flex flex-col flex-start p-3">
                  <div className="flex space-x-2">
                    <div className="font-[KT]">{game.home}</div>
                    <div className="font-[KT] text-sm text-gray-400 py-0">vs</div>
                    <div className="font-[KT]">{game.visit}</div>
                  </div>
                  <div className="font-[KT] text-sm text-gray-400">
                    {formatDate(game.displayDate)}
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex flex-col flex-start p-3 ">
                <div className="flex">
                  <div className="mr-1">구장 {formatStadiumName(game.stadium)}</div>
                </div>
                <div className="flex">
                  <div className="mr-1">날씨</div>
                  <img
                    src={`images/${game.weatherIcon}.svg`}
                    alt={game.weatherIcon}
                    className="w-6 h-6"
                  />
                  <div>{game.temperature}°C</div>
                  <div>(강수확률 {game.precipitationProbability}%)</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
