import { IMAGE_PATH_URL } from "@/constants/constants";
import clsx from "clsx";
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
        className={clsx(className, `bg-black`)}
        style={{ width: width, height: height }}
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
