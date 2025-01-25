import { SORT_DROPDOWN } from "./enum";

export const sortDropdownOptions = [
  {
    key: SORT_DROPDOWN.POPULAR_ASCENDING,
    label: "Popularity Ascending",
    value: "pop_asc",
  },
  {
    key: SORT_DROPDOWN.POPULAR_DESCENDING,
    label: "Popularity Descending",
    value: "pop_desc",
  },
  {
    key: SORT_DROPDOWN.RELEASE_DATE_ASCENDING,
    label: "Release Date Ascending",
    value: "release_date_asc",
  },
  {
    key: SORT_DROPDOWN.RELEASE_DATE_DESCENDING,
    label: "Release Date Descending",
    value: "release_date_desc",
  },
  {
    key: SORT_DROPDOWN.RATING_ASCENDING,
    label: "Rating Ascending",
    value: "rating_asc",
  },
  {
    key: SORT_DROPDOWN.RATING_DESCENDING,
    label: "Rating Descending",
    value: "rating_desc",
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
