import React from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";
import SearchParams from "./searchParams";
import Details from "./Details";
const App = () => {
  return (
    <div>
      <header>
        {" "}
        <Link to="/"> Adopt Me! </Link>{" "}
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
