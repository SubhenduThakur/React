import PropTypes from "prop-types";

function Search({
  searchTerm,
  onSearchCar,
  showPremium,
  onShowPremium,
  sortOption,
  onSortOption,
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchCar(e.target.value)}
        placeholder="Search cars..."
        className="focus w-sm rounded-lg border border-gray-300 p-2 shadow-sm transition-all duration-200 outline-none hover:border-blue-400"
      />

      <select
        value={sortOption}
        onChange={(e) => {
          onSortOption(e.target.value);
        }}
        className="appearance-none rounded-lg border border-gray-300 bg-white p-1 px-2 text-sm text-gray-700 shadow-sm transition-all duration-200 outline-none hover:border-blue-400"
      >
        <option value="">Sort By</option>
        <option value="price-asc">Price : Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="year-asc">Year: Older</option>
        <option value="year-desc">Year: Newer</option>
      </select>

      <input
        type="checkbox"
        checked={showPremium}
        onChange={(e) => onShowPremium(e.target.checked)}
        className="h-4 w-4 cursor-pointer"
      />
      <label className="text-sm">Show Premium Only</label>
    </div>
  );
}

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchCar: PropTypes.func.isRequired,
  showPremium: PropTypes.bool.isRequired,
  onShowPremium: PropTypes.func.isRequired,
  sortOption: PropTypes.string.isRequired,
  onSortOption: PropTypes.func.isRequired,
};

export default Search;
