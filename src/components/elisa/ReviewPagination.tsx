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
  searchParams: ReadonlyURLSearchParams;
}

const ReviewPagination = ({ searchParams }: ReviewPaginationProps) => {
  // const searchParams = useSearchParams();

  // 전체 페이지, 한번에 렌더링할 페이지 수, 현재 페이지
  const totalPages = useReviewsStore((state) => state.totalPages);
  const pagesPerRender = 5;
  const [renderedPages, setRenderedPages] = useState<number[]>([]);
  const currentPage = Number(searchParams.get("page")); // url 읽기

  useEffect(() => {
    // 18 => 16 ~ 20 페이지
    // (Math.floor(18 / 5) * 5 + 1) ~ (Math.floor(18 / 5) * 5 + 1) + 5 - 1 // 틀림
    // 5 => 1 ~ 5 페이지
    // 6 => 6 ~ 10 페이지
    const startPg =
      Math.floor((currentPage - 1) / pagesPerRender) * pagesPerRender + 1;
    // const endPg = Math.min(startPg + pagesPerRender - 1, totalPages);

    const newRenderedPages = Array.from(
      { length: pagesPerRender },
      (_, i) => startPg + i,
    );

    setRenderedPages(newRenderedPages);
  }, [currentPage, totalPages]);

  const updateSearchParams = (key: string, value: string) => {
    const urlSearchParams = new URLSearchParams(searchParams + "");
    urlSearchParams.set(key, value);
    return urlSearchParams + "";
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={updateSearchParams("page", currentPage - 1 + "")}
          />
        </PaginationItem>
        {/* 보여줄 페이지 범위 */}
        {renderedPages.map((page, i) => (
          <PaginationItem key={i}>
            <PaginationLink
              href={updateSearchParams("page", page + "")} // url 푸시
              isActive={page === currentPage ? true : false}
            >
              {page + ""}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* 페이지 생략 */}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        {/* 마지막 페이지 */}
        <PaginationItem>
          <PaginationLink
            href={updateSearchParams("page", totalPages + "")}
            isActive
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href={updateSearchParams("page", currentPage + 1 + "")}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ReviewPagination;
