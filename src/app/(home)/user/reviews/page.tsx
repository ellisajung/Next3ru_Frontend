"use client";

import DatePickerWithRange from "@/components/elisa/DateRangePicker";
import {
  getEnergyLabels,
  getDistanceLabels,
  getViewLabels,
  RATING_LABELS,
} from "@/components/elisa/ReviewEditModal";
import { Button } from "@/components/shadcn-ui/button";
import { Separator } from "@/components/shadcn-ui/separator";
import { Rating } from "@mui/material";
import React from "react";

const MyReviewsPage = () => {
  return (
    <div className="h-full flex flex-col space-y-6">
      <div>
        <h3 className="text-lg font-medium">내 리뷰</h3>
        <p className="text-sm text-muted-foreground">
          내가 작성한 리뷰를 관리하는 페이지입니다. 리뷰를 수정 또는 삭제할 수
          있습니다.
        </p>
      </div>
      <div>
        <Separator className="mb-10" />
      </div>
      {/* 작성일 필터 필드 */}
      <div className="flex gap-4">
        <div className="flex flex-col justify-center">
          <div className="grow h-5 rounded-xl border flex justify-center items-center space-x-2 px-2 py-2 text-sm">
            <Button
              className="hover:bg-transparent hover:underline"
              variant="ghost"
            >
              오늘
            </Button>
            <Separator orientation="vertical" />
            <Button
              className="hover:bg-transparent hover:underline"
              variant="ghost"
            >
              1개월
            </Button>
            <Separator orientation="vertical" />
            <Button
              className="hover:bg-transparent hover:underline"
              variant="ghost"
            >
              3개월
            </Button>
            <Separator orientation="vertical" />
            <Button
              className="hover:bg-transparent hover:underline"
              variant="ghost"
            >
              6개월
            </Button>
            <Separator orientation="vertical" />
            <Button
              className="hover:bg-transparent hover:underline"
              variant="ghost"
            >
              1년
            </Button>
          </div>
        </div>
        <DatePickerWithRange />
        <Button
          className="rounded-xl"
          variant="secondary"
        >
          조회
        </Button>
      </div>
      <div>
        {/* 리뷰 필드 */}
        <Separator className="mt-8 mb-3" />
        <div className="grid grid-cols-5 gap-3">
          <div className="col-span-3 grid gap-3">
            <div className="flex gap-8 text-muted-foreground">
              <div className="flex gap-3">
                <div className="">
                  <p>좌석</p>
                  <p>작성일</p>
                </div>
                <div>
                  <p>지니존 201</p>
                  <p>2025.01.25</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex flex-col justify-around">
                  <p>거리</p>
                  <p>시야</p>
                  <p>응원열기</p>
                </div>
                <div className="flex gap-2">
                  <div className="flex flex-col justify-around">
                    <Rating
                      name="read-only"
                      value={3}
                      size="small"
                      getLabelText={getDistanceLabels}
                      readOnly
                    />
                    <Rating
                      name="read-only"
                      value={3}
                      size="small"
                      getLabelText={getViewLabels}
                      readOnly
                    />
                    <Rating
                      name="read-only"
                      value={3}
                      size="small"
                      getLabelText={getEnergyLabels}
                      readOnly
                    />
                  </div>
                  <div className="flex gap-1">
                    <div className="flex flex-col justify-around">
                      <p>(3점)</p>
                      <p>(3점)</p>
                      <p>(3점)</p>
                    </div>
                    <div className="flex flex-col justify-around">
                      {3 !== null && (
                        <p className="text-md">
                          {RATING_LABELS.distance[3 - 1]}
                        </p>
                      )}
                      {3 !== null && (
                        <p className="text-md">{RATING_LABELS.view[3 - 1]}</p>
                      )}
                      {3 !== null && (
                        <p className="text-md">{RATING_LABELS.energy[3 - 1]}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Separator className="mb-0 h-[1px]" />
            {/* 리뷰 콘텐츠  */}
            <div>
              <p>
                리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용
                리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용
                리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용
                리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용
                리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용
              </p>
            </div>
          </div>
          <div className="col-span-1 bg-slate-400 relative inline-block">
            {/* <img src="image.png" alt="Example Image" class="block w-24 h-auto"> */}
            <span className="absolute bottom-1 right-1 bg-black bg-opacity-65 text-white text-sm font-bold px-2 py-1 rounded">
              4
            </span>
          </div>
          <div className="col-span-1 flex flex-col items-end gap-3">
            <Button
              className="px-10 rounded-xl"
              variant="outline"
            >
              수정하기
            </Button>
            <Button className="px-10 rounded-xl">삭제하기</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviewsPage;
