import MovieCard from "@/components/MovieCard";
import { MovieData } from "@/services/type";
import React from "react";

interface MovieListProps {
  movieList: MovieData[];
}

const MovieList: React.FC<MovieListProps> = ({ movieList }) => {
  return (
    <div className="grid max-lg:grid-cols-3 grid-cols-5 gap-[25px]">
      {movieList?.map(
        ({ id, vote_average, title, release_date, poster_path }) => (
          <MovieCard
            key={id}
            rating={vote_average}
            title={title}
            releaseDate={release_date}
            imageSrc={poster_path}
          />
        )
      )}
    </div>
  );
};

export default MovieList;
