import React from "react";

const Thumb = props => {
  let { item } = props;
  let link = null;
  if (item === null) {
    item = {
      name: "thumb",
      image: "thumbs/totalenglish.png",
      alt: "default thumb",
      description: "Some default description about the thumb.",
      url: null
    };
  }

  return (
    <a href={item.url}>
      <button className="gallery-button">
        <img
          className="gallery-image"
          key={item.name}
          src={item.image}
          alt={item.alt}
        ></img>
        {link}
      </button>
    </a>
  );
};

export default Thumb;
