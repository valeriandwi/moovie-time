import { movieGenres } from "@/constants/constants";

export const convertRating = (rating?: number) =>
  rating ? rating.toFixed(1) : "0.0";

export const convertGenres = (genres?: number[] | string[]) => {
  if (!genres) return "";
  return genres?.map((genre) => movieGenres?.[genre] || genre)?.join(", ");
};
