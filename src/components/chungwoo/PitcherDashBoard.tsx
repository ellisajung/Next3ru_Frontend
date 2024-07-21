"use client";
import { useStore } from "@/store/PitcherDashBoard";
import { useStore as useStore2 } from "@/store/PlayerPitcher";
import React, { useEffect } from "react";
import { Bar, Radar, Line, Pie } from "react-chartjs-2";
import { Chart, ChartOptions, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Image from "next/image";

Chart.register(...registerables, ChartDataLabels);

const PitcherDashBoard = () => {
  const { pitcher, fetchPitcher } = useStore((state) => ({
    pitcher: state.pitcher,
    fetchPitcher: state.fetchPitcher,
  }));

  const { pitcherList, selectedPitcherPcode, setSelectedPitcherPcode } = useStore2((state) => ({
    pitcherList: state.pitcherList,
    selectedPitcherPcode: state.selectedPitcherPcode,
    setSelectedPitcherPcode: state.setSelectedPitcherPcode,
  }));

  useEffect(() => {
    fetchPitcher("64001");
  }, []);

  const top20pitchAverage = {
    "2-seam Fastball": 2.25,
    "4-seam Fastball": 9.01,
    ChangeUp: 7.39,
    Curve: 5.95,
    Cutter: 3.25,
    Slider: 12.35,
    Forkball: 7.19,
    Sinker: 5.12,
  };

  const filteredPitchingValue = Object.fromEntries(
    Object.entries(pitcher?.pitchingValue || {}).filter(([key, value]) => value != 0)
  );

  const filteredPitchValueAvg = Object.fromEntries(
    Object.entries(top20pitchAverage).filter(([key]) => key in filteredPitchingValue)
  );

  const filteredPitchingRatio = Object.fromEntries(
    Object.entries(pitcher?.pitchingRatio || {}).filter(([key, value]) => value != 0)
  );

  const RadarOptions: ChartOptions<"radar"> = {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  const LineOptions: ChartOptions<"line"> = {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  const BarOptions: ChartOptions<"bar"> = {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  const pitchingValue = {
    labels: Object.keys(filteredPitchValueAvg),

    datasets: [
      {
        label: `${pitcher?.playerName}선수의 값`,
        data: Object.keys(filteredPitchValueAvg).map((label) => filteredPitchingValue[label] || 0),
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
      {
        label: "KBO 상위 20명 평균값",
        data: Object.values(filteredPitchValueAvg),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const salaryData = {
    labels: ["2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "연봉 (만원)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255, 99, 132, 0.4)",
        hoverBorderColor: "rgba(255, 99, 132, 1)",
        data: [
          `${pitcher?.Salary["2020"]}`,
          `${pitcher?.Salary["2021"]}`,
          `${pitcher?.Salary["2022"]}`,
          `${pitcher?.Salary["2023"]}`,
          `${pitcher?.Salary["2024"]}`,
        ],
      },
    ],
  };

  const getPitchColor = (pitch: string): string => {
    const colors: { [key: string]: string } = {
      "2-seam Fastball": "#FE9A2E", // 주황
      "4-seam Fastball": "#FE2E2E", // 빨강
      Sinker: "#003366", // 네이비
      Slider: "#2E2EFE", // 파랑
      ChangeUp: "#2EFE64", // 초록
      Cutter: "#FFBF00", // 노랑
      Curve: "#FFFF00", // 청록
      Forkball: "#BF00FF", //보라
    };
    return colors[pitch] || "#000000"; // 기본 색상 (블랙)
  };
  const pieOptions: ChartOptions<"pie"> = {
    plugins: {
      legend: {
        position: "right",
      },
      datalabels: {
        display: false, // 데이터 레이블 표시
        formatter: (value: number, context: any) => {
          const total = context.dataset.data.reduce((acc: number, val: number) => acc + val, 0);
          const percentage = ((value / total) * 100).toFixed(3); // 퍼센트 계산
          return `${percentage}%`;
        },
        color: "#000000", // 레이블 색상

        font: {
          size: 12,
        },
      },
    },
  };

  const pitchDistribution = {
    datasets: [
      {
        label: "투구 비율",
        data: Object.values(filteredPitchingRatio),
        backgroundColor: Object.keys(filteredPitchingRatio).map(getPitchColor),
        borderWidth: 1,
      },
    ],
    labels: Object.keys(filteredPitchingRatio),
  };

  const eraValue = pitcherList.find((pitcher) => pitcher.pcode === selectedPitcherPcode)?.era ?? 0;
  const whipValue =
    pitcherList.find((pitcher) => pitcher.pcode === selectedPitcherPcode)?.whip ?? 0;

  const pitchingIndex = {
    labels: ["ERA", "WHIP", "AVG", "K/9", "BB/9"],
    datasets: [
      {
        label: pitcher?.playerName,
        data: [
          eraValue,
          whipValue,
          `${pitcher?.AVG}`,
          `${pitcher?.["K/9"]}`,
          `${pitcher?.["BB/9"]}`,
        ],
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

  return (
    <div className="p-4">
      {selectedPitcherPcode}
      <div className="grid grid-cols-2 gap-4 w-[900px]">
        <div className={`relative p-4 col-span-2 bg-custom-gradient`}>
          <div className="flex justify-center">
            <Image
              src={`/images/pitcher/${pitcher?.playerName}.svg`}
              alt={pitcher?.playerName || "Default Alt Text"}
              width={240}
              height={150}
              className="ml-4"
            />
            <div className="flex flex-col justify-center p-4 w-[150px] h-[350px] mx-4">
              <div className=" text-[#C00000] text-4xl mb-4">No. {pitcher?.backnum}</div>
              <div className=" text-white text-4xl font-bold">{pitcher?.playerName}</div>
            </div>
            <div className="flex flex-col justify-center  p-4 w-[450px] h-[350px] ">
              <div className="flex">
                <div className=" text-white w-16 mr-8">투타</div>
                <div className=" text-white ">{pitcher?.hittype}</div>
              </div>

              <div className="flex">
                <div className=" text-white  w-16 mr-8">생년월일</div>
                <div className=" text-white ">
                  {`${pitcher?.birth.substring(0, 4)}.${pitcher?.birth.substring(
                    4,
                    6
                  )}.${pitcher?.birth.substring(6, 8)}`}
                </div>
              </div>

              <div className="flex">
                <div className=" text-white  w-16 mr-8">체격</div>
                <div className=" text-white ">
                  {pitcher?.height}cm,{pitcher?.weight}kg
                </div>
              </div>

              <div className="flex">
                <div className=" text-white  w-16 mr-8">출신교</div>
                <div className=" text-white ">{pitcher?.career}</div>
              </div>

              <div className="flex">
                <div className=" text-white w-16 mr-8">입단연도</div>
                <div className=" text-white ">{pitcher?.debutYear}년</div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-2xl font-bold mb-2">2024 {pitcher?.playerName}투수 Pitch Value</h3>
          <p className="mt-2 text-gray-600 text-sm mb-2">
            각 구종별 구종가치를 KBO 상위20인과 비교한 차트입니다.
          </p>
          <Radar data={pitchingValue} options={RadarOptions} />
        </div>
        <div className="p-4 bg-white shadow">
          <h3 className="text-2xl font-bold mb-2">2024 {pitcher?.playerName}투수 투구 구종 비율</h3>
          <p className=" text-gray-600 text-sm mb-2">투구 구종별 비율을 시각화한 차트입니다.</p>
          <Pie data={pitchDistribution} options={pieOptions} />
        </div>
        <div className="p-4 col-span-2 bg-white shadow">
          <h3 className="text-2xl font-bold mb-2">{pitcher?.playerName}투수 연봉 그래프</h3>
          <Line data={salaryData} options={LineOptions} />
        </div>
        <div className="col-span-2 p-4 bg-white shadow">
          <h3 className="text-2xl font-bold mb-2">2024 {pitcher?.playerName}투수 투구 구종 비율</h3>
          <p className=" text-gray-600 text-sm mb-2">투구 구종별 비율을 시각화한 차트입니다.</p>
          <Bar data={pitchingIndex} options={BarOptions} />
        </div>
      </div>
    </div>
  );
};

export default PitcherDashBoard;
