import React from "react";

const Description = props => {
  return (
    <div className="description">
      <p className="section-title">{props.description}</p>
    </div>
  );
};

const MainDescription = props => {
  return (
    <div className="maindescription">
      <h2>{props.description}</h2>
    </div>
  );
};

export { Description, MainDescription };
