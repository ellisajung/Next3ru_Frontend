import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

interface TeamRanking {
  rank: number;
  team: string;
  gamesPlayed: number;
  wins: number;
  draws: number;
  losses: number;
  gamesBehind: number;
  winRate: number;
  runsScored: number;
  runsAllowed: number;
}

// 문자열에서 숫자만 추출하는 헬퍼 함수
function extractNumber(text: string): number {
  const number = text.replace(/[^0-9.-]/g, '');
  return number ? parseFloat(number) : 0;
}

export async function GET() {
  try {
    const fetchUrl = 'https://statiz.sporki.com/';
    const response = await fetch(fetchUrl);
    const data = await response.text();
    const $ = cheerio.load(data);
    
    const teamRankings: TeamRanking[] = [];
    
    // 순위표 테이블에서 데이터 추출
    $('.tbl_rank2024 tbody tr').each((_, row) => {
      const columns = $(row).find('td');
      
      // 각 컬럼의 텍스트 데이터 추출 및 정제
      const rankText = $(columns[0]).text().trim();
      const teamText = $(columns[1]).text().trim();
      const gamesPlayedText = $(columns[2]).text().trim();
      const winsText = $(columns[3]).text().trim();
      const drawsText = $(columns[4]).text().trim();
      const lossesText = $(columns[5]).text().trim();
      const gamesBehindText = $(columns[6]).text().trim();
      const winRateText = $(columns[7]).text().trim();
      const runsScoredText = $(columns[8]).text().trim();
      const runsAllowedText = $(columns[9]).text().trim();

      // 데이터 파싱
      const rank = extractNumber(rankText);
      const gamesPlayed = extractNumber(gamesPlayedText);
      const wins = extractNumber(winsText);
      const draws = extractNumber(drawsText);
      const losses = extractNumber(lossesText);
      const gamesBehind = extractNumber(gamesBehindText);
      const winRate = extractNumber(winRateText);
      const runsScored = extractNumber(runsScoredText);
      const runsAllowed = extractNumber(runsAllowedText);

      // 팀 이름이 존재하고 rank가 유효한 경우에만 데이터 추가
      if (teamText && rank > 0) {
        const teamRanking: TeamRanking = {
          rank,
          team: teamText,
          gamesPlayed,
          wins,
          draws,
          losses,
          gamesBehind,
          winRate,
          runsScored,
          runsAllowed,
        };

        teamRankings.push(teamRanking);
      }
    });

    // 데이터가 없는 경우 에러 반환
    if (teamRankings.length === 0) {
      return NextResponse.json(
        { error: 'No data found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ teamRankings });
    
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}
