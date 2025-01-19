"use client";

import { useReviewsStore } from "@/store/SupabaseStore";
import { Card, CardContent, CardHeader } from "../shadcn-ui/card";
import { Rating } from "@mui/material";
import ImageSwiper from "./ImageSwiper";
import { useEffect } from "react";
import { type ReviewRow } from "../../../database.types";

const ReviewCard = () => {
  return (
    <Card className="rounded-xl">
      <CardHeader>
        <div className="flex justify-between">
          <span>@username</span>
          <span>작성일</span>
        </div>
      </CardHeader>
      <div className="mb-4">
        <ImageSwiper />
      </div>
      <CardContent>
        <div className="flex flex-col gap-3">
          {/* 별평점 영역 */}
          <div className="flex justify-between">
            <div className="flex flex-col justify-between">
              <span>거리</span>
              <span>시야</span>
              <span>응원열기</span>
            </div>
            <div className="flex flex-col justify-around">
              <Rating
                name="read-only"
                value={3}
                size="small"
                readOnly
              />
              <Rating
                name="read-only"
                value={3}
                size="small"
                readOnly
              />
              <Rating
                name="read-only"
                value={3}
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
          <div>
            컨텐츠 영역 컨텐츠 영역 컨텐츠 영역 컨텐츠 영역 컨텐츠 영역 컨텐츠
            영역 컨텐츠 영역 컨텐츠 영역 컨텐츠 영역 컨텐츠 영역 컨텐츠 영역
            컨텐츠 영역 컨텐츠 영역 컨텐츠 영역 컨텐츠 영역
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
