import type { Movie } from "../../../types/movie";
import Rating from "@mui/material/Rating";

interface MovieItemProps {
  movie: Movie;
  toggleWatched: (id: string) => void;
  movieRemove: (id: string) => void;
  movieRating: (id: string, rating: number | null) => void;
}

export default function MovieItem({
  movie,
  toggleWatched,
  movieRemove,
  movieRating,
}: MovieItemProps) {
  return (
    <div className="m-2 grid grid-cols-[1fr_1.3fr] gap-2 bg-amber-200 p-2">
      <div
        className={`${movie.watched ? "text-gray-500 line-through" : "text-black"} bg-green-200 p-2`}
      >
        <span>{movie.title}</span> <span className="font-thin italic">on</span>
        <p className="font-bold">{movie.ott}</p>
      </div>

      <div className="flex items-center justify-center gap-2 bg-gray-500 max-[420px]:flex-col max-[420px]:items-start">
        <button
          onClick={() => toggleWatched(movie.id)}
          className="min-w-[6.5rem] border border-black px-2 py-1 outline-none"
        >
          {movie.watched ? "Watched" : "Unwatched"}
        </button>
        <button
          className="border border-black px-2 py-1 outline-none"
          onClick={() => movieRemove(movie.id)}
        >
          Remove
        </button>
      </div>

      <div className="col-span-2 flex items-center justify-center border border-black">
        {movie.watched && (
          <>
            <Rating
              value={movie.rating}
              precision={0.5}
              onChange={(_, rating) => {
                if (rating !== null) {
                  movieRating(movie.id, rating);
                }
              }}
            />

            <span className="px-2 text-sm text-gray-400 italic">
              {movie.rating ? "Submit?" : ""}
            </span>
          </>
        )}
      </div>
    </div>
  );
}
