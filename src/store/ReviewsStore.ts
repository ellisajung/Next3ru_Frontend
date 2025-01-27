import { createClient } from "@/utils/supabase/client";
// import { create } from "zustand";

export const fetchReviewsData = async (
  sort: string,
  asc: string,
  page: string,
  zone: string | null,
) => {
  const supabase = createClient();

  const itemsPerPage = 10; // 페이지당 아이템 수
  const startIdx = (Number(page) - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage - 1;

  // console.log("asc: ", asc, Boolean(asc)); // "false", true
  // console.log("zone", zone, !!zone);

  // zone이 없을 경우 전체 데이터 패칭
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

    // console.log("reviews: ", reviews, "filtered count: ");
    return { reviews, totalPages };
  }

  // zone이 있을 경우 필터링하여 패칭
  const {
    data: reviews,
    error,
    count,
  } = await supabase
    .from("reviews")
    .select("*", { count: "exact" }) // 필터가 적용된 총 데이터 개수?
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

// export const useReviewsStore = create<ReviewsStore>((set) => ({
// }));
