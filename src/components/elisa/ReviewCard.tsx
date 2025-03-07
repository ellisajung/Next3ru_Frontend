"use client";

import { Card, CardContent, CardHeader } from "../shadcn-ui/card";
import { Rating } from "@mui/material";
import ImageSwiper from "./ImageSwiper";
import { RiThumbUpLine } from "react-icons/ri";
import { Button } from "../shadcn-ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleLike } from "@/app/actions/reviews";
import { useSearchParams } from "next/navigation";

const ReviewCard = ({ review }: any) => {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();

  const sortParam = searchParams.get("sort") || "created_at";
  const ascParam = searchParams.get("asc") || "false";
  const pageParam = searchParams.get("page") || "1";
  const areaParam = searchParams.get("area") || "";
  const zoneParam = searchParams.get("zone") || "";

  const mutation = useMutation({
    mutationFn: toggleLike,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["reviews", { sortParam, ascParam, pageParam, zoneParam }],
      });
    },
  });

  return (
    <Card className="rounded-xl text-sm flex flex-col">
      <CardHeader className="py-2">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <b>
              {review.area_name} {review.zone}
            </b>
            <p className="max-md:hidden">구역</p>
          </div>
          <Button
            variant="secondary"
            className="rounded-3xl flex gap-2 justify-center items-center px-4 text-sm"
            onClick={() => {
              mutation.mutate({
                reviewId: review.review_id,
                newLikes: review.likes + 1,
              });
            }}
          >
            <RiThumbUpLine
              strokeWidth="1"
              aria-label="좋아요"
            />
            <p>{review.likes}</p>
          </Button>
        </div>
      </CardHeader>
      <div className="flex flex-col gap-2 h-full justify-between">
        <div className="h-full">
          <ImageSwiper imgUrls={review.img_urls} />
        </div>
        <CardContent className="flex flex-col gap-3">
          <div className="flex justify-between">
            <span className="font-semibold">@{review.username}</span>
            <span className="">
              작성일 {review.created_at.slice(0, 10).replaceAll("-", ".")}
            </span>
          </div>
          <div className="h-20 overflow-y-auto p-1">{review.content}</div>
          <div className="flex justify-between">
            <div className="flex flex-col justify-between">
              <span className="font-semibold">거리</span>
              <span className="font-semibold">시야</span>
              <span className="font-semibold">응원열기</span>
            </div>
            <div className="flex flex-col justify-around">
              <Rating
                name="read-only"
                value={review.rates.distance}
                size="small"
                readOnly
              />
              <Rating
                name="read-only"
                value={review.rates.view}
                size="small"
                readOnly
              />
              <Rating
                name="read-only"
                value={review.rates.energy}
                size="small"
                readOnly
              />
            </div>
            <div className="flex flex-col justify-between">
              <span>(3점) 좋아요</span>
              <span>(3점) 좋아요</span>
              <span>(3점) 좋아요</span>
            </div>
          </div>
          {/* 콘텐츠 영역 */}
        </CardContent>
      </div>
    </Card>
  );
};

export default ReviewCard;
