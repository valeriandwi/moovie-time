import MovieCard from "@/components/MovieCard";
import React from "react";

const MovieList = () => {
  return (
    <div className="grid max-lg:grid-cols-3 grid-cols-5 gap-[25px]">
      {[...Array(8)].map((_, index) => (
        <MovieCard key={index} />
      ))}
    </div>
  );
};

export default MovieList;
