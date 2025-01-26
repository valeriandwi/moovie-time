import ReviewCard from "@/components/ReviewCard";
import React from "react";

const Review = () => {
  return (
    <div className="px-[117px] pt-[43px]">
      <p className="text-red text-sm font-semibold mb-[25px]">REVIEWS</p>
      <div className="flex flex-row space-x-[34px]">
        {[...new Array(2)].map((value, index) => (
          <ReviewCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Review;
