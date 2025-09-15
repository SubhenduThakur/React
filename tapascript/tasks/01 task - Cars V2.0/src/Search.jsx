import PropTypes from "prop-types";

function Search({ searchTerm, onSearchCar, showPremium, onShowPremium }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchCar(e.target.value)}
        placeholder="Search cars..."
        className="focus w-sm rounded-lg border border-gray-300 p-2 shadow-sm"
      />
      <input
        type="checkbox"
        checked={showPremium}
        onChange={(e) => onShowPremium(e.target.checked)}
        className="h-4 w-4"
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
};

export default Search;
