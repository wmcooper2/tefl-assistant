import React from "react";

const Header = () => {
  return (
    <header>
      <p className="site-title">TEFL Assistant</p>
      <nav>
        <a href="#books">
          <p className="section-link">Books</p>
        </a>
        <a href="#games">
          <p className="section-link">Games</p>
        </a>
        <a href="#tools">
          <p className="section-link">Tools</p>
        </a>
        <a href="#funstuff">
          <p className="section-link">FunStuff</p>
        </a>
      </nav>
    </header>
  );
};
export default Header;
