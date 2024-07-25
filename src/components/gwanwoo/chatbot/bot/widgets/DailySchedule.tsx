"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useStore } from "@/store/ChatBot";
import { useEffect } from "react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/styles/gwanwoo.css";

export default function DailySchedule() {
  const { schedule, fetchSchedule } = useStore((state) => ({
    schedule: state.schedule,
    fetchSchedule: state.fetchSchedule,
  }));

  useEffect(() => {
    fetchSchedule("202407");
  }, [fetchSchedule]);

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
      문학: "인천 SSG랜더스 필드",
      수원: "수원 KT위즈 파크",
      사직: "부산 사직 야구장",
      잠실: "잠실 종합운동장 야구장",
      대전: "대전 한화생명이글스 파크",
    };

    return stadiumMap[shortName] || shortName;
  }

  // 데이터가 로드될 때까지 대기할 수 있는 상태를 정의
  const isDataLoaded = schedule;

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
          <SwiperSlide key={index} className="flex">
            <div className="w-max h-max rounded-xl border-2 p-3 border-black bg-slate-50">
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
                {/* <div className="flex relative">
                  <div className="relative w-0 h-0 border-t-[50px] border-r-[50px] border-r-transparent">
                    <div className="absolute top-0 left-0">
                      <Image
                        className="top-1 left-1"
                        src={`/images/chatbot/logos/emblem_KT.png`}
                        alt="home team"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                  <div className="absolute right-0 w-0 h-0  border-b-[50px] border-b-red-500 border-l-[50px] border-l-transparent ">
                    <Image
                      className="absolute bottom-1 right-1"
                      src={`/images/chatbot/logos/emblem_KT.png`}
                      alt="away team"
                      width={240}
                      height={240}
                    />
                  </div>
                </div> */}
              </div>
              <hr />
              <div className="flex flex-col flex-start p-3 ">
                <div className="flex">
                  <div className="mr-1 font-[KT]">구장</div>
                  <div className="text-gray-400"> {formatStadiumName(game.stadium)}</div>
                </div>
                <div className="flex">
                  <div className="mr-1 font-[KT]">날씨</div>
                  <div className="mr-1 font-[KT]">날씨</div>
                  <img
                    src={`images/${game.weatherIcon}.svg`}
                    alt={game.weatherIcon}
                    className="w-6 h-6"
                  />
                  <div className="text-gray-400">{game.temperature}°C</div>
                  <div className="text-gray-400">(강수확률 {game.precipitationProbability}%)</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
