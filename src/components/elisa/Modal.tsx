import { Button } from "@/components/shadcn-ui/button";
import ViewPicSwiper from "./ViewPicSwiper";
import { Card } from "../shadcn-ui/card";
import "../../styles/elisa.css";
interface IModalProps {
  setShowModal: (show: boolean) => void;
  info: any;
}

const Modal: React.FC<IModalProps> = ({ setShowModal, info }) => {
  return (
    <div id="modal">
      <Card>
        <div id="modal-wrap">
          <p>
            {info?.name}의 {info?.text}구역입니다.
          </p>
          {/* 사진뷰 구역 시작 */}
          <ViewPicSwiper zone="z-지니좌" />
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
  );
};

export default Modal;
