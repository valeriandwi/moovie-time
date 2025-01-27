import StarIcon from "@/assets/StarIcon";
import { IMAGE_PATH_URL } from "@/constants/constants";
import { TMoviewReview } from "@/services/type";
import { convertRating } from "@/utils/utils";
import { Avatar } from "antd";
import dayjs from "dayjs";
import React from "react";

interface ReviewCardProps {
  record: TMoviewReview;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ record }) => {
  return (
    <div className="rounded-[14px] bg-card px-[24px] pt-[23px] pb-[21px] w-full">
      <div className="flex justify-between mb-[25px]">
        <div className="flex flex-row space-x-[18px] items-center">
          <Avatar
            className="!h-[48px] !w-[48px]"
            src={IMAGE_PATH_URL + record?.author_details?.avatar_path}
          />
          <div className="flex flex-col space-y-[3px]">
            <p className="text-sm font-bold text-background">
              {record?.author}
            </p>
            <p className="text-xs text-light-gray">
              {dayjs(record?.created_at).format("MMMM DD, YYYY")}
            </p>
          </div>
        </div>
        <div className="pl-[6px] pr-[16px] pt-[5px] pb-[3px] bg-rating-card rounded-[7px] flex flex-row space-x-[6px]">
          <StarIcon width="17" height="17" className="mt-[6px]" />
          <p className="text-title font-semibold">
            {convertRating(Number(record?.author_details?.rating))}
          </p>
        </div>
      </div>

      <p className="italic text-[13px] leading-[150%] whitespace-pre-line">
        {record?.content}
      </p>
    </div>
  );
};

export default ReviewCard;
