"use server";

import { createClient } from "@/utils/supabase/client";
import { UUID } from "crypto";

// 리뷰 페이지
export const fetchReviewsData = async (
  sort: string,
  asc: string,
  page: string,
  area: string,
  zone: string,
) => {
  const supabase = createClient();

  const itemsPerPage = 10; // 페이지당 아이템 수
  const startIdx = (Number(page) - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage - 1;

  // zone이 없을 경우 - 전체 데이터 패칭
  if (!zone) {
    const {
      data: reviews,
      error,
      count,
    } = await supabase
      .from("reviews")
      .select("*", { count: "exact" }) // 총 데이터 개수를 가져옴
      .order(sort, { ascending: asc === "false" ? false : true })
      .range(startIdx, endIdx); // 인덱스 기준. 예를 들어, (0, 9)이면 첫번째부터 10개의 요소 가져옴

    if (error) {
      console.log(error.message);
    }

    const totalPages = Math.ceil((count || 1) / itemsPerPage);

    console.log("reviews: ", reviews, "filtered count: ", count);
    return { reviews, totalPages };
  }

  // zone이 있을 경우 - 필터링하여 패칭
  const {
    data: reviews,
    error,
    count,
  } = await supabase
    .from("reviews")
    .select("*", { count: "exact" }) // 필터가 적용된 총 데이터 개수
    .eq("zone", zone)
    .order(sort, { ascending: asc === "false" ? false : true })
    .range(startIdx, endIdx); // 인덱스 기준. 예를 들어, (0, 9)이면 첫번째부터 10개의 요소 가져옴

  if (error) {
    console.log(error.message);
  }

  const totalPages = Math.ceil((count || 1) / itemsPerPage);

  // console.log("reviews: ", reviews, "filtered count: ");
  return { reviews, totalPages };
};

// 좌석 정보 페이지
export const fetchFilteredReviewsData = async (
  sort: string,
  asc: boolean,
  zone: string,
) => {
  const supabase = createClient();

  // zone o, page x
  const {
    data: reviews,
    error,
    count,
  } = await supabase
    .from("reviews")
    .select("*", { count: "exact" })
    .eq("zone", zone)
    .order(sort, { ascending: asc });

  if (error) {
    console.log(error.message);
  }

  console.log("reviews: ", reviews, "filtered count: ", count);
  return { reviews, count };
};

// 내 리뷰 페이지 - 읽기
export const fetchUserReviewsData = async (userId: string) => {
  const supabase = createClient();

  const {
    data: reviews,
    error,
    count,
  } = await supabase
    .from("reviews")
    .select("*", { count: "exact" })
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error.message);
    return;
  }

  return { reviews, count };
};

// 리뷰 페이지 - 생성
export const createReviewData = async ({
  userId,
  username,
  areaName,
  zone,
  content,
  rates,
  imgUrls,
}: {
  userId: string | undefined;
  username: string;
  areaName: string;
  zone: string;
  content: string;
  rates: { [key: string]: number };
  imgUrls?: string[];
}) => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("reviews")
    .insert([
      {
        user_id: userId,
        username: username,
        area_name: areaName,
        zone: zone,
        content: content,
        rates: rates,
        img_urls: imgUrls,
      },
    ])
    .select();

  if (error) {
    console.log("Creating Review Error: ", error.message);
    return { success: false };
  }

  console.log("created review: ", data);
  return { success: true, message: "리뷰가 성공적으로 저장되었습니다." };
};

// 내 리뷰 페이지 - 업데이트
// export const updateUserReviewsData = async (
//   reviewId: string,
//   newContent: string,
// ) => {
//   const supabase = createClient();

//   const { data, error } = await supabase
//     .from("reviews")
//     .update({ content: newContent })
//     .eq("review_id", reviewId)
//     .select(); // 업데이트된 리뷰만 셀렉트

//   if (error) {
//     console.log(error.message);
//     return;
//   }

//   return data;
// };

// 내 리뷰 페이지 - 삭제
export const deleteUserReviewsData = async (reviewId: string) => {
  const supabase = createClient();

  const { error } = await supabase
    .from("reviews")
    .delete()
    .eq("review_id", reviewId);

  if (error) {
    console.log("deleting error: ", error.message);
  }
};
