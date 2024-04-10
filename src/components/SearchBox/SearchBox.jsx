const SearchBox = ({ searchStr, setSearch }) => {
  return (
    <div>
      <h2>Find contact by name</h2>
      <input
        value={searchStr}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Enter contact name..."
      />
    </div>
  );
};

export default SearchBox;
