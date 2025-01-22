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
import { useReviewsStore } from "@/store/SupabaseStore";
import ReviewPagination from "./ReviewPagination";

const ReviewTab = () => {
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
        <ReviewContentHeader setEdit={setEdit} />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
          {reviews?.map((review: any, i: number) => (
            <ReviewCard key={i} />
          ))}
          <ReviewPagination />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {/* <ReviewTableFooter /> */}
      </CardFooter>
    </Card>
  );
};

export default ReviewTab;
