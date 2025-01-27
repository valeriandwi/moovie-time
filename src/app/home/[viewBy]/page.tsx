import BaseBackgroundWrapper from "@/components/BaseBackgroundWrapper";
import Title from "@/components/Title";
import { viewByParams } from "@/constants/constants";
import FilterBy from "@/features/Home/Filter";
import MovieList from "@/features/Home/MovieList";
import NowPlaying from "@/features/Home/NowPlaying";
import { getAllMovie, getNowPlayingMovie } from "@/services/movies";
import React from "react";

const HomePage = async ({
  params,
}: {
  params: Promise<{ viewBy: string }>;
}) => {
  const viewBy = (await params).viewBy;

  const { response: movieListData } = await getAllMovie({
    page: "1",
    sort_by: viewByParams[viewBy as keyof typeof viewByParams],
  });

  const { response: nowPlayingData } = await getNowPlayingMovie({ page: "1" });

  return (
    <>
      <NowPlaying
        nowPlayingData={nowPlayingData?.results?.slice(0, 10) || []}
      />
      <BaseBackgroundWrapper>
        <div className="px-[120px] pt-[90px] pb-[115px]">
          <div className="flex justify-between items-center mb-[43px]">
            <Title title="Discover Movies" />
            <FilterBy viewBy={viewBy} />
          </div>
          <MovieList movieList={movieListData?.results || []} />
        </div>
      </BaseBackgroundWrapper>
    </>
  );
};

export default HomePage;
