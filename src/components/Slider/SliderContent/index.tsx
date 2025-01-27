import StarIcon from "@/assets/StarIcon";
import MovieImage from "@/components/MovieImage";
import { convertGenres } from "@/utils/utils";
import clsx from "clsx";
import dayjs from "dayjs";
import React from "react";

interface SliderContentProps {
  isCurrentIndex: boolean;
  imageSrc: string;
  rating: number;
  title: string;
  dateRelease: string;
  genre: number[];
  description: string;
  onClick: () => void;
}

const SliderContent: React.FC<SliderContentProps> = ({
  isCurrentIndex,
  imageSrc,
  rating,
  title,
  dateRelease,
  genre,
  description,
  onClick,
}) => {
  return (
    <div
      className={clsx(
        !isCurrentIndex && "opacity-50",
        "pr-[17px] w-[541px] h-[364px] cursor-pointer"
      )}
      onClick={onClick}
    >
      <div className="text-white flex flex-row h-full items-center">
        <MovieImage
          height={364}
          width={243}
          imageSrc={imageSrc}
          className="bg-secondary-bg h-full"
        />
        <div className="bg-black h-[324px] w-[300px] text-white pl-[26px] py-[26px] flex flex-col space-y-[11px]">
          <div>
            <div className="flex flex-row space-x-[5px] items-center">
              <StarIcon />
              <p className="text-[18px] font-bold">
                {rating?.toFixed(1) ?? 0.0}
              </p>
            </div>
            <p className="text-[28px] font-medium">{title}</p>
          </div>
          <div className="text-[16px] pr-[12px] flex flex-row space-x-2 items-center">
            <p>{dayjs(dateRelease).year()}</p>
            <div className="w-[6px] h-[6px] bg-gray rounded-full" />
            <p>{convertGenres(genre, 2)}</p>
          </div>
          <p className="text-xs leading-[18px] pr-[21px] ">
            {description.slice(0, 200)}...
          </p>
        </div>
      </div>
    </div>
  );
};

export default SliderContent;
