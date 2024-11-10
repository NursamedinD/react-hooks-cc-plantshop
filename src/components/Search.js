import React, { useState } from "react";

function Search({ onSearchChange }) {
  const [searchPlant, setSearchPlant] = useState("");

  function handleSearchChange(e) {
    setSearchPlant(e.target.value);
    onSearchChange(e.target.value);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchPlant}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;