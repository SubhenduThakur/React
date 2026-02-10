export interface Movie {
  id: string;
  title: string;
  ott: string;
  watched: boolean;
  rating: number | null;
  isRatingSubmitted: boolean;
  isReviewOpen: boolean;
  review: string | null;
}
