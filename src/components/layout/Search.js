import React from "react";

export class Search extends React.Component {
  state = {
    text: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
  };

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        <form className="my-2 my-lg-0">
          <input
            onChange={this.onChange}
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
          />
          <button
            className="btn btn-primary my-2 btn-block"
            type="submit"
            onClick={this.onSubmit}
          >
            Search {this.props.searchType}
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
