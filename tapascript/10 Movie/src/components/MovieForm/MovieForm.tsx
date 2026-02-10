import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

interface MovieFromProps {
  addMovie: (movie: { title: string; ott: string }) => void;
}
export default function MovieForm({ addMovie }: MovieFromProps) {
  const [movieData, setMovieData] = useState({ title: "", ott: "" });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setMovieData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const trimmedMovies = {
      title: movieData.title.trim(),
      ott: movieData.ott.trim(),
    };

    if (!movieData.title.trim() || !movieData.ott.trim()) return;

    addMovie(trimmedMovies);
    setMovieData({ title: "", ott: "" });
  };
  return (
    <>
      <form className="flex gap-2 py-2" onSubmit={handleSubmit}>
        <input
          name="title"
          value={movieData.title}
          type="text"
          placeholder="Enter movie name..."
          onChange={handleChange}
          className="w-full border border-black px-2 py-1 outline-none"
        />

        <select
          name="ott"
          value={movieData.ott}
          onChange={handleChange}
          className="border border-black py-1 outline-none max-[375px]:w-full"
        >
          <option value="">Select an OTT</option>
          <option value="Netflix">Netflix</option>
          <option value="Amazon Prime">Amazon Prime</option>
          <option value="Hotstar">Hotstar</option>
          <option value="Sony LIV">Sony LIV</option>
          <option value="Hoichoi">Hoichoi</option>
          <option value="Others">Others</option>
        </select>

        <button className="border border-black px-2 py-1 outline-none">
          Add
        </button>
      </form>
    </>
  );
}
