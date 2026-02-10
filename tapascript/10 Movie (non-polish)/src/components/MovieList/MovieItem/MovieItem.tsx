import type { Movie } from "../../../types/movie";
import Rating from "@mui/material/Rating";

interface MovieItemProps {
  movie: Movie;
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

export default function MovieItem({
  movie,
  toggleWatched,
  movieRemove,
  movieRating,
  toggleIsRatingSubmitted,
  toggleIsReviewOpen,
  controlledReview,
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
          {!movie.watched ? "Watched" : "Unwatched"}
        </button>
        <button
          className="border border-black px-2 py-1 outline-none"
          onClick={() => movieRemove(movie.id)}
        >
          Remove
        </button>
      </div>

      <div className="col-span-2 flex flex-col items-center justify-center border border-black">
        {movie.watched && (
          <>
            <div className="flex gap-2">
              {!movie.isRatingSubmitted ? (
                <Rating
                  value={movie.rating}
                  precision={0.5}
                  onChange={(_, rating) => {
                    if (rating !== null) {
                      movieRating(movie.id, rating);
                    }
                  }}
                />
              ) : (
                <>
                  <Rating
                    value={movie.rating}
                    precision={0.5}
                    readOnly
                    sx={{
                      color: "deeppink",
                      "& .MuiRating-iconEmpty": {
                        color: "#f8bbd0", // light pink for empty stars
                      },
                    }}
                  />
                  <span className="font-bold">
                    {" "}
                    Rating : <span className="font-normal">{movie.rating}</span>
                  </span>
                </>
              )}

              <div>
                {!movie.isRatingSubmitted ? (
                  movie.rating && (
                    <span
                      className="cursor-pointer text-sm text-gray-400 italic"
                      onClick={() => toggleIsRatingSubmitted(movie.id)}
                    >
                      Submit?
                    </span>
                  )
                ) : (
                  <span
                    className="cursor-pointer text-sm text-gray-400 italic"
                    onClick={() => toggleIsReviewOpen(movie.id)}
                  >
                    {!movie.isReviewOpen && !movie.review ? "Review?" : ""}
                  </span>
                )}
              </div>
            </div>

            <div>
              {movie.isReviewOpen ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    toggleIsReviewOpen(movie.id);
                  }}
                  className="flex flex-col gap-2"
                >
                  <textarea
                    placeholder="Write a review..."
                    className="rounded-xl bg-gray-200 p-2"
                    value={movie.review ?? ""}
                    onChange={(e) => controlledReview(e, movie.id)}
                  />
                  <button type="submit" className="border-1">
                    Submit
                  </button>
                </form>
              ) : (
                movie.review && (
                  <textarea
                    readOnly
                    value={movie.review ?? ""}
                    className="rounded-xl bg-gray-200 p-2"
                  />
                )
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
