import DetailMovieInformation from "@/components/DetailMovieInformation";
import Overview from "@/features/Detail/Overview";
import Recommendation from "@/features/Detail/Recommendation";
import Review from "@/features/Detail/Review";
import React from "react";

const DetailPage = () => {
  return (
    <>
      <DetailMovieInformation />
      <div className="bg-white pb-[58px]">
        <div className="pl-[382px] pt-8">
          <Overview />
        </div>
        <Review />
      </div>
      <div className="bg-background bg-opacity-80 py-[50px] pl-[124px] pr-[130px]">
        <Recommendation />
      </div>
    </>
  );
};

export default DetailPage;
