"use client";

import Image from "next/image";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn-ui/tabs";
import { FaListUl } from "react-icons/fa";
import ReviewTab from "@/components/elisa/ReviewTab";
import StadiumTab from "@/components/elisa/StadiumTab";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useTheme } from "next-themes";
// import {ReactComponent as BaseballField} from "/icons/baseball_field.svg"

// const initialSearchParams = {
//   sort: "created_at",
//   asc: "false",
//   page: "1",
//   area: "",
//   zone: "",
// };

const SeatInfoPage = ({ params }: { params: { tab: string } }) => {
  const { theme } = useTheme();
  const router = useRouter();
  const currentTab = params.tab || "seat-info";
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
      <Tabs // 여기에서 설정되는 벨류 값에 따라
        value={currentTab}
        onValueChange={(value) =>
          value === "seat-info"
            ? router.push(`${value}`)
            : router.push(
                `${value}?sort=created_at&asc=false&page=1&area=&zone=`,
              )
        }
        className="absolute w-full h-[90%]"
      >
        <div
          className={`min-w-max w-full sticky top-[60px] z-40 block px-4 py-2 xl:p-4 ${
            currentTab === "reviews" ? "bg-white dark:bg-black" : ""
          }`}
        >
          <TabsList className="rounded-xl max-xl:flex xl:w-[500px]">
            <TabsTrigger // 이 탭이 트리거 되어
              value="seat-info"
              className="rounded-xl flex-1 gap-2"
              // onClick={() => router.push("seat-info")} // 이렇게 하면 라이브러리가 구현해놓은 이벤트 핸들링과 충돌
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
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="rounded-xl flex-1 gap-2"
              // onClick={() => router.push("reviews")}
            >
              <FaListUl />
              좌석 리뷰
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent // 해당하는 콘텐츠 렌더링
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
        </TabsContent>
      </Tabs>
    </>
  );
};

export default SeatInfoPage;
