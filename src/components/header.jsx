import React from "react";

class HeaderTemplate extends React.Component {
  render() {
    const games = {
      title: "Games",
      items: ["game 1", "game 2", "game 3"]
    };
    return (
      <header>
        TEFL Assistant
        <nav>
          <a>Games</a>
          <a>Tools</a>
          <a>Fun Stuff</a>
          <a>Login</a>
        </nav>
      </header>
    );
  }
}
export default HeaderTemplate;
