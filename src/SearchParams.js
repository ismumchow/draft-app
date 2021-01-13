import React from "react";

const SearchParams = () => {
  
  const team = "Greenbay Packers";

  return (
    <div className="search-params container">
      <form> 
       NFL Team:
      <label htmlFor="team" className="m-3">
        <input id="team" value={team} placeholder="team" />
      </label>
      <button className="btn btn-primary m-3"> Submit </button>
      </form>
    </div>
  )
};

export default SearchParams;
