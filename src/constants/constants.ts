import { SORT_DROPDOWN, VIEW_BY } from "./enum";

export const API_TOKEN = process.env.TMDB_API_TOKEN;
export const API_URL = process.env.API_URL;
export const IMAGE_PATH_URL = "https://image.tmdb.org/t/p/original";

export const sortDropdownOptions = [
  {
    key: SORT_DROPDOWN.POPULAR_ASCENDING,
    label: "Popularity Ascending",
    value: "popularity.asc",
  },
  {
    key: SORT_DROPDOWN.POPULAR_DESCENDING,
    label: "Popularity Descending",
    value: "popularity.desc",
  },
  {
    key: SORT_DROPDOWN.RELEASE_DATE_ASCENDING,
    label: "Release Date Ascending",
    value: "primary_release_date.asc",
  },
  {
    key: SORT_DROPDOWN.RELEASE_DATE_DESCENDING,
    label: "Release Date Descending",
    value: "primary_release_date.desc",
  },
  {
    key: SORT_DROPDOWN.RATING_ASCENDING,
    label: "Rating Ascending",
    value: "vote_average.asc",
  },
  {
    key: SORT_DROPDOWN.RATING_DESCENDING,
    label: "Rating Descending",
    value: "vote_average.desc",
  },
];

export const genreOptions = [
  { key: "action", label: "Action", value: "action" },
  { key: "adventure", label: "Adventure", value: "adventure" },
  { key: "animation", label: "Animation", value: "animation" },
  { key: "comedy", label: "Comedy", value: "comedy" },
  { key: "crime", label: "Crime", value: "crime" },
  { key: "documentary", label: "Documentary", value: "documentary" },
  { key: "drama", label: "Drama", value: "drama" },
  { key: "family", label: "Family", value: "family" },
  { key: "fantasy", label: "Fantasy", value: "fantasy" },
  { key: "history", label: "History", value: "history" },
  { key: "horror", label: "Horror", value: "horror" },
];

export const viewByParams = {
  [VIEW_BY.POPULARITY]: "popularity.desc",
  [VIEW_BY.RELEASE_DATE]: "release_date.desc",
};
