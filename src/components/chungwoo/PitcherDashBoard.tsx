"use client";
import { useStore } from "@/store/PlayerPitcher";
import React from "react";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const PitcherDashBoard = () => {
  const pitchAverages1 = {
    투심: 2.25,
    포심: 9.01,
    커터: 3.25,
    커브: 5.95,
    슬라이더: 12.35,
    체인지업: 7.39,
    포크볼: 7.19,
  };

  const pitchAverages2 = {
    투심: 2.5,
    포심: 8.5,
    커터: 4.0,
    커브: 5.0,
  };

  const chartData = {
    labels: Object.keys(pitchAverages2),
    datasets: [
      {
        label: "OOO선수 값",
        data: Object.values(pitchAverages2),
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
      {
        label: "KBO 상위 20명 평균값",
        data: Object.values(pitchAverages1),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const salaryData = {
    labels: ["Player A", "Player B", "Player C", "Player D", "Player E"],
    datasets: [
      {
        label: "연봉 (만원)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255, 99, 132, 0.4)",
        hoverBorderColor: "rgba(255, 99, 132, 1)",
        data: [15000, 20000, 18000, 22000, 17000],
      },
    ],
  };

  const pitchDistribution = {
    labels: ["Fastball", "Changeup", "Slider", "Curveball"],
    datasets: [
      {
        label: "투구 비율",
        data: [40, 25, 20, 15],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const pitchingIndex = {
    labels: ["ERA", "WHIP", "AVG", "K/9", "BB/9"],
    datasets: [
      {
        label: "쿠에바스 선수의 기록", // Adjusted label
        data: [4.32, 1.22, 0.235, 8.55, 2.96], // Adjusted data values
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
      {
        label: "KBO 평균",
        data: [4.87, 1.51, 0.276, 7.59, 3.83], // Adjusted data values
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const { pitchers, setSelectedPlayerPcode, selectedPlayerPcode } = useStore((state) => ({
    pitchers: state.pitchers,
    setSelectedPlayerPcode: state.setSelectedPlayerPcode,
    selectedPlayerPcode: state.selectedPlayerPcode,
  }));

  return (
    <div className="p-4 bg-black">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center p-4 bg-white shadow">
          <img
            src="/images/pitcher/쿠에바스.svg" // Replace with actual image URL or import
            alt="Player"
            className="w-32 h-32 rounded-full"
          />
          <div className="ml-4">
            <p>이름: 쿠에바스</p>
            <p>등번호: 19</p>
            <p>포지션: 선발투수</p>
            <p>투타: 좌투우타</p>
            <p>생년월일: 2004.04.12</p>
            <p>체격: 187cm, 90kg</p>
            <p>출신교: 영화초-성남중-성남고</p>
          </div>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-lg font-semibold mb-4">2024 Pitch Value</h3>
          <Bar data={chartData} />
        </div>
        <div className="p-4 bg-white shadow">
          <h3 className="text-lg font-semibold">연봉 그래프</h3>
          <Line data={salaryData} />
        </div>
        <div className="p-4 bg-white shadow">
          <h3 className="text-lg font-semibold">볼 구종</h3>
          <Pie data={pitchDistribution} />
        </div>
        <div className="col-span-2 p-4 bg-white shadow">
          <Bar data={pitchingIndex} />
        </div>
      </div>
    </div>
  );
};

export default PitcherDashBoard;
