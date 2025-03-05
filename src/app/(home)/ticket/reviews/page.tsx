import ReviewTab from "@/components/elisa/ReviewTab";
import { Suspense } from "react";

const ReviewsPage = () => {
  return (
    <>
      <Suspense fallback={null}>
        <ReviewTab />
      </Suspense>
    </>
  );
};

export default ReviewsPage;
