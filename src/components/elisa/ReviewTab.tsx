"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn-ui/card";
import * as React from "react";
import ReviewContentHeader from "./ReviewContentHeader";
import ReviewCard from "./ReviewCard";
import ReviewPagination from "./ReviewPagination";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchReviewsData } from "@/app/actions/reviews";
import ReviewCreateDialog from "./ReviewCreateDialog";

const ReviewTab = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // useEffect(() => {
  //   router.replace(`?sort=${sortParam}&asc=${ascParam}&page=${pageParam}`);
  // }, []); // 라우트 진입하자마자 라우트를 변경하는 것은 안티 패턴...

  const updateSearchParams = (key: string, value: string) => {
    const urlSearchParams = new URLSearchParams(searchParams + ""); // 기존 쿼리를 기준으로 업데이트

    // 키가 존재할 경우 기존 벨류 업데이트, 안할 경우 전달값으로 키-벨류 생성
    urlSearchParams.set(key, value);

    // zone, sort, asc 파람이 변할 경우 페이지를 1로 초기화
    // (데이터 패칭 이전 시점에 이뤄져야)
    if (key === "sort" || key === "asc" || (key === "zone" && value !== "")) {
      urlSearchParams.set("page", "1");
      console.log(key, "is running!!");
    }

    router.push(`/ticket/reviews?${urlSearchParams}`);
    // console.log("urlSearchParams:", decodeURI(urlSearchParams + ""));
  };

  // const updateSearchParams = (key: string, value: string) => {
  //   const urlSearchParams = new URLSearchParams(searchParams + ""); // 기존 쿼리를 기준으로 업데이트

  //   // 키가 존재할 경우 기존 벨류 업데이트, 안할 경우 전달값으로 키-벨류 생성
  //   urlSearchParams.set(key, value);

  //   // 필터, 정렬 옵션이 변할 경우 페이지를 1로 초기화
  //   // (데이터 패칭 이전 시점에 이뤄져야)
  //   if (key === "sort" || key === "asc" || key === "zone") {
  //     urlSearchParams.set("page", "1");
  //     console.log(key, "is running!!");
  //   }

  //   router.push(`/ticket/reviews?${urlSearchParams}`);
  //   // console.log("urlSearchParams:", decodeURI(urlSearchParams + ""));
  // };

  // 여기부터!!!
  const sortParam = searchParams.get("sort") || "created_at";
  const ascParam = searchParams.get("asc") || "false";
  const pageParam = searchParams.get("page") || "1";
  const areaParam = searchParams.get("area") || "";
  const zoneParam = searchParams.get("zone") || "";

  // // 필터, 정렬 옵션이 변할 경우 페이지를 1로 초기화
  // // 데이터 패칭 이전 시점에 이뤄져야
  // useEffect(() => {
  //   const urlSearchParams = new URLSearchParams(searchParams + ""); // 기존 쿼리를 기준으로 업데이트

  //   urlSearchParams.set("page", "1"); // 키가 존재할 경우 기존 벨류 업데이트, 안할 경우 전달값으로 키-벨류 생성
  //   router.push(`/ticket/reviews?${urlSearchParams}`);
  // }, [sortParam, ascParam, zoneParam]);

  const { data, error, isLoading } = useQuery({
    queryKey: ["reviews", { sortParam, ascParam, pageParam, zoneParam }],
    queryFn: () =>
      fetchReviewsData(sortParam, ascParam, pageParam, areaParam, zoneParam),
  });

  console.log("queryKey:", [
    "reviews",
    sortParam,
    ascParam,
    pageParam,
    zoneParam,
  ]);
  // console.log("react query fetch: ", data);

  // if (error) {
  //   console.log("React Query Error:", error);
  // }
  // if (isLoading) return <div>Loading...</div>;
  // if (!data?.reviews) return <div>No reviews found</div>;

  return (
    <Card className="flex flex-col h-full border-none">
      <div className="mb-8 max-md:hidden">
        <CardHeader>
          <CardTitle>좌석 리뷰</CardTitle>
          <CardDescription>구역별 좌석 리뷰를 확인해 보세요.</CardDescription>
        </CardHeader>
      </div>
      {/* <ReviewEditModal
        isOpen={edit}
        onClose={() => setEdit(false)}
      /> */}
      <CardContent className="grow">
        <div className="flex items-center justify-between">
          <ReviewContentHeader
            updateSearchParams={updateSearchParams}
            // setEdit={setEdit}
          />
          <ReviewCreateDialog />
        </div>
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
