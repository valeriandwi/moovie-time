export type TParams = Record<string, string>;

export type TResponse<T> = {
  page: number;
  results: T;
  total_pages?: number;
  total_results?: number;
};

export type TMovieByPopularityResponse = TResponse<MovieData[]>;

export type MovieData = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
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

export type TMovieGenresResponse = {
  genres: MovieGenre[];
};

export type MovieGenre = {
  id: number;
  name: string;
};

export type TMovieDetailResponse = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TMovieReviewResponse = TResponse<TMoviewReview[]>;

export type TMoviewReview = {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string | null;
    rating: number | null;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
};

export type TMovieRecommendationResponse = TResponse<MovieData[]>;
