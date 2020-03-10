import React from "react";

const Game = props => {
  let { item } = props;
  if (item === null) {
    item = {
      name: "testgame",
      image: "thumbs/totalenglish.png",
      alt: "english game",
      description: "Some description about the item."
    };
  }
  return (
    <React.Fragment>
      <button className="gallery-button">
        <img
          className="gallery-image"
          key={item.name}
          src={item.image}
          alt={item.alt}
        ></img>
      </button>
    </React.Fragment>
  );
};

export default Game;
