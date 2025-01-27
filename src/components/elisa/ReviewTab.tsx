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
import {
  fetchAllReviewsData,
  fetchFilteredReviewsData,
  useReviewsStore,
} from "@/store/ReviewsStore";
import ReviewPagination from "./ReviewPagination";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

const ReviewTab = () => {
  const [edit, setEdit] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    router.replace(`?sort=${sortParam}&asc=${ascParam}&page=${pageParam}`);
  }, []);

  const updateSearchParams = (key: string, value: string) => {
    const urlSearchParams = new URLSearchParams(searchParams + ""); // 기존 쿼리를 기준으로 업데이트

    urlSearchParams.set(key, value);
    router.push(`/ticket/reviews?${urlSearchParams}`);
    // console.log("urlSearchParams:", decodeURI(urlSearchParams + ""));
  };

  // 여기부터!!!
  const sortParam = searchParams.get("sort") || "created_at";
  const ascParam = searchParams.get("asc") || "false";
  const pageParam = searchParams.get("page") || "1";
  // const areaParam = searchParams.get("area");
  const zoneParam = searchParams.get("zone");

  const { data } = useQuery({
    queryKey: ["reviews", sortParam, ascParam, pageParam, zoneParam],
    queryFn: async () =>
      await fetchFilteredReviewsData(sortParam, ascParam, pageParam, zoneParam),
  });

  console.log("react query fetch: ", data);

  // useEffect(() => {
  //   fetchAllReviewsData(sortParam, ascParam, pageParam);
  //   console.log("function is running");
  // }, []);

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
          updateSearchParams={updateSearchParams}
          setEdit={setEdit}
        />
        <div className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
          {data?.reviews?.map((review: any, i: number) => (
            <ReviewCard
              key={i}
              review={review}
            />
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <ReviewPagination
          updateSearchParams={updateSearchParams}
          totalPages={data?.totalPages}
        />
      </CardFooter>
    </Card>
  );
};

export default ReviewTab;
