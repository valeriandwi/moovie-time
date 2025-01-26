"use client";
import MovieCard from "@/components/MovieCard";
import { MovieData } from "@/services/type";
import React from "react";

interface MovieListProps {
  pageNumber: string;
  datas: MovieData[];
}

const MovieList: React.FC<MovieListProps> = ({ pageNumber, datas }) => {
  const [currentDatas, setCurrentDatas] = React.useState<MovieData[]>([]);

  React.useEffect(() => {
    if (pageNumber === "1") {
      return setCurrentDatas(datas);
    }
    setCurrentDatas((prevState) => {
      const movieMap = new Map(prevState.map((movie) => [movie.id, movie]));

      datas.forEach((movie) => {
        if (!movieMap.has(movie.id)) {
          movieMap.set(movie.id, movie);
        }
      });

      return Array.from(movieMap.values());
    });
  }, [datas, pageNumber]);

  return (
    <div className="grid max-lg:grid-cols-3 grid-cols-5 gap-[25px]">
      {currentDatas?.map((value, index) => (
        <MovieCard
          genres={value.genre_ids?.join(", ")}
          key={value.id}
          id={value.id.toString()}
          imageSrc={value.poster_path}
          rating={value.vote_average}
          releaseDate={value.release_date}
          title={value.title}
        />
      ))}
    </div>
  );
};

export default MovieList;
