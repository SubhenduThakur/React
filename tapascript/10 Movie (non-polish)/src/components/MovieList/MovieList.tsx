import MovieItem from "./MovieItem/MovieItem";
import type { Movie } from "../../types/movie";

interface MovieListProps {
  movies: Movie[];
  toggleWatched: (id: string) => void;
  movieRemove: (id: string) => void;
  movieRating: (id: string, rating: number | null) => void;
  toggleIsRatingSubmitted: (id: string) => void;
  toggleIsReviewOpen: (id: string) => void;
  controlledReview: (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    id: string,
  ) => void;
}
export default function MovieList({
  movies,
  toggleWatched,
  movieRemove,
  movieRating,
  toggleIsRatingSubmitted,
  toggleIsReviewOpen,
  controlledReview,
}: MovieListProps) {
  if (movies.length === 0) {
    return (
      <p className="text-center text-gray-400">
        No movies in your watchlist, add some!
      </p>
    );
  }

  return (
    <ul>
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          toggleWatched={toggleWatched}
          movieRemove={movieRemove}
          movieRating={movieRating}
          toggleIsRatingSubmitted={toggleIsRatingSubmitted}
          toggleIsReviewOpen={toggleIsReviewOpen}
          controlledReview={controlledReview}
        />
      ))}
    </ul>
  );
}
