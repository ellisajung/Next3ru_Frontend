"use client";
import { useStore } from "@/store/PitcherDashBoard";
import { useStore as useStore2 } from "@/store/PlayerPitcher";
import React, { useEffect } from "react";
import { Bar, Radar, Line, Pie } from "react-chartjs-2";
import { Chart, ChartOptions, registerables, ChartArea, Plugin } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Image from "next/image";
import { Tooltip } from "@nextui-org/tooltip";
import { FaInfoCircle } from "react-icons/fa";

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
    scales: {
      r: {
        pointLabels: {
          font: {
            size: 12, // 레이블의 폰트 크기 조절
          },
          color: "#000000", // 레이블 색상 조절
        },
        ticks: {
          display: false, // 레이더 축의 눈금 값 숨기기
        },
        grid: {
          lineWidth: 1, // 그리드 선의 두께 조절
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
      },
    },
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

  const LineOptions: ChartOptions<"line"> = {
    elements: {
      point: {
        radius: 4, // 기본 상태에서 점의 크기
        hoverRadius: 10, // 마우스를 올렸을 때 점의 크기
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `Value: ${tooltipItem.raw}`; // 툴팁 본문에 데이터 값을 표시
          },
        },
        bodyFont: {
          size: 12, // 툴팁 본문 글자 크기 조정
        },
      },
      datalabels: {
        display: true, // 데이터 레이블 표시
        color: "#000000", // 데이터 레이블 색상
        font: {
          size: 14, // 데이터 레이블 글자 크기 조정
        },
      },
      legend: {
        position: "bottom",
      },
    },
  };

  const BarOptions: ChartOptions<"bar"> = {
    plugins: {
      tooltip: {
        enabled: true,
      },
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

  const tooltipLabels = {
    ERA: "Earned Run Average: 평균 자책점",
    WHIP: "Walks plus Hits per Inning Pitched: 이닝당 출루 허용률",
    AVG: "Batting Average: 타율",
    "K/9": "Strikeouts per 9 Innings: 9이닝당 삼진",
    "BB/9": "Walks per 9 Innings: 9이닝당 볼넷",
  };

  const CustomTooltipPlugin: Plugin<"bar"> = {
    id: "customTooltip",
    beforeDraw(chart) {
      const { ctx, chartArea, scales, tooltip } = chart;
      const { top, bottom, left, right } = chartArea;

      // Ensure tooltip and chart.data.labels are defined and tooltip.dataPoints is an array
      if (
        !tooltip ||
        !Array.isArray(tooltip.dataPoints) ||
        !chart.data.labels ||
        tooltip.dataPoints.length === 0
      )
        return;

      const xScale = scales.x as Chart["scales"]["x"];
      const labels = chart.data.labels as (string | undefined)[];

      const tooltipText: { [key: string]: string } = {
        ERA: "Earned Run Average: 평균 자책점",
        WHIP: "Walks plus Hits per Inning Pitched: 이닝당 출루 허용률",
        AVG: "Batting Average: 타율",
        "K/9": "Strikeouts per 9 Innings: 9이닝당 삼진",
        "BB/9": "Walks per 9 Innings: 9이닝당 볼넷",
      };

      ctx.save();
      ctx.font = "bold 22px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";

      tooltip.dataPoints.forEach((dataPoint) => {
        const label = labels[dataPoint.dataIndex];

        if (label && tooltipText[label]) {
          const xPosition = xScale.getPixelForValue(dataPoint.dataIndex);
          const yPosition = top - 50;

          // Draw tooltip background
          ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
          const textWidth = ctx.measureText(tooltipText[label]).width;
          ctx.fillRect(xPosition - textWidth / 2 - 10, yPosition - 30, textWidth + 20, 40);

          // Draw tooltip text
          ctx.fillStyle = "white";
          ctx.fillText(tooltipText[label], xPosition, yPosition + 15);
        }
      });

      ctx.restore();
    },
  };

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
        data: [4.87, 1.51, 0.276, 7.59, 3.83],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-4">
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
          <h3 className="flex  text-2xl font-bold mb-2">
            2024 {pitcher?.playerName}
            <div className="flex ml-2">
              <Tooltip
                content="투수의 투구 결과에 따라 바뀐 기대 득점의 변화량을 구종별로 누적한 값이다. 높을수록 좋은투수이다."
                className="border border-gray bg-gray-100 text-black mt-2 p-2"
              >
                구종가치
              </Tooltip>
              <FaInfoCircle className="text-gray-500"></FaInfoCircle>
            </div>
          </h3>
          <p className="mt-2 text-gray-600 text-sm mb-2">
            각 구종별 구종가치를 KBO 상위20인과 비교한 차트입니다.
          </p>
          <Radar data={pitchingValue} options={RadarOptions} className="" />
        </div>
        <div className="p-4 bg-white shadow">
          <h3 className="text-2xl font-bold mb-2">2024 {pitcher?.playerName} 투구 구종 비율</h3>
          <p className=" text-gray-600 text-sm mb-2">투구 구종별 비율을 시각화한 차트입니다.</p>
          <Pie data={pitchDistribution} options={pieOptions} />
        </div>
        <div className="p-4 col-span-2 bg-white shadow">
          <h3 className="text-2xl font-bold mb-2">{pitcher?.playerName}선수의 연봉 그래프</h3>
          <Line data={salaryData} options={LineOptions} />
        </div>
        <div className="col-span-2 p-4 bg-white shadow">
          <h3 className="text-2xl font-bold mb-2">2024 {pitcher?.playerName}선수의 투수주요지표</h3>
          <p className=" text-gray-600 text-sm mb-2">투수의 능력을 평가하는 주요지표입니다.</p>
          <Bar data={pitchingIndex} options={BarOptions} plugins={[CustomTooltipPlugin]} />
        </div>
      </div>
    </div>
  );
};

export default PitcherDashBoard;
