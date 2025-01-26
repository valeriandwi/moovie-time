import { API_URL } from "@/constants/constants";
import { fetchData } from "@/utils/fetch";
import {
  TMovieByPopularityResponse,
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
    url: `${API_URL}/movie/now_playing?language=en-US&page=1`,
    params: params,
  });
  return {
    response,
  };
};
