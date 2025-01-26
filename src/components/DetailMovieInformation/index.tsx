import React from "react";
import DetailTitle from "@/features/Detail/Title";
import DetailInformation from "@/features/Detail/Information";
import { IMAGE_PATH_URL, languageList } from "@/constants/constants";
import MovieImage from "../MovieImage";

interface DetailMovieInformationProps {
  backdropImageSrc?: string;
  posterImageSrc?: string;
  year: string;
  title?: string;
  genres?: string[];
  rating?: string;
  userScore?: number;
  status?: string;
  language?: string;
  budget?: number;
  production?: string;
}

const DetailMovieInformation: React.FC<DetailMovieInformationProps> = ({
  backdropImageSrc,
  posterImageSrc,
  year,
  title,
  genres,
  rating,
  userScore,
  status,
  language,
  budget,
  production,
}) => {
  return (
    <div
      className="relative mt-[-66px] h-[530px] w-full bg-top bg-cover bg-fixed flex flex-col justify-end before:opacity-20"
      style={
        backdropImageSrc
          ? {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${
                IMAGE_PATH_URL + backdropImageSrc
              })`,
            }
          : {}
      }
    >
      <MovieImage
        imageSrc={posterImageSrc}
        className="ml-[124px] mb-[-114px] z-[99]"
      />
      <DetailTitle year={year} title={title} genres={genres} />
      <DetailInformation
        rating={rating}
        user_score={userScore ? `${userScore} VOTES` : undefined}
        status={status}
        language={languageList?.[language as string]}
        budget={`$${budget?.toLocaleString() ?? "-"}`}
        production={production}
      />
    </div>
  );
};

export default DetailMovieInformation;
