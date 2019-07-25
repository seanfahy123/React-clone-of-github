import React from "react";

const Search = props => {
  console.log(props.searchType);
  return (
    <div>
      <form className="my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search"
        />
        <button className="btn btn-primary my-2 btn-block" type="submit">
          Search {props.searchType}
        </button>
      </form>
    </div>
  );
};

export default Search;
