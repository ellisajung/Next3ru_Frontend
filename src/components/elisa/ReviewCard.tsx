"use client";

import { Card, CardContent, CardHeader } from "../shadcn-ui/card";
import { Rating } from "@mui/material";
import ImageSwiper from "./ImageSwiper";
import { ReviewRow } from "../../../database.types";
import { FaRegThumbsUp } from "react-icons/fa";
import { RiThumbUpLine } from "react-icons/ri";
import { Badge } from "../shadcn-ui/badge";
import { RATING_ITEMS } from "./ReviewCreateDialog";
import { Button } from "../shadcn-ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleLike } from "@/app/actions/reviews";

const ReviewCard = ({ review }: any) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: toggleLike,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
    },
  });

  return (
    <Card className="rounded-xl">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <b>
              {review.area_name} {review.zone}
            </b>
            <p>구역</p>
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
            <RiThumbUpLine strokeWidth="1" />
            <p>{review.likes}</p>
          </Button>
        </div>
      </CardHeader>
      <div className="mb-4">
        <ImageSwiper imgUrls={review.img_urls} />
      </div>

      <CardContent>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <span className="font-semibold">@{review.username}</span>
            <span className="text-zinc-500">
              작성일 {review.created_at.slice(0, 10).replaceAll("-", ".")}
            </span>
          </div>
          <div>{review.content}</div>
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
            <div className="flex flex-col justify-between text-zinc-500">
              <span>(3점) 좋아요</span>
              <span>(3점) 좋아요</span>
              <span>(3점) 좋아요</span>
            </div>
          </div>
          {/* 콘텐츠 영역 */}
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
