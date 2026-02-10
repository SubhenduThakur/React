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
          className="font-ClashDisplay w-full rounded-3xl border-2 border-black bg-white px-2 py-2 text-center font-medium outline-none"
        />

        <select
          name="ott"
          value={movieData.ott}
          onChange={handleChange}
          className="font-ClashDisplay cursor-pointer appearance-none rounded-3xl border-2 border-black bg-white px-2 py-2 text-center font-medium outline-none max-[375px]:w-full"
        >
          <option value="">Select an OTT</option>
          <option value="Netflix">Netflix</option>
          <option value="Amazon Prime">Amazon Prime</option>
          <option value="JioHotstar">JioHotstar</option>
          <option value="Sony LIV">Sony LIV</option>
          <option value="Hoichoi">Hoichoi</option>
          <option value="Others">Others</option>
        </select>

        <button
          className={`font-ClashDisplay cursor-pointer rounded-3xl border-2 border-black bg-[#BB00FF] px-5 py-2 text-center font-semibold text-white shadow-[3px_3px_0px_#000]`}
        >
          Add
        </button>
      </form>
    </>
  );
}
