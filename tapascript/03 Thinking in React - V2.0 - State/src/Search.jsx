import PropTypes from "prop-types";

function Search({ searchTerm, onSearchBook }) {
  return (
    <form>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchBook(e.target.value)}
        placeholder="Search Books..."
        className="jost mb-4 w-full rounded-lg border border-gray-100 bg-white px-4 py-2 shadow-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-gray-200"
      />
    </form>
  );
}

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchBook: PropTypes.func.isRequired,
};

export default Search;
