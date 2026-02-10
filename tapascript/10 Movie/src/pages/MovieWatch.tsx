import Header from "../components/Header/Header";
import MovieForm from "../components/MovieForm/MovieForm";
import Filter from "../components/Filter/Filter";
import MovieList from "../components/MovieList/MovieList";

import { useState } from "react";
import type { Movie } from "../types/movie";

type FilterType = "all" | "watched" | "unwatched";

export default function MovieWatch() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filter, setFilter] = useState<FilterType>("all");

  const addMovie = (movieData: { title: string; ott: string }) => {
    const newMovie: Movie = {
      id: crypto.randomUUID(),
      title: movieData.title,
      ott: movieData.ott,
      rating: null,
      watched: false,
    };
    setMovies((prev) => [...prev, newMovie]);
  };

  const toggleWatched = (id: string) => {
    setMovies((prev) =>
      prev.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie,
      ),
    );
  };

  const movieRemove = (id: string) => {
    setMovies((prev) => prev.filter((movie) => movie.id !== id));
  };

  const movieRating = (id: string, rating: number | null) => {
    setMovies((prev) =>
      prev.map((movie) => (movie.id === id ? { ...movie, rating } : movie)),
    );
  };

  const movieFiltered = movies.filter((movie) => {
    if (filter === "watched") return movie.watched;
    if (filter === "unwatched") return !movie.watched;
    return true;
  });

  return (
    <div className="max-w-lg min-w-[280px] rounded-lg bg-sky-200 p-4">
      <Header />
      <MovieForm addMovie={addMovie} />
      <Filter setFilter={setFilter} />
      <MovieList
        movies={movieFiltered}
        toggleWatched={toggleWatched}
        movieRemove={movieRemove}
        movieRating={movieRating}
      />
    </div>
  );
}
