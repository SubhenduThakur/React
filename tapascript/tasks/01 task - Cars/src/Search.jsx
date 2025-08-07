function Search() {
  return (
    <div className="mb-5 flex items-center gap-3">
      <input
        type="text"
        placeholder="Search cars..."
        className="focus w-sm rounded-lg border border-gray-300 p-2 shadow-sm"
      />
      <input type="checkbox" className="h-4 w-4" />
      <label className="text-sm">Show Premium Only</label>
    </div>
  );
}

export default Search;
