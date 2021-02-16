import React from "react";

function Search() {

  return (
    <div className="container">
      <h2 className="text-center">Search By Breed!</h2>
      <form>
        <div className="form-group">
          <label for="breed">Breed Name:</label>
          <input className="form-control" id="breed" placeholder="Type in a dog breed to begin"></input>
        </div>
        <button type="submit" className="btn btn-success">Search</button>
      </form>
    </div>
  );
}

export default Search;
