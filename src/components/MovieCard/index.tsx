import Image from "next/image";
import React from "react";

const MovieCard = () => {
  return (
    <div className="flex flex-col space-y-[13px]">
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
