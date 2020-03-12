// need to follow this guide... use fetch to call the endpoint which takes you back to express.
// https://www.freecodecamp.org/news/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0/

import React from "react";

// COMPONENTS
import Header from "./components/header";
import { Description, MainDescription } from "./components/description";
import Gallery from "./components/gallery";
import Thumb from "./components/thumb";

// DATA
import { homepageDescription } from "./data/description";
import books from "./data/books";
import games from "./data/games";
import tools from "./data/tools";
import funstuff from "./data/funstuff";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <MainDescription description={homepageDescription} />

      {/* Books */}
      <div className="gallery-section" id="books">
        <Description description={books.title} />
        <Gallery list={books.items} Component={Thumb}></Gallery>
      </div>

      {/* Games */}
      <div className="gallery-section" id="games">
        <Description description={games.title} />
        <Gallery list={games.items} Component={Thumb}></Gallery>
      </div>

      {/* Tools */}
      <div className="gallery-section" id="tools">
        <Description description={tools.title} />
        <Gallery list={tools.items} Component={Thumb}></Gallery>
      </div>

      {/* Funstuff */}
      <div className="gallery-section" id="funstuff">
        <Description description={funstuff.title} />
        <Gallery list={funstuff.items} Component={Thumb}></Gallery>
      </div>
    </React.Fragment>
  );
}

export default App;
