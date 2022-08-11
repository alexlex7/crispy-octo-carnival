export function calculateRating(mousePosition) {
  const ratingPercent = Math.round(
    ((mousePosition / 200).toPrecision(2) * 100) / 10
  );
  const rating = (5 / 100) * (ratingPercent * 10);
  return rating;
}
