import type { Movie } from "../../../types/movie";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Hide from "../../ui/Hide.tsx";

import { useState, useRef, useLayoutEffect } from "react";

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
  const ottStyles: Record<string, string> = {
    netflix: "bg-[#db0000]",
    "amazon prime": "bg-[#146eb4]",
    hoichoi: "bg-gradient-to-r from-[#ff3b3b] to-[#ff7a00]",
    jiohotstar: "bg-gradient-to-r from-[#0f5fff] to-[#7b2cff] ",
    "sony liv": "bg-[#9231CE]",
    others: "bg-gray-500",
  };

  const ottKey = movie.ott.toLowerCase();

  const [isDeleting, setIsDeleting] = useState(false);
  const [isMobileVisible, setIsMobileVisible] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const reviewRef = useRef<HTMLTextAreaElement>(null);

  useLayoutEffect(() => {
    if (reviewRef.current) {
      reviewRef.current.style.height = "auto";
      reviewRef.current.style.height = `${reviewRef.current.scrollHeight}px`;
    }
  }, [movie.review, movie.isReviewOpen]);

  const handleDelete = () => {
    setIsDeleting(true);

    setTimeout(() => {
      movieRemove(movie.id);
    }, 300);
  };

  const handleCardTap = () => {
    setIsMobileVisible(true);

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => setIsMobileVisible(false), 5000);
  };

  const getWordCount = (text: string | null) => {
    if (!text) return 0;
    return text.length;
  };

  return (
    <div className="py-8">
      <div
        onClick={handleCardTap}
        className={`group relative rounded-3xl border-3 bg-[#FBEEEE] px-4 py-8 shadow-[4px_4px_0px_#000] sm:px-10 ${isDeleting ? "delete-animation" : "add-animation"}`}
      >
        <div
          className={`font-ClashDisplay absolute -top-1 left-1/2 max-w-[90%] -translate-1/2 rounded-3xl border-2 border-black bg-[#BB00FF] px-5 py-2 text-center font-semibold whitespace-nowrap text-white shadow-[3px_3px_0px_#000]`}
        >
          {movie.title}
        </div>

        <div
          className={`font-ClashDisplay ${ottStyles[ottKey]} absolute -bottom-6 left-2 rounded-3xl border-2 border-black px-5 py-2 text-center font-semibold text-white sm:-left-10`}
        >
          {movie.ott.toUpperCase()}
        </div>

        <button
          className="delete-btn absolute -top-3 -left-3 cursor-pointer rounded-3xl px-2 py-1"
          onClick={handleDelete}
        >
          ❌
        </button>

        <div className="absolute top-1 right-2">
          <Hide isTrue={movie.isRatingSubmitted}>
            <div className="font-ClashDisplay flex flex-col font-medium">
              <span className="text-xl font-bold text-[#BB00FF]">
                {movie.rating}
              </span>
              <span className="-mt-1">Rating</span>
            </div>
          </Hide>
        </div>

        <div className="absolute right-1 bottom-2">
          <Hide
            isTrue={
              movie.watched && (!!movie.rating || movie.isRatingSubmitted)
            }
          >
            {!movie.isRatingSubmitted ? (
              <button
                onClick={() => toggleIsRatingSubmitted(movie.id)}
                className="font-ClashDisplay cursor-pointer rounded-3xl border-2 border-black bg-white px-2 py-1 font-medium"
              >
                Submit
              </button>
            ) : (
              <button
                className={`font-ClashDisplay cursor-pointer rounded-3xl border-2 border-black bg-white px-2 py-1 font-medium transition-opacity duration-300 ease-out ${
                  isMobileVisible
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100"
                }`}
                onClick={() => toggleIsReviewOpen(movie.id)}
              >
                {movie.isReviewOpen
                  ? "Submit"
                  : !movie.review
                    ? "Review"
                    : "Edit"}
              </button>
            )}
          </Hide>
        </div>

        <div className="flex items-center justify-center">
          <div>
            <Hide isTrue={!movie.watched}>
              <button
                onClick={() => toggleWatched(movie.id)}
                className="font-ClashDisplay m-2 min-w-[6.5rem] cursor-pointer rounded-3xl border-2 border-black bg-white px-5 py-2 font-medium outline-none hover:bg-[#05D332] hover:font-semibold hover:text-white hover:shadow-[3px_3px_0px_#000] hover:transition-all hover:duration-300 hover:ease-out"
              >
                Watched
              </button>
            </Hide>
          </div>
        </div>

        <div className="col-span-2 flex flex-col items-center justify-center">
          <Hide isTrue={movie.watched}>
            <div className="flex w-full flex-col items-center justify-center">
              <div className="flex gap-2">
                <Rating
                  value={movie.rating}
                  readOnly={movie.isRatingSubmitted}
                  precision={0.5}
                  sx={{
                    "& .MuiRating-icon": {
                      padding: "4px",
                      transform: "none",
                      transition: "none",
                    },
                    "& .MuiRating-iconHover": {
                      transform: "none",
                    },
                    "& .MuiRating-iconFocus": {
                      transform: "none",
                    },
                    "& .MuiRating-iconActive": {
                      transform: "none",
                    },
                    "& .MuiSvgIcon-root": {
                      filter: "none",
                    },
                  }}
                  icon={
                    <StarIcon
                      style={{
                        stroke: "black",
                        strokeWidth: 2,
                        fill: "gold",
                      }}
                    />
                  }
                  emptyIcon={
                    <StarIcon
                      style={{
                        stroke: "black",
                        strokeWidth: 2,
                        fill: "white",
                      }}
                    />
                  }
                  onChange={(_, rating) => {
                    if (rating !== null) {
                      movieRating(movie.id, rating);
                    }
                  }}
                />
              </div>

              <div className="w-full pt-3">
                <Hide isTrue={!!(movie.isReviewOpen || movie.review)}>
                  <div className="flex w-full flex-col pb-5">
                    <textarea
                      ref={reviewRef}
                      readOnly={!movie.isReviewOpen}
                      placeholder={
                        movie.isReviewOpen ? "Write a review..." : ""
                      }
                      className={`font-ClashDisplay cursor-text resize-none overflow-hidden rounded-xl p-2 text-center font-medium transition-all duration-300 ease-out outline-none ${
                        !movie.isReviewOpen
                          ? "cursor-text bg-transparent"
                          : "bg-white"
                      }`}
                      value={movie.review ?? ""}
                      onChange={(e) => controlledReview(e, movie.id)}
                      rows={1}
                    />

                    <Hide isTrue={movie.isReviewOpen}>
                      <div className="font-ClashDisplay py-2 text-right text-sm font-medium text-gray-500">
                        {getWordCount(movie.review)}/500
                      </div>
                    </Hide>
                  </div>
                </Hide>
              </div>
            </div>
          </Hide>
        </div>
      </div>
    </div>
  );
}
