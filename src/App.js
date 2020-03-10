import React from "react";

// COMPONENTS
import Header from "./components/header";
import { Description, SectionDescription } from "./components/description";
import Gallery from "./components/gallery";
// import Book from "./components/book";
// import Game from "./components/game";
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
      <Header games={games} tools={tools} funstuff={funstuff} />
      <Description description={homepageDescription} />

      {/* Books */}
      <div className="main-book-selection">
        <SectionDescription description={books.title} />
        <Gallery list={books.items} Component={Thumb}></Gallery>
      </div>

      {/* Games */}
      {/* Game component adapted from Book component */}
      <div className="main-book-selection">
        <SectionDescription description={games.title} />
        <Gallery list={games.items} Component={Thumb}></Gallery>
      </div>

      {/* Tools */}
      {/* uses the Game component for now */}
      <div className="main-book-selection">
        <SectionDescription description={tools.title} />
        <Gallery list={tools.items} Component={Thumb}></Gallery>
      </div>

      {/* Stuff */}
      {/* uses the Game component for now */}
      <div className="main-book-selection">
        <SectionDescription description={funstuff.title} />
        <Gallery list={funstuff.items} Component={Thumb}></Gallery>
      </div>
    </React.Fragment>
  );
}

export default App;
