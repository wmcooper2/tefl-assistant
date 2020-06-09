import React from "react";

const BookGallery = (props) => {
  const { list, Component } = props;
  let gallery = [];
  list.forEach((item) =>
    gallery.push(<Component key={item.name} item={item}></Component>)
  );
  return (
    <React.Fragment>
      <div className="book-gallery">{gallery}</div>
    </React.Fragment>
  );
};

export default BookGallery;
