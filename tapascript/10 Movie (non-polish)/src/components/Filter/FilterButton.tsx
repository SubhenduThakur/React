type FilterType = "all" | "watched" | "unwatched";

interface FilterButtonProps {
  label: string;
  value: FilterType;
  currentFilter: FilterType;
  setFilter: (filter: FilterType) => void;
  variant?: FilterType;
  className?: string;
}

export default function FilterButton({
  label,
  value,
  currentFilter,
  setFilter,
  variant = "all",
  className = "",
}: FilterButtonProps) {
  const isActive = currentFilter === value;

  const baseStyle =
    "relative overflow-hidden border-2 border-black font-ClashDisplay rounded-3xl px-5 py-2 text-center font-medium transition-all duration-550 ease-out transform active:translate-x-[3px] active:translate-y-[3px] active:shadow-none";

  const hoverStyles = {
    all: "hover:shadow-[3px_3px_0px_#000]",
    watched: "hover:bg-[#05D332] hover:shadow-[3px_3px_0px_#000]",
    unwatched: "hover:bg-red-400 hover:shadow-[3px_3px_0px_#000]",
  };

  const activeStyles = {
    all: "bg-white shadow-[3px_3px_0px_#000]  scale-105",
    watched: "bg-[#05D332] shadow-[3px_3px_0px_#000]  text-white scale-105",
    unwatched: "bg-red-400 shadow-[3px_3px_0px_#000]  text-white scale-105",
  };

  return (
    <button
      onClick={() => setFilter(value)}
      className={` ${baseStyle} ${isActive ? activeStyles[variant] : "bg-white"} ${!isActive && hoverStyles[variant]} ${className} `}
    >
      <span className={isActive ? "font-semibold ease-in-out" : "font-medium"}>
        {label}
      </span>

      <span className="shine" />
    </button>
  );
}
