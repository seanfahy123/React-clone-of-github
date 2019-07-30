import React, { useState } from "react";

const Search = ({ search, searchType }) => {
  const [searchText, setSearchText] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    search(searchText);
  };

  const onChange = e => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <form className="my-2 my-lg-0">
        <input
          onChange={onChange}
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search"
        />
        <button
          className="btn btn-primary my-2 btn-block"
          type="submit"
          onClick={onSubmit}
        >
          Search {searchType}
        </button>
      </form>
    </div>
  );
};

export default Search;
