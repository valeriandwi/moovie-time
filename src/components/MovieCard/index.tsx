import React from "react";
import dayjs from "dayjs";
import MovieImage from "../MovieImage";
import StarIcon from "@/assets/StarIcon";
import { convertGenres, convertRating } from "@/utils/utils";
import AppButton from "../AppButton";
import Link from "next/link";

interface MovieCardProps {
  id: string;
  rating: number;
  title: string;
  releaseDate: string;
  genres: number[];
  imageSrc: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  rating,
  title,
  releaseDate,
  genres,
  imageSrc,
}) => {
  return (
    <div className="flex flex-col w-[220px] group cursor-pointer">
      <div className="group-hover:bg-opacity-80 transition-opacity duration-300 absolute">
        <div className="relative">
          <p className="absolute right-0 top-0 bg-background bg-opacity-80 text-white px-[10px] py-[5px] font-bold text-[18px]">
            {convertRating(rating)}
          </p>
        </div>
        <MovieImage imageSrc={imageSrc} />
      </div>
      <div className="px-8 h-[330px] flex flex-col justify-center bg-black group-hover:bg-opacity-80 relative bg-opacity-0">
        <div className="opacity-0 group-hover:opacity-100 flex flex-col space-y-[45px] items-center justify-center transition-opacity duration-300 text-white">
          <div className="flex flex-row space-x-[10px] items-center">
            <StarIcon width="32" height="32" />
            <p className="lg-[24px] font-semibold ">{convertRating(rating)}</p>
          </div>
          <p className="text-[18px] font-semibold text-center">
            {convertGenres(genres)}
          </p>
          <Link href={`/detail/${id}`}>
            <AppButton color="default" type="primary" className="!w-[107px]">
              VIEW
            </AppButton>
          </Link>
        </div>
      </div>

      <div className="flex flex-col space-y-[3px] mt-[13px]">
        <p className="text-text-primary font-semibold text-[16px]">{title}</p>
        <p className="text-text-secondary text-[14px]">
          {dayjs(releaseDate).year()}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
