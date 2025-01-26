import MovieCard from "@/components/MovieCard";
import { MovieData } from "@/services/type";
import React from "react";

interface RecommendationProps {
  datas: MovieData[];
}

const Recommendation: React.FC<RecommendationProps> = ({ datas }) => {
  return (
    <div className="bg-background bg-opacity-80 py-[50px] pl-[124px] pr-[130px]">
      <div className="flex flex-col space-y-[37px]">
        <p className="text-sm font-semibold text-white">
          RECOMMENDATION MOVIES
        </p>
        <div className="grid max-lg:grid-cols-3 grid-cols-5 gap-[25px]">
          {datas?.map((value) => (
            <MovieCard
              key={value?.id}
              imageSrc={value?.poster_path}
              rating={value?.vote_average}
              releaseDate={value?.release_date}
              title={value?.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
