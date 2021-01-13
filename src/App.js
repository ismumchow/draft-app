import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div className ="fluid-container">
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
