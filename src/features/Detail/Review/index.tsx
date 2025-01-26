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
      <div className="flex flex-row space-x-[34px]">
        {reviews?.map((value, index) => (
          <ReviewCard record={value} key={value.id} />
        ))}
      </div>
    </div>
  );
};

export default Review;
