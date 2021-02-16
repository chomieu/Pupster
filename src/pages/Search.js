import React from "react";

function Search() {
  return (
    <div>
      <h2>Search By Breed!</h2>
      <form>
        <label>Breed Name:</label>
        <input placeholder="Type in a dog breed to begin"></input>
        <button>Search</button>
      </form>
    </div>
  );
}

export default Search;
