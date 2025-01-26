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
import { useRouter } from "next/navigation";
// import {ReactComponent as BaseballField} from "/icons/baseball_field.svg"

const SeatInfoPage = ({ params }: { params: { tab: string } }) => {
  const router = useRouter();
  const currentTab = params.tab || "seat-info";
  // console.log(params.tab);

  return (
    <div
      // id="seat-info"
      className="h-full pt-[6%]"
    >
      <Tabs // 여기에서 설정되는 벨류 값에 따라
        value={currentTab}
        onValueChange={(value) => router.push(`${value}`)}
        className="h-full flex flex-col"
      >
        <div className="flex items-center mb-3">
          <TabsList>
            <TabsTrigger // 이 탭이 트리거 되어
              value="seat-info"
              className="pl-5 pr-6"
              // onClick={() => router.push("seat-info")} // 이렇게 하면 라이브러리가 구현해놓은 이벤트 핸들링과 충돌
            >
              {/* <div className="filter-invert-dark dark:filter-invert-dark">
                <Image
                  src="/images/elisa/baseball-field-icon.svg"
                  alt="baseball-field-icon"
                  width={20}
                  height={20}
                  className="mr-1"
                />
              </div> */}
              <Image
                src="/icons/baseball_field.svg"
                alt="baseball-field-icon"
                width={16}
                height={16}
                className="mr-1 dark:text-white"
              />
              3D 좌석안내도
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
        <TabsContent value="reviews">
          <ReviewTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SeatInfoPage;
