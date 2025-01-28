import { Button } from "@/components/shadcn-ui/button";
import ViewPicSwiper from "./ViewPicSwiper";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../shadcn-ui/card";
import "../../styles/elisa.css";
import { TClickedMeshInfo } from "./StadiumModel";
import { useSeatsStore } from "@/store/SeatsStore";
import { useQuery } from "@tanstack/react-query";
import {
  fetchFilteredReviewsData,
  fetchReviewsData,
} from "@/store/ReviewsStore";
import ImageSwiper from "./ImageSwiper";
import { useEffect } from "react";
import { Rating } from "@mui/material";
import Link from "next/link";
import {
  RATING_LABELS,
  getDistanceLabels,
  getViewLabels,
  getEnergyLabels,
} from "./ReviewEditModal";

type SeatInfoModalProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  info: TClickedMeshInfo | undefined;
};

const SeatInfoModal: React.FC<SeatInfoModalProps> = ({
  setShowModal,
  info,
}) => {
  const { data: reviews } = useQuery({
    queryKey: ["reviews", info?.zone],
    queryFn: async () =>
      fetchFilteredReviewsData("created_at", false, info?.zone),
  });

  const imgUrls = reviews?.reduce(
    (acc, curr) => [...acc, ...curr.img_urls],
    [],
  );
  console.log("imgUrls: ", imgUrls);

  return (
    <>
      <div
        onClick={() => setShowModal(false)}
        className="fixed inset-0 z-40"
      ></div>
      <Card className="flex flex-col rounded-xl border-none w-[810px] absolute top-[20%] left-[35%] translate-x-[-50%] z-50 bg-white bg-opacity-65 dark:bg-black dark:bg-opacity-55">
        <CardHeader>
          <CardTitle className="flex gap-2">
            <span className="text-lg">
              {info?.area_name} {info?.zone}구역
            </span>
            <span className="text-lg">좌석 정보</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="grow">
          <div className="grid grid-cols-2 h-full gap-4">
            <div>
              <ImageSwiper imgUrls={imgUrls} />
            </div>
            <div className="grid grid-rows-3 gap-4">
              <div className="row-span-2 flex flex-col gap-4">
                <span className="font-semibold">통합 정보</span>
                <div className="pl-4 flex flex-col gap-2">
                  <div className="flex flex-col">
                    <span className="font-semibold">평균 가격</span>
                    <span className="pl-4">&bull; 90000 원</span>
                  </div>
                  <div>
                    <span className="font-semibold">특징</span>
                    <ul className="pl-4">
                      <li>&bull; 지니존과 유사한 시야, 가격은 약 1만원 저렴</li>
                      <li>&bull; 초대형 방수포가 바로 앞에 위치</li>
                      <li>
                        &bull; 응원단상 위치와 가까움, 불펜 투수 훈련 관람 가능
                      </li>
                      <li>&bull; 엘리베이터 미사용, 음식 배달 불가</li>
                      <li>&bull; 테이블 제공, 음식을 먹으며 관람 가능</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row-span-1 flex flex-col gap-4">
                <div className="flex gap-2">
                  <span className="font-semibold">별 평점</span>
                  <Link href="#">(리뷰 N개 &rarr;)</Link>
                </div>
                <div className="flex justify-between pl-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold">거리</span>
                    <span className="font-semibold">시야</span>
                    <span className="font-semibold">응원열기</span>
                  </div>
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
                  <div className="flex gap-2">
                    <div className="flex flex-col gap-1">
                      <span>3</span>
                      <span>3</span>
                      <span>3</span>
                    </div>
                    <div className="flex flex-col gap-1">
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
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex w-full justify-end">
            <Button
              size="icon"
              onClick={() => setShowModal(false)}
            >
              닫기
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default SeatInfoModal;
