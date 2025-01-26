import { IMAGE_PATH_URL } from "@/constants/constants";
import Image from "next/image";
import React from "react";

interface MovieImageProps {
  imageSrc?: string;
  width?: number;
  height?: number;
  className?: string;
}

const MovieImage: React.FC<MovieImageProps> = ({
  imageSrc,
  width = 220,
  height = 330,
  className,
}) => {
  if (!imageSrc) {
    return (
      <div
        className={`bg-black ml-[124px] mb-[-114px] z-[99] w-[${width}px] h-[${height}px]`}
      />
    );
  }
  return (
    <Image
      src={IMAGE_PATH_URL + imageSrc}
      className={className}
      alt="movie-poster"
      width={width}
      height={330}
    />
  );
};

export default MovieImage;
