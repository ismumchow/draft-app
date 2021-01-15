import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "Dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed","",breeds); // always empty

  return (
    <div className="search-params fluid-container">
      <form>
        <AnimalDropdown />
        <BreedDropdown />
        <button className="btn btn-primary m-3"> Submit </button>
      </form>
    </div>
  );
};

export default SearchParams;
