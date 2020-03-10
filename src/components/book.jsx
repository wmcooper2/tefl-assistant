import React from "react";

const Book = props => {
  let { item } = props;
  if (item === null) {
    item = {
      name: "testbook",
      image: "thumbs/totalenglish.png",
      alt: "total english",
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

export default Book;
