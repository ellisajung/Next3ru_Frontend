"use client";

import { fetchUserData } from "@/app/actions/auth";
import {
  deleteUserReviewData,
  fetchUserReviewsData,
  updateUserReviewData,
} from "@/app/actions/review";
import DatePickerWithRange from "@/components/elisa/DateRangePicker";
import {
  getEnergyLabels,
  getDistanceLabels,
  getViewLabels,
  RATING_LABELS,
} from "@/components/elisa/ReviewEditModal";
import ReviewUpdateDialog from "@/components/elisa/ReviewUpdateDialog";
import { Button } from "@/components/shadcn-ui/button";
import { Separator } from "@/components/shadcn-ui/separator";
import { Rating } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const MyReviewsPage = () => {
  const queryClient = useQueryClient();

  const { data: user, error: userError } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUserData,
  });

  const userId = user?.id ?? null;

  const { data, error } = useQuery({
    queryKey: ["reviews", userId],
    queryFn: ({ queryKey }) => fetchUserReviewsData(queryKey[1] as string),
    enabled: !!userId, // userId가 있을 때만 실행
  });

  // console.log("user id: ", userId);
  // console.log("user review: ", data?.reviews);

  // const { data, error } = useQuery({
  //   queryKey: ["reviews", user],
  //   queryFn: async (userId) => await fetchUserReviewsData(userId),
  // });

  // useEffect(() => {
  //   if (!user) {
  //     fetchUserReviewsData(user?.id);
  //   }
  // }, [user]);

  const mutation = useMutation({
    mutationFn: deleteUserReviewData,
    onSuccess: () => {
      // console.log("successfully deleted!");
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
    },
  });

  return (
    <div className="h-full flex flex-col space-y-6">
      <div>
        <h3 className="text-lg font-medium">내 리뷰</h3>
        <p className="text-sm text-muted-foreground">
          내가 작성한 리뷰를 관리하는 페이지입니다. 리뷰를 수정 또는 삭제할 수
          있습니다.
        </p>
      </div>
      <div>
        <Separator className="mb-10" />
      </div>
      {/* 작성일 필터 필드 */}
      <div className="flex gap-4">
        <div className="flex flex-col justify-center">
          <div className="grow h-5 rounded-xl border flex justify-center items-center space-x-2 px-2 py-2 text-sm">
            <Button
              className="hover:bg-transparent hover:underline"
              variant="ghost"
            >
              오늘
            </Button>
            <Separator orientation="vertical" />
            <Button
              className="hover:bg-transparent hover:underline"
              variant="ghost"
            >
              1개월
            </Button>
            <Separator orientation="vertical" />
            <Button
              className="hover:bg-transparent hover:underline"
              variant="ghost"
            >
              3개월
            </Button>
            <Separator orientation="vertical" />
            <Button
              className="hover:bg-transparent hover:underline"
              variant="ghost"
            >
              6개월
            </Button>
            <Separator orientation="vertical" />
            <Button
              className="hover:bg-transparent hover:underline"
              variant="ghost"
            >
              1년
            </Button>
          </div>
        </div>
        <DatePickerWithRange />
        <Button
          className="rounded-xl"
          variant="secondary"
        >
          조회
        </Button>
      </div>
      {/* 리뷰 필드 */}
      <div>
        {data?.reviews.map((review, i) => (
          <div key={i}>
            <Separator className="mt-8 mb-3" />
            <div className="grid grid-cols-5 gap-3">
              <div className="col-span-3 grid gap-3">
                <div className="flex gap-8 text-muted-foreground">
                  <div className="flex gap-3">
                    <div className="">
                      <p>좌석</p>
                      <p>작성일</p>
                    </div>
                    <div>
                      <p>
                        {review.area_name} {review.zone}
                      </p>
                      <p>
                        {review.created_at.slice(0, 10).replaceAll("-", ".")}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex flex-col justify-around">
                      <p>거리</p>
                      <p>시야</p>
                      <p>응원열기</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex flex-col justify-around">
                        <Rating
                          name="read-only"
                          value={review.rates["distance"]}
                          size="small"
                          getLabelText={getDistanceLabels}
                          readOnly
                        />
                        <Rating
                          name="read-only"
                          value={review.rates["view"]}
                          size="small"
                          getLabelText={getViewLabels}
                          readOnly
                        />
                        <Rating
                          name="read-only"
                          value={review.rates["energy"]}
                          size="small"
                          getLabelText={getEnergyLabels}
                          readOnly
                        />
                      </div>
                      <div className="flex gap-1">
                        <div className="flex flex-col justify-around">
                          <p>({review.rates["distance"]}점)</p>
                          <p>({review.rates["view"]}점)</p>
                          <p>({review.rates["energy"]}점)</p>
                        </div>
                        <div className="flex flex-col justify-around">
                          {review.rates["distance"] !== null && (
                            <p className="text-md">
                              {
                                RATING_LABELS.distance[
                                  review.rates["distance"] - 1
                                ]
                              }
                            </p>
                          )}
                          {review.rates["view"] !== null && (
                            <p className="text-md">
                              {RATING_LABELS.view[review.rates["view"] - 1]}
                            </p>
                          )}
                          {review.rates["energy"] !== null && (
                            <p className="text-md">
                              {RATING_LABELS.energy[review.rates["energy"] - 1]}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Separator className="mb-0 h-[1px]" />
                {/* 리뷰 콘텐츠  */}
                <div>
                  <p>{review.content}</p>
                </div>
              </div>
              <div className="col-span-1 bg-slate-400 relative inline-block overflow-hidden rounded-lg">
                {/* <img src="image.png" alt="Example Image" class="block w-24 h-auto"> */}
                <img
                  className="block object-fill w-full h-full"
                  src={review.img_urls[0]}
                  alt="Thumbnail Image"
                />
                <span className="absolute bottom-1 right-1 bg-black bg-opacity-65 text-white text-sm font-bold px-2 py-1 rounded-lg">
                  {review.img_urls.length}
                </span>
              </div>
              {/* mutation field */}
              <div className="col-span-1 flex flex-col items-end gap-3">
                <ReviewUpdateDialog reviewInfo={review} />
                <Button
                  className="px-10 rounded-xl"
                  onClick={() => {
                    // console.log("review id: ", review.review_id);
                    mutation.mutate(review);
                  }}
                >
                  삭제하기
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* 페이지네이션 필드 */}
    </div>
  );
};

export default MyReviewsPage;
