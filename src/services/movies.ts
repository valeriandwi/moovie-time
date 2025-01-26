import { API_URL } from "@/constants/constants";
import { fetchData } from "@/utils/fetch";
import {
  TMovieByPopularityResponse,
  TMovieDetailResponse,
  TMovieRecommendationResponse,
  TMovieReviewResponse,
  TParams,
  TUpcomingMovieResponse,
} from "./type";

export const getAllMovie = async (params?: TParams) => {
  const response = await fetchData<TMovieByPopularityResponse>({
    url: `${API_URL}/discover/movie?language=en-US`,
    params: params,
  });
  return {
    response,
  };
};

export const getNowPlayingMovie = async (params?: TParams) => {
  const response = await fetchData<TUpcomingMovieResponse>({
    url: `${API_URL}/movie/now_playing?language=en-US`,
    params: params,
  });
  return {
    response,
  };
};

export const getMovieDetail = async (id: string, params?: TParams) => {
  const response = await fetchData<TMovieDetailResponse>({
    url: `${API_URL}/movie/${id}?language=en-US`,
    params: params,
  });
  return {
    response,
  };
};

export const getMovieReviews = async (id: string, params?: TParams) => {
  const response = await fetchData<TMovieReviewResponse>({
    url: `${API_URL}/movie/${id}/reviews?language=en-US`,
    params: params,
  });
  return {
    response,
  };
};

export const getMovieRecommendations = async (id: string, params?: TParams) => {
  const response = await fetchData<TMovieRecommendationResponse>({
    url: `${API_URL}/movie/${id}/recommendations?language=en-US`,
    params: params,
  });
  return {
    response,
  };
};
