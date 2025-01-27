import Title from "@/components/Title";
import Filter from "@/features/Movies/Filter";
import LoadMoreButton from "@/features/Movies/LoadMoreButton";
import MovieList from "@/features/Movies/MovieList";
import { getAllMovie } from "@/services/movies";
import React from "react";

const MoviesPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const apiParams = {
    page: searchParams?.page ?? "1",
    sort_by: searchParams?.["sort_by"] ?? "popularity.desc",
    ...(searchParams?.["with_genres"]
      ? {
          with_genres: searchParams?.["with_genres"],
        }
      : {}),
  };

  const { response: movieListData } = await getAllMovie(apiParams);

  return (
    <>
      <Title title="Movies" className="mb-[59px]" />
      <div className="flex flex-row space-x-[30px]">
        <Filter apiParams={apiParams} />
        <MovieList
          pageNumber={apiParams?.page}
          datas={movieListData?.results || []}
        />
      </div>
      <LoadMoreButton apiParams={apiParams} />
    </>
  );
};

export default MoviesPage;
