import Image from "next/image";
import React from "react";

const MovieCard = () => {
  return (
    <div className="flex flex-col w-[220px] space-y-[13px] static">
      <div className="relative">
        <p className="absolute right-0 top-3 bg-background opacity-80 text-white px-[10px] py-[5px] font-bold text-[18px]">
          0.0
        </p>
      </div>
      <Image
        src="/movie-poster.png"
        className="bg-black"
        alt="movie-poster"
        width={220}
        height={330}
      />
      <div className="flex flex-col space-y-[3px]">
        <p className="text-text-primary font-semibold text-[16px]">
          Movie Title
        </p>
        <p className="text-text-secondary text-[14px]">2021</p>
      </div>
    </div>
  );
};

export default MovieCard;
