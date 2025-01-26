import { createClient } from "@/utils/supabase/client";
import { create } from "zustand";


interface ReviewsStore {
  data: any;
  totalPages: number;
  currentPage: number;
  setCurrentPage: any;
  sortByDate: boolean;
  setSortByDate: any;
  fetchDataByDate: any;
  fetchDataByLikes: any;
  fetchZoneDataByDate: any;
  fetchZoneDataByLikes: any;
  // renderedPages: number[];
  // setRenderedPages: any;
}

export async function fetchReviewsData() {
  const supabase = createClient();

  let { data, error } = await supabase.from("reviews").select();

  if (error) {
    console.log(error.message);
  }

  // console.log("reviews: ", data);
  return data;
}

export const useReviewsStore = create<ReviewsStore>((set) => ({
  data: null,
  totalPages: 1,
  currentPage: 1,
  setCurrentPage: async (newPage: number) => {
    set({ currentPage: newPage });
  },
  sortByDate: true,
  setSortByDate: async (sort: boolean) => {
    set({ sortByDate: sort });
  },
  // 노필터 + 작성일순
  fetchDataByDate: async (page: number) => {
    const supabase = createClient();

    const itemsPerPage = 10; // 페이지당 아이템 수
    const startIdx = (page - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage - 1;

    const { data, error, count } = await supabase
      .from("reviews")
      .select("*", { count: "exact" }) // 총 데이터 개수를 가져옴
      .order("created_at", { ascending: false })
      .range(startIdx, endIdx); // 인덱스 기준. 예를 들어, (0, 9)이면 첫번째부터 10개의 요소 가져옴

    if (!error) {
      set({
        data: data,
        totalPages: Math.ceil((count || 1) / itemsPerPage),
        // currentPage: page,
      });
    } else {
      console.log(error.message);
    }
  },
  // 노필터 + 추천순
  fetchDataByLikes: async (page: number) => {
    const supabase = createClient();

    const itemsPerPage = 10; // 페이지당 아이템 수
    const startIdx = (page - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage - 1;

    const { data, error, count } = await supabase
      .from("reviews")
      .select("*", { count: "exact" }) // 총 데이터 개수를 가져옴
      .order("created_at", { ascending: false })
      .range(startIdx, endIdx); // 인덱스 기준. 예를 들어, (0, 9)이면 첫번째부터 10개의 요소 가져옴

    if (!error) {
      set({
        data: data,
        totalPages: Math.ceil((count || 1) / itemsPerPage),
        // currentPage: page,
      });
    } else {
      console.log(error.message);
    }
  },
  // 필터 + 작성일순
  fetchZoneDataByDate: async (zone: string, page: number) => {
    const supabase = createClient();
    // 해당하는 좌석 구역의
    // 현재 페이지 범위 추출 후
    // 2 page => 11 ~ 20
    // startIndex = itemPerPage * (page - 1) + 1
    // endIndex = itemPerPage * page
    // 정렬
    const itemsPerPage = 10; // 페이지당 아이템 수
    const startIdx = (page - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage - 1;

    const { data, error, count } = await supabase
      .from("reviews")
      .select("*", { count: "exact" }) // 총 데이터 개수를 가져옴
      .eq("zone", zone)
      .order("created_at", { ascending: false })
      .range(startIdx, endIdx); // 인덱스 기준. 예를 들어, (0, 9)이면 첫번째부터 10개의 요소 가져옴

    if (!error) {
      set({
        data: data,
        totalPages: Math.ceil((count || 1) / itemsPerPage),
        // currentPage: page,
      });
    } else {
      console.log(error.message);
    }
  },
  // 필터 + 추천순
  fetchZoneDataByLikes: async (zone: string, page: number) => {
    const supabase = createClient();
    // 해당하는 좌석 구역의
    // 정렬
    // 현재 페이지 범위 추출 후
    // 2 page => 11 ~ 20
    // startIndex = itemPerPage * (page - 1) + 1
    // endIndex = itemPerPage * page
    const itemsPerPage = 10; // 페이지당 아이템 수
    const startIdx = (page - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage - 1;

    const { data, error, count } = await supabase
      .from("reviews")
      .select("*", { count: "exact" }) // 총 데이터 개수를 가져옴
      .eq("zone", zone)
      .order("likes", { ascending: false })
      .range(startIdx, endIdx); // 인덱스 기준. 예를 들어, (0, 9)이면 첫번째부터 10개의 요소 가져옴

    if (!error) {
      set({
        data: data,
        totalPages: Math.ceil((count || 1) / itemsPerPage),
        // currentPage: page,
      });
    } else {
      console.log(error.message);
    }
  },
  // renderedPages: [1, 2, 3, 4, 5],
  // setRenderedPages: async (currPage: number) => {
  //   const pagesPerRender = 5

  // },
}));
