import React, { useEffect, useState } from "react";

const Search = ({onSearch}) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    onSearch(searchText);
  }, [searchText]);


  return (
    <div className="text-center">
      <input
        className="py-2 px-10 rounded bg-slate-900 font-medium text-white"
        type="text"
        placeholder="Search Country"
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
