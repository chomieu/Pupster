import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import API from "../utils/API";

class Search extends Component {
  state = {
    search: "",
  };

  handleInputChange = event => {
    const name = event.target.name
    const value = event.target.value
    this.setState({ [name]: value })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    this.searchMovies(this.state.search)
    this.setState({ search: "" })
  }

  render() {
    return (
      <div className="container">
        <h2 className="text-center">Search By Breed!</h2>
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
      </div>
    );
  }
}

export default Search;
