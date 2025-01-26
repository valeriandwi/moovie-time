import MovieCard from "@/components/MovieCard";
import React from "react";

const Recommendation = () => {
  return (
    <div className="flex flex-col space-y-[37px]">
      <p className="text-sm font-semibold text-white">RECOMMENDATION MOVIES</p>
      <div className="grid max-lg:grid-cols-3 grid-cols-5 gap-[25px]">
        {[...Array(5)].map((_, index) => (
          <MovieCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
