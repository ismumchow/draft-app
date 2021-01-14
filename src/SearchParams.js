import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA"); 
  const [animal, setAnimal] = useState("dog");

  return (
    <div className="search-params fluid-container">
      <form>
        <h1> Location: {location} </h1>
        <label htmlFor="team" className="m-3">
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={(e) => setLocation(e.target.value)}
            onBlur={(e) => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id={animal}
            value={animal}
            onChange= {(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}>
            <option> All</option>
            {ANIMALS.map((animal) => (
              <option key= {animal} value ={animal}> {animal} </option>
            ))}
          </select>
        </label>
        <button className="btn btn-primary m-3"> Submit </button>
      </form>
    </div>
  );
};

export default SearchParams;
