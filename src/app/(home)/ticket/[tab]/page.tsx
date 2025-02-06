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
// import {ReactComponent as BaseballField} from "/icons/baseball_field.svg"

// const initialSearchParams = {
//   sort: "created_at",
//   asc: "false",
//   page: "1",
//   area: "",
//   zone: "",
// };

const SeatInfoPage = ({ params }: { params: { tab: string } }) => {
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
    <div
      // id="seat-info"
      className="h-full pt-[6%]"
    >
      <Tabs // 여기에서 설정되는 벨류 값에 따라
        value={currentTab}
        onValueChange={(value) =>
          value === "seat-info"
            ? router.push(`${value}`)
            : router.push(
                `${value}?sort=created_at&asc=false&page=1&area=&zone=`,
              )
        }
        className="h-full flex flex-col"
      >
        <div className="flex items-center mb-3">
          <TabsList>
            <TabsTrigger // 이 탭이 트리거 되어
              value="seat-info"
              className="pl-5 pr-6"
              // onClick={() => router.push("seat-info")} // 이렇게 하면 라이브러리가 구현해놓은 이벤트 핸들링과 충돌
            >
              <svg
                className="fill-black dark:fill-white mr-2"
                fill="#000000"
                height="16px"
                width="16px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 297 297"
                xmlSpace="preserve"
              >
                <g
                  id="SVGRepo_bgCarrier"
                  strokeWidth="0"
                ></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path d="M148.5,124.18c-14.579,0-26.44,11.861-26.44,26.44c0,14.579,11.861,26.44,26.44,26.44s26.44-11.861,26.44-26.44 C174.94,136.041,163.079,124.18,148.5,124.18z M148.5,157.105c-3.576,0-6.485-2.909-6.485-6.485c0-3.576,2.909-6.485,6.485-6.485 s6.485,2.909,6.485,6.485C154.985,154.196,152.076,157.105,148.5,157.105z"></path>
                    <path d="M294.078,81.365c-80.272-80.27-210.883-80.27-291.155,0c-3.692,3.692-3.913,9.605-0.508,13.563l122.559,142.426 c-1.858,3.615-2.914,7.707-2.914,12.043c0,14.579,11.861,26.44,26.44,26.44s26.44-11.861,26.44-26.44 c0-4.336-1.056-8.428-2.914-12.043L294.585,94.928C297.991,90.97,297.77,85.057,294.078,81.365z M148.5,222.957 c-2.938,0-5.762,0.489-8.404,1.377l-70.873-82.361l79.41-48.471l79.702,47.821l-71.432,83.011 C154.262,223.446,151.438,222.957,148.5,222.957z M148.5,255.882c-3.576,0-6.485-2.909-6.485-6.485s2.909-6.485,6.485-6.485 s6.485,2.909,6.485,6.485S152.076,255.882,148.5,255.882z M241.542,125.976l-87.821-52.692c-3.183-1.91-7.164-1.895-10.331,0.04 l-87.357,53.322L23.727,89.102c70.614-63.994,178.932-63.994,249.546,0L241.542,125.976z"></path>
                  </g>
                </g>
              </svg>
              3D 좌석 안내도
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="px-11"
              // onClick={() => router.push("reviews")}
            >
              <FaListUl className="mr-2" />
              좌석 리뷰
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent // 해당하는 콘텐츠 렌더링
          value="seat-info"
          className="grow"
        >
          <StadiumTab />
        </TabsContent>
        <TabsContent
          value="reviews"
          className="grow"
        >
          <ReviewTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SeatInfoPage;
