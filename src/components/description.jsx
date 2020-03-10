import React from "react";

const Description = props => {
  return (
    <div className="description">
      <p>{props.description}</p>
    </div>
  );
};

const SectionDescription = props => {
  return (
    <div className="description">
      <h2>{props.description}</h2>
    </div>
  );
};

export { Description, SectionDescription };
