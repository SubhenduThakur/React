import FilterButton from "./FilterButton.tsx";

type FilterType = "all" | "watched" | "unwatched";

interface FilterProps {
  currentFilter: FilterType;
  setFilter: (filter: FilterType) => void;
}

export default function Fitler({ currentFilter, setFilter }: FilterProps) {
  return (
    <div className="flex gap-4 justify-center items-center ">
      <FilterButton
        label="All"
        value="all"
        variant="all"
        currentFilter={currentFilter}
        setFilter={setFilter}
      />

      <FilterButton
        label="Watched"
        value="watched"
        variant="watched"
        currentFilter={currentFilter}
        setFilter={setFilter}
      />

      <FilterButton
        label="Unwatched"
        value="unwatched"
        variant="unwatched"
        currentFilter={currentFilter}
        setFilter={setFilter}
      />
    </div>
  );
}
