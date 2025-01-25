import AppButton from "@/components/AppButton";
import Title from "@/components/Title";
import Filter from "@/features/Movies/Filter";
import MovieList from "@/features/Movies/MovieList";
import React from "react";

const MoviesPage = () => {
  return (
    <>
      <Title title="Movies" className="mb-[59px]" />
      <div className="flex flex-row space-x-[30px]">
        <Filter />
        <MovieList />
      </div>
      <div className="flex justify-center mt-16">
        <AppButton color="default" type="primary" className="w-[151px]">
          Load More
        </AppButton>
      </div>
    </>
  );
};

export default MoviesPage;
