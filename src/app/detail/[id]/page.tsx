import DetailMovieInformation from "@/components/DetailMovieInformation";
import Overview from "@/features/Detail/Overview";
import Recommendation from "@/features/Detail/Recommendation";
import Review from "@/features/Detail/Review";
import {
  getMovieDetail,
  getMovieRecommendations,
  getMovieReviews,
} from "@/services/movies";
import { convertRating } from "@/utils/utils";
import dayjs from "dayjs";
import React from "react";

const DetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const { response: movieDetailData } = await getMovieDetail(id);
  const { response: movieReviewData } = await getMovieReviews(id);
  const { response: movieRecommendationData } = await getMovieRecommendations(
    id,
    { page: "1" }
  );

  return (
    <>
      <DetailMovieInformation
        backdropImageSrc={movieDetailData?.backdrop_path}
        posterImageSrc={movieDetailData?.poster_path}
        year={dayjs(movieDetailData?.release_date).year().toString()}
        title={movieDetailData?.title}
        genres={movieDetailData?.genres?.map(({ name }) => name)}
        rating={convertRating(movieDetailData?.vote_average)}
        userScore={movieDetailData?.vote_count}
        status={movieDetailData?.status}
        language={movieDetailData?.original_language}
        budget={movieDetailData?.budget}
        production={movieDetailData?.production_companies?.[0]?.name}
      />
      <div className="bg-white pb-[58px]">
        <Overview overview={movieDetailData?.overview} />
        <Review reviews={movieReviewData?.results || []} />
      </div>
      <Recommendation datas={movieRecommendationData?.results || []} />
    </>
  );
};

export default DetailPage;
