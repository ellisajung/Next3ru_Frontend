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
// import ReviewTable from "./ReviewTable";
import ReviewTableHeader from "./ReviewTableHeader";
import ReviewTableFooter from "./ReviewTableFooter";
import ReviewCard from "./ReviewCard";
import { useReviewsStore } from "@/store/SupabaseStore";

const ReviewTab = () => {
  const reviews = useReviewsStore((state) => state.data);
  const fetchData = useReviewsStore((state) => state.fetchData);

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);
  console.log("reviews: ", reviews);

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
        <ReviewTableHeader setEdit={setEdit} />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
          {reviews?.map((review: any, i: number) => (
            <ReviewCard key={i} />
          ))}
          {/* <ReviewTable /> */}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {/* <ReviewTableFooter /> */}
      </CardFooter>
    </Card>
  );
};

export default ReviewTab;
