import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import * as cheerio from "cheerio";

async function fetchPaceData(query: string): Promise<{ [key: string]: string }> {
  const url = `https://statiz.sporki.com/player/?m=playerinfo&p_no=${query}`;
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);

  const result: { [key: string]: string } = {};
  $(".pace .ball_tit").each((_, el) => {
    const title = $(el).contents().first().text().trim();
    const pitches = $(el).find("span").text().trim();
    result[title] = pitches;
  });

  return result;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { query } = req;
  const queryString = Array.isArray(query.q) ? query.q[0] : query.q || "11319";

  try {
    const result = await fetchPaceData(queryString);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: (error as Error).message });
  }
}
