import { useQuery } from "@tanstack/react-query";
import ImageSwiper from "./ImageSwiper";
import { Rating } from "@mui/material";
import Link from "next/link";
import {
  RATING_LABELS,
  getDistanceLabels,
  getViewLabels,
  getEnergyLabels,
} from "./ReviewEditModal";
import { fetchFilteredReviewsData } from "@/app/actions/reviews";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../shadcn-ui/dialog";

type SeatInfoDialogProps = {
  areaName: string;
  zone: string;
};

const SeatInfoDialog: React.FC<SeatInfoDialogProps> = ({ areaName, zone }) => {
  const { data } = useQuery({
    queryKey: ["reviews", zone],
    queryFn: async () => fetchFilteredReviewsData("created_at", false, zone),
  });

  const imgUrls = data?.reviews?.reduce(
    (acc, curr) => [...acc, ...curr.img_urls],
    [],
  );

  const getAvgRate = (key: string) => {
    const total = data?.reviews?.reduce(
      (acc, curr) => acc + curr.rates[key],
      0,
    );
    const avgRate = Math.round(total / Number(data?.count));
    return avgRate;
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>
          <p className="text-lg">
            {areaName} {zone} 구역
          </p>
        </DialogTitle>
        {/* <DialogDescription>좌석에 대한 리뷰를 작성해 주세요.</DialogDescription> */}
      </DialogHeader>
      <div className="grid md:grid-cols-2 gap-4">
        {/* 스와이퍼 필드 */}
        <div className="max-md:hidden">
          <ImageSwiper imgUrls={imgUrls} />
        </div>
        {/* 정보 필드 */}
        <div className="grid grid-rows-2 gap-8">
          <div className="flex flex-col gap-4">
            <p className="font-semibold">통합 정보</p>
            <div className="pl-4 flex flex-col gap-2">
              <div className="flex flex-col">
                <p className="font-semibold">평균 가격</p>
                <p className="pl-4">&bull; 90000 원</p>
              </div>
              <div>
                <p className="font-semibold">특징</p>
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
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <p className="font-semibold">별 평점</p>
              <Link
                href={`/ticket/reviews/?sort=created_at&asc=false&page=1&area=${areaName}&zone=${zone}`}
              >
                (리뷰 {`${data?.count}`}개 &rarr;)
              </Link>
            </div>
            <div className="flex justify-between pl-4">
              <div className="flex flex-col gap-1">
                <p className="font-semibold">거리</p>
                <p className="font-semibold">시야</p>
                <p className="font-semibold">응원열기</p>
              </div>
              <div className="flex flex-col justify-around">
                <Rating
                  name="read-only"
                  value={getAvgRate("distance")}
                  size="small"
                  getLabelText={getDistanceLabels}
                  readOnly
                />

                <Rating
                  name="read-only"
                  value={getAvgRate("view")}
                  size="small"
                  getLabelText={getViewLabels}
                  readOnly
                />

                <Rating
                  name="read-only"
                  value={getAvgRate("energy")}
                  size="small"
                  getLabelText={getEnergyLabels}
                  readOnly
                />
              </div>
              <div className="flex gap-3">
                <div className="flex flex-col gap-1">
                  <p>{getAvgRate("distance")} 점</p>
                  <p>{getAvgRate("view")} 점</p>
                  <p>{getAvgRate("energy")} 점</p>
                </div>
                <div className="flex flex-col gap-1">
                  {getAvgRate("distance") !== null && (
                    <p className="text-md">
                      {RATING_LABELS.distance[getAvgRate("distance") - 1]}
                    </p>
                  )}
                  {getAvgRate("view") !== null && (
                    <p className="text-md">
                      {RATING_LABELS.view[getAvgRate("view") - 1]}
                    </p>
                  )}
                  {getAvgRate("energy") !== null && (
                    <p className="text-md">
                      {RATING_LABELS.energy[getAvgRate("energy") - 1]}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DialogFooter></DialogFooter>
    </>
  );
};

export default SeatInfoDialog;
