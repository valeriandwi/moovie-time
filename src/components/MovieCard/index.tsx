import React from "react";
import dayjs from "dayjs";
import MovieImage from "../MovieImage";

interface MovieCardProps {
  rating: number;
  title: string;
  releaseDate: string;
  imageSrc: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  rating,
  title,
  releaseDate,
  imageSrc,
}) => {
  return (
    <div className="flex flex-col w-[220px] space-y-[13px] static">
      <div className="relative">
        <p className="absolute right-0 top-3 bg-background opacity-80 text-white px-[10px] py-[5px] font-bold text-[18px]">
          {rating.toFixed(1)}
        </p>
      </div>
      <MovieImage imageSrc={imageSrc} className="bg-secondary-bg h-full" />
      <div className="flex flex-col space-y-[3px]">
        <p className="text-text-primary font-semibold text-[16px]">{title}</p>
        <p className="text-text-secondary text-[14px]">
          {dayjs(releaseDate).year()}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
