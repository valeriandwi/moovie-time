export type TParams = Record<string, string>;

export type TResponse<T> = {
  page: number;
  results: T;
};

export type TMovieByPopularityResponse = TResponse<MovieData[]>;

export type MovieData = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: string[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TUpcomingMovieResponse = TResponse<MovieData[]>;
