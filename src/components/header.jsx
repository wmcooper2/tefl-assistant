import React from "react";
import NavDropDown from "./navbar";
import games from "./gamedata";
import tools from "./tooldata";
import funstuff from "./funstuffdata";
console.log(funstuff);

// need to follow this guide... use fectch to call the endpoint which takes you back to express.
// https://www.freecodecamp.org/news/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0/

const Header = props => {
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
