import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from "./Results";
import useDropdown from "./useDropdown";
import ThemeContext from './ThemeContext';

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]); // when you first request a pet, there isnt going to be anything in there
  const [theme, setTheme] = useContext(ThemeContext);
  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });

    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedStrings = apiBreeds.map(({ name }) => name);
      setBreeds(breedStrings); // from the setBreeds function on line 7
    }, console.error);
  }, [animal, setBreeds, setBreed]);
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault(); //doesnt automatically
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <label htmlFor="theme"> 
        Theme 
        <select 
        value = {theme}
        onChange = {e => setTheme(e.target.value)}
        onBlur = {e => setTheme(e.target.value)} 
          >
          <option value ="peru"> Peru </option>
          <option value ="red"> Red </option>
          <option value ="darkblue"> Dark Blue </option>
          

          </select>       
        </label>

        <button style={{ backgroundColor : theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
