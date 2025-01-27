import ReviewCard from "@/components/ReviewCard";
import { TMoviewReview } from "@/services/type";
import React from "react";

interface ReviewProps {
  reviews: TMoviewReview[];
}

const Review: React.FC<ReviewProps> = ({ reviews }) => {
  return (
    <div className="px-[117px] pt-[43px]">
      <p className="text-red text-sm font-semibold mb-[25px]">REVIEWS</p>
      <div className="grid grid-cols-2 gap-[34px]">
        {reviews?.map((value) => (
          <ReviewCard record={value} key={value.id} />
        ))}
      </div>
    </div>
  );
};

export default Review;
