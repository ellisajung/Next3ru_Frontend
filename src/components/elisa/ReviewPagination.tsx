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
import { useReviewsStore } from "@/store/SupabaseStore";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const ReviewPagination = () => {
  // 전체 페이지 수, 처음 보여줄 페이지 숫자 범위
  // 클릭 시 이벤트
  // 현재 페이지 UI 및 상태 동기화
  // 해당하는 페이지 범위
  const totalPages = useReviewsStore((state) => state.totalPages);
  const currentPage = useReviewsStore((state) => state.currentPage);
  const setCurrentPage = useReviewsStore((state) => state.setCurrentPage);
  const page = Number(useSearchParams().get("page"));

  const [renderedPages, setRenderedPages] = useState<Number[]>([]);

  const pagesPerRender = 5;
  // 18 => 16 ~ 20 페이지
  // (Math.floor(18 / 5) * 5 + 1) ~ (Math.floor(18 / 5) * 5 + 1) + 5 - 1 // 틀림
  // 5 => 1 ~ 5 페이지
  // 6 => 6 ~ 10 페이지

  // Math.floor(currentPage / pagesPerRender) * pagesPerRender + 1; // 버그
  // const endPg = startPg + pagesPerRender - 1; // 버그

  useEffect(() => {
    const startPg =
      Math.floor((currentPage - 1) / pagesPerRender) * pagesPerRender + 1;
    const endPg = Math.min(startPg + pagesPerRender - 1, totalPages);

    const newRenderedPages = [];
    for (let i = startPg; i <= endPg; i++) {
      newRenderedPages.push(i);
    }
    setRenderedPages(newRenderedPages);
    // console.log("function called");
    console.log(
      "current page: ",
      currentPage,
      "start: ",
      startPg,
      "end: ",
      endPg,
    );
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`/ticket/seat-info?page=${currentPage - 1}`}
          />
        </PaginationItem>
        {/* 보여줄 페이지 범위 */}
        {renderedPages.map((page, i) => (
          <PaginationItem key={i}>
            <PaginationLink
              href={`/ticket/seat-info?page=${page}`}
              isActive
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
            href={`/ticket/seat-info?page=${totalPages}`}
            isActive
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href={`/ticket/seat-info?page=${currentPage + 1}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ReviewPagination;
