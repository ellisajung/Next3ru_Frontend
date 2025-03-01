import { useSearchParams } from "next/navigation";
import { Button } from "../shadcn-ui/button";
import { ReviewFilterProps } from "./ReviewFilter";

const ReviewSortBtn = ({ updateSearchParams }: ReviewFilterProps) => {
  const sortParam = useSearchParams().get("sort");
  return (
    <>
      <div className="flex gap-2">
        <Button
          className="rounded-full"
          variant={sortParam === "created_at" ? "outline" : "secondary"}
          onClick={() => updateSearchParams("sort", "created_at")}
        >
          작성일순
        </Button>
        <Button
          className="rounded-full"
          variant={sortParam === "likes" ? "outline" : "secondary"}
          onClick={() => updateSearchParams("sort", "likes")}
        >
          추천순
        </Button>
      </div>
    </>
  );
};

export default ReviewSortBtn;
