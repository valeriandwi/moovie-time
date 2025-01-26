import React from "react";
import Image from "next/image";
import DetailTitle from "@/features/Detail/Title";
import DetailInformation from "@/features/Detail/Information";

const DetailMovieInformation: React.FC = ({}) => {
  return (
    <div
      className="relative mt-[-66px] h-[530px] w-full bg-top bg-cover bg-fixed flex flex-col justify-end before:opacity-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://image.tmdb.org/t/p/original/oHPoF0Gzu8xwK4CtdXDaWdcuZxZ.jpg)",
      }}
    >
      <Image
        src="/movie-poster.png"
        className="bg-black ml-[124px] mb-[-114px] z-[99]"
        alt="movie-poster"
        width={220}
        height={330}
      />
      <DetailTitle year="2022" title="Wonder Woman" genres="Fantasy" />
      <DetailInformation
        rating="7.0"
        user_score="75%"
        status="Released"
        language="English"
        budget="$150,000,000"
        production="Warner Bros."
      />
    </div>
  );
};

export default DetailMovieInformation;
