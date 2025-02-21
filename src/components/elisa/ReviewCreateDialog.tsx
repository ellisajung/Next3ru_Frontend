import { Button } from "@/components/shadcn-ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn-ui/dialog";
import { Input } from "@/components/shadcn-ui/input";
import { Label } from "@/components/shadcn-ui/label";
import { FaPen } from "react-icons/fa6";
import SeatAreaCombobox from "./SeatAreaCombobox";
import SeatRating from "./SeatRating";
import { Textarea } from "../shadcn-ui/textarea";
import MultiFileDropzoneUsage from "./MultiFileDropzoneUsage";
import FileUploadField from "./FileUploadField";
import { useState } from "react";
import { useCreateReviewStore } from "@/store/ReviewStore";
import { useQuery } from "@tanstack/react-query";
import { fetchUserData } from "@/app/actions/auth";
import { createReviewData } from "@/app/actions/reviews";
import { useToast } from "@/hooks/use-toast";

export const RATING_ITEMS = [
  {
    value: "distance",
    label: "거리",
    labelText: {
      1: "너무 멀어요",
      2: "조금 멀어요",
      3: "적당한 거리예요",
      4: "꽤 가까워요",
      5: "바로 앞이에요",
    },
  },
  {
    value: "view",
    label: "시야",
    labelText: {
      1: "거의 안보여요",
      2: "조금 답답해요",
      3: "무난한 시야예요",
      4: "뷰가 좋아요",
      5: "완벽한 뷰예요",
    },
  },
  {
    value: "energy",
    label: "응원 열기",
    labelText: {
      1: "응원이 거의 들리지 않아요",
      2: "좀 조용해요",
      3: "적당히 즐거워요",
      4: "흥이 넘쳐요",
      5: "열정이 폭발해요",
    },
  },
];

const ReviewCreateDialog = () => {
  const { toast } = useToast();

  const [imgUpload, setImgUpload] = useState(false);

  const areaName = useCreateReviewStore((state) => state.areaName);
  const zone = useCreateReviewStore((state) => state.zone);
  const [content, setContent] = useState("");
  const [rates, setRates] = useState<{ [key: string]: number }>({
    distance: 0,
    view: 0,
    energy: 0,
  });
  const imgUrls = useCreateReviewStore((state) => state.imgUrls);

  const { data: user, error } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUserData,
  });

  const userId = user?.id;
  const username = user?.user_metadata.username;

  console.log(userId, username, areaName, zone, content, rates);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="rounded-xl"
          //   onClick={() => setEdit(true)}
        >
          <FaPen className="mr-2 size-3" />
          리뷰 쓰기
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[650px]">
        <DialogHeader>
          <DialogTitle>리뷰 작성</DialogTitle>
          <DialogDescription>
            좌석에 대한 리뷰를 작성해 주세요.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-[max-content_1fr] grid-rows-auto py-8 gap-x-16 gap-y-6">
          {/* 좌석 선택 필드 */}
          <span className="col-start-1 row-start-1">좌석 구역</span>
          <div className="col-start-2 row-start-1">
            <div className="flex gap-4">
              <SeatAreaCombobox />
            </div>
          </div>
          {/* 별점 필드 */}
          <span className="col-start-1 row-start-2">별점</span>
          <div className="col-start-2 row-start-2">
            <div className="grid grid-cols-[max-content_1fr] gap-x-6 gap-y-2">
              {RATING_ITEMS.map((item, i) => (
                <>
                  <span className="col-start-1">{item.label}</span>
                  <div className="col-start-2 flex items-center gap-2">
                    <SeatRating
                      value={rates[item.value]}
                      setValue={(newValue: number) =>
                        setRates((prev) => ({
                          ...prev,
                          [item.value]: newValue,
                        }))
                      }
                      labelText={item.labelText}
                    />
                  </div>
                </>
              ))}
            </div>
            {/* <div className="grid grid-cols-5 gap-2">
              {RATING_ITEMS.map((item, i) => (
                <>
                  <span className="col-span-1">{item.label}</span>
                  <div className="col-span-4 flex items-center gap-2">
                    <SeatRating labelText={item.labelText} />
                  </div>
                </>
              ))}
            </div> // 이전 방법 */}
          </div>
          {/* 텍스트 에리아 필드 */}
          <span className="col-start-1 row-start-3">리뷰 내용</span>
          <div className="col-start-2 row-start-3">
            <Textarea
              placeholder="내용을 입력해 주세요."
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </div>
          {/* 사진 업로드 필드 */}
          <span className="col-start-1 row-start-4">사진 업로드</span>
          <div className="col-start-2 row-start-4">
            {/* <MultiFileDropzoneUsage /> */}
            <FileUploadField setImgUpload={setImgUpload} />
          </div>
        </div>
        <DialogFooter>
          {/* <Button
            formAction={createReviewData({
              username: username,
              areaName: areaName,
              zone: zone,
              content: content,
              rates: rates,
              imgUrls: imgUrls,
            })}
          > */}
          <Button
            disabled={imgUpload}
            onClick={async () => {
              const res = await createReviewData({
                userId: userId,
                username: username,
                areaName: areaName,
                zone: zone,
                content: content,
                rates: rates,
                imgUrls: imgUrls,
              });
              if (res.success) {
                toast({
                  description: res.message,
                });
              }
            }}
          >
            저장
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewCreateDialog;
