import { useState } from "react";

function Searchbar({ onSearch }) {
  const [search, setSearch] = useState("");

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="🔍 Search Notes..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          onSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default Searchbar;