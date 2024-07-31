import { Button } from "@/components/shadcn-ui/button";
import ViewPicSwiper from "./ViewPicSwiper";
import { Card } from "../shadcn-ui/card";
import "../../styles/elisa.css";
import { TClickedMeshInfo } from "./Stadium";

type SeatInfoModalProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  info: TClickedMeshInfo | undefined;
};

const SeatInfoModal: React.FC<SeatInfoModalProps> = ({
  setShowModal,
  info,
}) => {
  return (
    <>
      {console.log("modal loaded!") as any}
      <div onClick={() => setShowModal(false)}></div>
      <div
        id="modal"
        className="absolute w-96 top-[30%] left-[50%] translate-x-[-50%] z-50"
      >
        <Card>
          <div>
            <p>
              {info?.area_name}의 {info?.zone}번 구역입니다.
            </p>
            {/* 사진뷰 구역 시작 */}
            <ViewPicSwiper zone={`z-${info?.zone}`} />
            {/* 사진뷰 구역 끝 */}
            {/* 평점 구역 시작 */}
            {/* 평점 구역 끝 */}
            {/* 리뷰 리스트 구역 시작 */}
            {/* 리뷰 리스트 구역 끝 */}
            <Button
              variant="secondary"
              size="icon"
              onClick={() => setShowModal(false)}
            >
              닫기
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default SeatInfoModal;
