import React, { useState } from "react";
// custom hook we are creating

// gonna pass a label, a default state, and a list of options, an array or obj

const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace("", " ").toLowerCase()}`;
  const dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
        disables={!options.length}
      >
        <option> All </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
        {/* for each option create a new option tag with the value option from the passed array */}
      </select>
    </label>
  );
  return [state, dropdown, setState];
};

export default useDropdown;
