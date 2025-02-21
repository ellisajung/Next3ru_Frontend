import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import * as cheerio from 'cheerio';

// 라우트를 동적으로 설정
export const dynamic = 'force-dynamic';

interface Game {
  displayDate: string;
  home: string;
  visit: string;
  homeScore: string;
  awayScore: string;
  stadium: string;
  weatherIcon?: string;
  temperature?: number;
  precipitationProbability?: number;
}

function formatDate(year: string, month: string, day: string): string {
  const dayNumber = parseInt(day, 10);
  const formattedDay = dayNumber < 10 ? `0${dayNumber}` : dayNumber;
  return `${year}${month}${formattedDay}`;
}

function getWeatherIconByPrecipitation(precipitationProbability: number): string {
  if (precipitationProbability > 70) return 'rainy';
  if (precipitationProbability > 30) return 'cloudy';
  return 'sunny';
}

function getRandomTemperature(): number {
  return Math.floor(Math.random() * (35 - 10 + 1)) + 10;
}

function getRandomPrecipitationProbability(): number {
  return Math.floor(Math.random() * 101);
}

export async function GET(request: NextRequest) {
  try {
    // URL에서 yearMonth 파라미터 추출
    const url = new URL(request.url);
    const yearMonth = url.searchParams.get('yearMonth');

    if (!yearMonth || yearMonth.length !== 6) {
      return NextResponse.json(
        { error: 'Invalid yearMonth format. Expected format is YYYYMM.' }, 
        { status: 400 }
      );
    }

    const targetYear = yearMonth.substring(0, 4);
    const targetMonth = yearMonth.substring(4, 6);

    const fetchUrl = `https://statiz.sporki.com/schedule/?year=${targetYear}&month=${targetMonth}`;
    
    const { data } = await axios.get(fetchUrl);
    const $ = cheerio.load(data);
    
    const now = new Date();
    const currentDate = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
    
    const ktGames: Game[] = [];
    
    $('tbody tr').each((_, row) => {
      $(row).find('td').each((_, cell) => {
        const daySpan = $(cell).find('.day').text().trim();
        const gamesList = $(cell).find('.games ul li');

        if (!daySpan) return;

        gamesList.each((_, game) => {
          const gameInfo = $(game).find('a');
          const teams = $(gameInfo).find('.team');
          const scores = $(gameInfo).find('.score');

          const home = $(teams[0]).text().trim();
          const visit = $(teams[1]).text().trim();
          const homeScore = $(scores[0]).text().trim();
          const awayScore = $(scores[1]).text().trim();
          const stadium = $(gameInfo).find('.stadium').text().trim() || '정보없음';
          
          if (home === 'KT' || visit === 'KT') {
            const displayDate = formatDate(targetYear, targetMonth, daySpan);
            
            const gameData: Game = {
              displayDate,
              home,
              visit,
              homeScore,
              awayScore,
              stadium,
            };

            if (displayDate >= currentDate) {
              const precipitationProbability = getRandomPrecipitationProbability();
              ktGames.push({
                ...gameData,
                weatherIcon: getWeatherIconByPrecipitation(precipitationProbability),
                temperature: getRandomTemperature(),
                precipitationProbability,
              });
            }
          }
        });
      });
    });

    return NextResponse.json({ ktGames });
    
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
