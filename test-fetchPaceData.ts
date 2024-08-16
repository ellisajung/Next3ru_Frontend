const axios = require("axios");
const cheerio = require("cheerio");

interface PitchData {
  pitchRate: { [key: string]: number };
  pitchValue: { [key: string]: number };
}

interface IncomeData {
  year: string;
  salary: number;
  war: number;
}

interface PlayerData {
  pitchRate: { [key: string]: number };
  pitchValue: { [key: string]: number };
  incomeData: IncomeData[];
}

// 구종별 던지는 비율 및 가치를 추출하는 함수
async function fetchPitchData(query: string): Promise<PitchData> {
  const url = `https://statiz.sporki.com/player/?m=playerinfo&p_no=${query}`;
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);

  const pitchRate: { [key: string]: number } = {}; // 던지는 비율 결과 객체
  const pitchValue: { [key: string]: number } = {}; // 가치를 저장할 객체

  // 구종별 던지는 비율 파싱
  $(".pace .ball_tit").each((_: any, el: any) => {
    const title: string = $(el).contents().first().text().trim();
    const pitchText: string = $(el).find("span").text().trim();
    const match = pitchText.match(/(\d+(\.\d+)?)%/); // 정규 표현식으로 % 값 추출

    if (match) {
      const percentage: number = parseFloat(match[1]); // % 값 숫자로 변환
      pitchRate[title] = percentage; // 결과 객체에 저장
    }
  });

  // 구종 가치 파싱
  const scriptTagContent: string | null = $('script:contains("radar-chart")').html();
  if (scriptTagContent) {
    // 정규 표현식으로 레이블과 데이터를 추출
    const labelsMatch = scriptTagContent.match(/labels:\s*\[([^\]]+)\]/);
    const dataMatch = scriptTagContent.match(/data:\s*\[([^\]]+)\]/);

    if (labelsMatch && dataMatch) {
      const labelsString: string = labelsMatch[1];
      const dataString: string = dataMatch[1];

      const labels: string[] = labelsString
        .split(",")
        .map((label) => label.trim().replace(/['"]+/g, ""));
      const pitchValues: number[] = dataString.split(",").map((value) => parseFloat(value.trim()));

      labels.forEach((label: string, index: number) => {
        pitchValue[label] = pitchValues[index];
      });
    }
  }

  return { pitchRate, pitchValue };
}

// 연봉 데이터 크롤링 함수
async function fetchIncomeData(query: string): Promise<IncomeData[]> {
  const url = `https://statiz.sporki.com/player/?m=income&p_no=${query}`;
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);

  const incomeData: IncomeData[] = [];

  // 연봉 데이터 파싱
  $(".table_type03 tbody tr").each((_: any, el: any) => {
    const year: string = $(el).find("td").eq(0).text().trim();
    const salary: number = parseInt($(el).find("td").eq(1).text().replace(/,/g, "").trim(), 10);
    const war: number = parseFloat($(el).find("td").eq(2).text().trim());

    incomeData.push({ year, salary, war });
  });

  // 가장 최근 5개년치 데이터만 반환
  return incomeData.slice(-5);
}

// 통합된 데이터 크롤링 함수
async function fetchPlayerData(query: string): Promise<PlayerData> {
  const [pitchData, incomeData] = await Promise.all([
    fetchPitchData(query),
    fetchIncomeData(query),
  ]);
  return { ...pitchData, incomeData };
}

// 테스트 함수
const testFetchPlayerData = async () => {
  const query = "13942";

  try {
    const result = await fetchPlayerData(query);
    console.log("Pitch Rate Data:", result.pitchRate);
    console.log("Pitch Value Data:", result.pitchValue);
    console.log("Income Data:", result.incomeData);
  } catch (error) {
    console.error("Error:", error);
  }
};

// 테스트 함수 실행
testFetchPlayerData();
