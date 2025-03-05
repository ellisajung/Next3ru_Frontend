"use client";

import Image from "next/image";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn-ui/tabs";
import { FaListUl } from "react-icons/fa";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
// import {ReactComponent as BaseballField} from "/icons/baseball_field.svg"

// const initialSearchParams = {
//   sort: "created_at",
//   asc: "false",
//   page: "1",
//   area: "",
//   zone: "",
// };

const TicketLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  const currentPage = usePathname().split("/")[2];

  // console.log("currentPage: ", currentPage);

  // const currentTab = params.tab || "seat-info";
  // const searchParams = useSearchParams();

  // useEffect(() => {
  //   if (currentTab === "seat-info") return;

  //   const hasSearchParam = searchParams.size !== 0;
  //   const hasCondition =
  //     searchParams.size !== Object.keys(initialSearchParams).length;
  //   const haveSearchParamRequired = hasSearchParam || hasCondition;

  //   if (haveSearchParamRequired) return;

  //   const newSearchParams = {
  //     ...Object.fromEntries(searchParams.entries()),
  //     ...initialSearchParams,
  //   };

  //   router.replace(`?${new URLSearchParams(newSearchParams).toString()}`);
  // }, [currentTab]);

  return (
    <>
      {/* <div className="absolute w-full h-[84%]"> */}
      <div // 여기에서 설정되는 벨류 값에 따라
        // value={currentPage}
        // onValueChange={(value) =>
        //   value === "seat-info"
        //     ? router.push(value)
        //     : router.push(
        //         `${value}?sort=created_at&asc=false&page=1&area=&zone=`,
        //       )
        // }
        // className="absolute w-full h-full"
        className="absolute w-full h-[84%]"
      >
        <div
          className={`min-w-max w-full sticky top-[60px] z-[90] px-4 py-2 xl:p-4 ${
            currentPage === "reviews" ? "bg-white dark:bg-black" : ""
          }`}
        >
          <div
            // className="rounded-xl max-xl:flex xl:w-[500px]"
            className="rounded-xl max-xl:flex xl:w-[500px] inline-flex h-10 items-center justify-center bg-zinc-100 p-1 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
          >
            <Link
              href="/ticket/seat-info"
              // value="seat-info"
              // className="rounded-xl flex-1 gap-2"
              // className="rounded-xl flex-1 gap-2 inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-zinc-950 data-[state=active]:shadow-sm dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 dark:data-[state=active]:bg-zinc-950 dark:data-[state=active]:text-zinc-50"
              className={`rounded-xl flex-1 gap-2 inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
                ${
                  currentPage === "seat-info"
                    ? "bg-white text-zinc-950 shadow-sm dark:bg-zinc-950 dark:text-zinc-50"
                    : "text-gray-500 hover:bg-gray-100 dark:hover:bg-zinc-800"
                }
              `}
              // onClick={() => router.push("seat-info")}
            >
              <Image
                src={
                  theme === "light"
                    ? "/images/elisa/field.svg"
                    : "/images/elisa/field-white.svg"
                }
                alt="baseball field"
                width={15}
                height={15}
              />
              3D 좌석 안내도
            </Link>
            <Link
              href="/ticket/reviews?sort=created_at&asc=false&page=1&area=&zone="
              // value="reviews"
              // className="rounded-xl flex-1 gap-2"
              className={`rounded-xl flex-1 gap-2 inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
                ${
                  currentPage === "reviews"
                    ? "bg-white text-zinc-950 shadow-sm dark:bg-zinc-950 dark:text-zinc-50"
                    : "text-gray-500 hover:bg-gray-100 dark:hover:bg-zinc-800"
                }
              `}
              // onClick={() =>
              //   router.push(
              //     "reviews?sort=created_at&asc=false&page=1&area=&zone=",
              //   )
              // }
            >
              <FaListUl />
              좌석 리뷰
            </Link>
          </div>
        </div>
        {/* <TabsContent // 해당하는 콘텐츠 렌더링
          value="seat-info"
          className="absolute top-0 w-full h-full"
        >
          <StadiumTab />
        </TabsContent>
        <TabsContent
          value="reviews"
          className="w-full h-full"
        >
          <ReviewTab />
        </TabsContent> */}
        {children}
      </div>
      {/* </div> */}
    </>
  );
};

export default TicketLayout;
