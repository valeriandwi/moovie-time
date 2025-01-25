import StarIcon from "@/assets/StarIcon";
import Image from "next/image";
import React from "react";

interface SliderContentProps {
  imageSrc: string;
  rating: string;
  title: string;
  yearRelease: string;
  genre: string;
  description: string;
}

const SliderContent: React.FC<SliderContentProps> = ({
  imageSrc,
  rating,
  title,
  yearRelease,
  genre,
  description,
}) => {
  return (
    <div className="pr-[17px] w-[541px] h-[364px]">
      <div className="text-white flex flex-row h-full items-center">
        <Image
          src={imageSrc}
          alt="movie-poster"
          height={364}
          width={243}
          className="bg-secondary-bg h-full"
        />
        <div className="bg-black h-[324px] w-[300px] text-white pl-[26px] pr-[21px] py-[26px] flex flex-col space-y-[11px]">
          <div>
            <div className="flex flex-row space-x-[5px] items-center">
              <StarIcon />
              <p className="text-[18px] font-bold">{rating ?? 0.0}</p>
            </div>
            <p className="text-[28px] font-medium text-nowrap">{title}</p>
          </div>
          <div className="text-[16px] flex flex-row space-x-2 items-center">
            <p>{yearRelease}</p>{" "}
            <div className="w-[6px] h-[6px] bg-gray rounded-full" />
            <p>{genre}</p>
          </div>
          <p className="text-xs">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SliderContent;
