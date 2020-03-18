import React from "react";

const Header = () => {
  return (
    <header>
      <h1 className="site-title">TEFL Assistant</h1>
      <nav>
        <a href="#books">
          <span className="section-link">Books</span>
        </a>
        <a href="#games">
          <span className="section-link">Games</span>
        </a>
        <a href="#tools">
          <span className="section-link">Tools</span>
        </a>
        <a href="#funstuff">
          <span className="section-link">FunStuff</span>
        </a>
      </nav>
    </header>
  );
};
export default Header;
