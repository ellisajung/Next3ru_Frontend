"use client";

import { Card, CardContent, CardHeader } from "../shadcn-ui/card";
import { Rating } from "@mui/material";
import ImageSwiper from "./ImageSwiper";
import { ReviewRow } from "../../../database.types";
import { FaRegThumbsUp } from "react-icons/fa";
import { RiThumbUpLine } from "react-icons/ri";
import { Badge } from "../shadcn-ui/badge";

const ReviewCard = ({ review }: any) => {
  return (
    <Card className="rounded-xl">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            <b>{review.area_name}</b>
            <b>{review.zone}</b>
            <p>구역</p>
          </div>
          <Badge
            variant="secondary"
            className="flex gap-2 justify-center items-center px-3 py-2"
          >
            <RiThumbUpLine />
            <p>{review.likes}</p>
          </Badge>
        </div>
      </CardHeader>
      <div className="mb-4">
        <ImageSwiper imgUrls={review.img_urls} />
      </div>

      <CardContent>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <span className="font-semibold">@{review.username}</span>
            <span>{review.created_at.slice(0, 10).replaceAll("-", ".")}</span>
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
            <div className="flex flex-col justify-between">
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
