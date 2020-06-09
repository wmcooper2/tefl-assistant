import React from "react";
import Header from "./components/header";
import { Description, MainDescription } from "./components/description";
import Gallery from "./components/gallery";
import BookGallery from "./components/bookGallery";
import Thumb from "./components/thumb";
import BookThumb from "./components/bookThumb";
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
      <div className="book-section" id="books">
        <Description description={books.title} />
        <p className="book-description">
          These are the books that I use in my classes. Even if you don't use
          them, you might benefit from the simple games and tools that made
          using the data from them.
        </p>
        <BookGallery list={books.items} Component={BookThumb}></BookGallery>
      </div>

      {/* Games */}
      <div className="gallery-section" id="games">
        <Description description={games.title} />
        <p>
          These are simple games. Don't overthink it. Just use them how you
          want.
        </p>
        <Gallery list={games.items} Component={Thumb}></Gallery>
      </div>

      {/* Tools */}
      <div className="gallery-section" id="tools">
        <Description description={tools.title} />
        <p>
          These are not games. They are simple tools to assist you (the teacher)
          in class or when you're at your desk making worksheets.
        </p>
        <Gallery list={tools.items} Component={Thumb}></Gallery>
      </div>

      {/* Funstuff */}
      <div className="gallery-section" id="funstuff">
        <Description description={funstuff.title} />
        <p>
          Some external sites that I get inspiration from when I make my
          activities for class.
        </p>
        <Gallery list={funstuff.items} Component={Thumb}></Gallery>
      </div>
    </React.Fragment>
  );
}

export default App;
