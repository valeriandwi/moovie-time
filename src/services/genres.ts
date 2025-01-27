import { fetchData } from "@/utils/fetch";
import { TMovieGenresResponse } from "./type";
import { API_URL } from "@/constants/constants";

export const getMovieGenres = async () => {
  const response = await fetchData<TMovieGenresResponse>({
    url: `${API_URL}/genre/movie/list`,
  });
  return {
    response,
  };
};
