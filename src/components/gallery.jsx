import React from "react";

const Gallery = props => {
  const { list, Component } = props;
  let gallery = [];
  list.forEach(item => gallery.push(<Component key={item.name} item={item}></Component>));
  return <div className="gallery">{gallery}</div>;
};

export default Gallery;
