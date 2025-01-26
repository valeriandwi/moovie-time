export const convertRating = (rating?: number) =>
  rating ? rating.toFixed(1) : "0.0";
