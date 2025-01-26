import StarIcon from "@/assets/StarIcon";
import { Avatar } from "antd";
import React from "react";

const ReviewCard = () => {
  return (
    <div className="rounded-[14px] bg-card px-[24px] pt-[23px] pb-[21px] w-full">
      <div className="flex justify-between mb-[25px]">
        <div className="flex flex-row space-x-[18px] items-center">
          <Avatar className="!h-[48px] !w-[48px]" />
          <div className="flex flex-col space-y-[3px]">
            <p className="text-sm font-bold text-background">USER</p>
            <p className="text-xs text-light-gray">December 18, 2020</p>
          </div>
        </div>
        <div className="pl-[6px] pr-[16px] pt-[5px] pb-[3px] bg-rating-card rounded-[7px] flex flex-row space-x-[6px]">
          <StarIcon width="17" height="17" className="mt-[6px]" />
          <p className="text-title font-semibold">0.0</p>
        </div>
      </div>
      <p className="italic text-[13px] leading-[150%]">
        If you enjoy reading my Spoiler-Free reviews, please follow my blog @
        https://www.msbreviews.com The superhero genre has been growing
        exponentially during the last decade, so it's bizarre to go through an
        entire year with only Birds of Prey and The New Mutants instead of
        literally dozens of films from both Marvel and DC. Thankfully, Warner
        Bros. decided to release Wonder Woman 1984 before the year's end, but
        not without a catch. Most people will only have the possibility of
        watching one of the few blockbusters of 2020 through HBO Max, a
        streaming service only
      </p>
    </div>
  );
};

export default ReviewCard;
