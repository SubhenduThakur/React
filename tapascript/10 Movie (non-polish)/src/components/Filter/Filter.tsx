interface FilterType {
  setFilter: (filter: "all" | "watched" | "unwatched") => void;
}

export default function Filter({ setFilter }: FilterType) {
  return (
    <div className="flex justify-center gap-2 py-2">
      <button
        onClick={() => setFilter("all")}
        className="border-black px-2 py-1 outline-1"
      >
        All
      </button>
      <button
        onClick={() => setFilter("watched")}
        className="border-black px-2 py-1 outline-1"
      >
        Watched
      </button>
      <button
        onClick={() => setFilter("unwatched")}
        className="border-black px-2 py-1 outline-1"
      >
        Unwatched
      </button>
    </div>
  );
}
