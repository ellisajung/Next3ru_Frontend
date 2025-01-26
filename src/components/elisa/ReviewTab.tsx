"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn-ui/card";
import ReviewEditModal from "./ReviewEditModal";
import { useState, useEffect } from "react";
import * as React from "react";
import ReviewContentHeader from "./ReviewContentHeader";
import ReviewCard from "./ReviewCard";
import { useReviewsStore } from "@/store/ReviewsStore";
import ReviewPagination from "./ReviewPagination";
import { useRouter, useSearchParams } from "next/navigation";

const ReviewTab = () => {
  // search params:
  // area, zone, sort, asc, page
  const reviews = useReviewsStore((state) => state.data);
  const totalPages = useReviewsStore((state) => state.totalPages);
  const currentPage = useReviewsStore((state) => state.currentPage);
  const sortByDate = useReviewsStore((state) => state.sortByDate);
  const setSortByDate = useReviewsStore((state) => state.setSortByDate);
  const fetchDataByDate = useReviewsStore((state) => state.fetchDataByDate);
  const fetchDataByLikes = useReviewsStore((state) => state.fetchDataByLikes);
  const fetchZoneDataByDate = useReviewsStore(
    (state) => state.fetchZoneDataByDate,
  );
  const fetchZoneDataByLikes = useReviewsStore(
    (state) => state.fetchZoneDataByLikes,
  );

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    fetchDataByDate(currentPage);
  }, []);

  // useEffect(() => {
  //   sortByDate ? fetchDataByDate(currentPage) : fetchDataByLikes(currentPage);
  // }, [sortByDate]);
  // console.log("reviews: ", reviews);

  // 여기부터!!!
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlSearchParams = new URLSearchParams(searchParams + "");

  // const areaParam = searchParams.get("area");
  // const zoneParam = searchParams.get("zone");
  const sortParam = searchParams.get("sort") || "created-at";
  const ascParam = searchParams.get("asc") || false;
  const pageParam = searchParams.get("page") || "1";

  useEffect(() => {
    router.push(`?sort=${sortParam}&asc=${ascParam}&page=${pageParam}`);
  }, []);
  // console.log("searchParams:", searchParams + "");

  const updateSearchParams = (key: string, value: string) => {
    urlSearchParams.set(key, value);
    return urlSearchParams + "";
  };

  return (
    <Card className="border-none">
      <div className="mb-10">
        <CardHeader>
          <CardTitle>좌석 리뷰</CardTitle>
          <CardDescription>구역별 좌석 리뷰를 확인해 보세요.</CardDescription>
        </CardHeader>
      </div>
      <ReviewEditModal
        isOpen={edit}
        onClose={() => setEdit(false)}
      />
      <CardContent>
        <ReviewContentHeader
          searchParams={searchParams}
          setEdit={setEdit}
        />
        <div className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
          {reviews?.map((review: any, i: number) => (
            <ReviewCard key={i} />
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <ReviewPagination searchParams={searchParams} />
      </CardFooter>
    </Card>
  );
};

export default ReviewTab;
