"use client";

import Link from "next/link";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/shadcn-ui/pagination";
import { useReviewsStore } from "@/store/ReviewsStore";
import { useEffect, useState } from "react";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";

interface ReviewPaginationProps {
  updateSearchParams: (key: string, value: string) => void;
  totalPages: number | undefined;
}

const ReviewPagination = ({
  updateSearchParams,
  totalPages,
}: ReviewPaginationProps) => {
  // const searchParams = useSearchParams();

  // 전체 페이지, 한번에 렌더링할 페이지 수, 현재 페이지
  const pagesPerRender = 5;
  const [renderedPages, setRenderedPages] = useState<number[]>([]);
  const currentPage = Number(useSearchParams().get("page")); // url 읽기

  const startPg =
    Math.floor((currentPage - 1) / pagesPerRender) * pagesPerRender + 1;
  const endPg = Math.min(startPg + pagesPerRender - 1, totalPages || 1);

  useEffect(() => {
    // 18 => 16 ~ 20 페이지
    // (Math.floor(18 / 5) * 5 + 1) ~ (Math.floor(18 / 5) * 5 + 1) + 5 - 1 // 틀림
    // 5 => 1 ~ 5 페이지
    // 6 => 6 ~ 10 페이지

    const newRenderedPages = Array.from(
      { length: endPg - startPg + 1 },
      (_, i) => startPg + i,
    );

    setRenderedPages(newRenderedPages);
  }, [currentPage, totalPages]);

  // const updateSearchParams = (key: string, value: string) => {
  //   const urlSearchParams = new URLSearchParams(searchParams + "");
  //   urlSearchParams.set(key, value);
  //   return urlSearchParams + "";
  // };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() =>
              updateSearchParams("page", Math.max(currentPage - 1, 1) + "")
            }
          />
        </PaginationItem>
        {/* 보여줄 페이지 범위 */}
        {renderedPages.map((page, i) => (
          <PaginationItem key={i}>
            <PaginationLink
              onClick={() => updateSearchParams("page", page + "")}
              isActive={page === currentPage ? true : false}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        {endPg !== totalPages && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                onClick={() => updateSearchParams("page", totalPages + "")}
                isActive={totalPages === currentPage ? true : false}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem></PaginationItem>
          </>
        )}
        <PaginationNext
          onClick={() =>
            updateSearchParams(
              "page",
              Math.min(currentPage + 1, totalPages || 1) + "",
            )
          }
        />
      </PaginationContent>
    </Pagination>
  );
};

export default ReviewPagination;
