import React from "react";
import NavDropDown from "./navbar";

// need to follow this guide... use fetch to call the endpoint which takes you back to express.
// https://www.freecodecamp.org/news/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0/

const Header = props => {
  const { games, tools, funstuff } = props;
  return (
    <header>
      TEFL Assistant
      <nav>
        <NavDropDown {...games} />
        <NavDropDown {...tools} />
        <NavDropDown {...funstuff} />
      </nav>
    </header>
  );
};
export default Header;
