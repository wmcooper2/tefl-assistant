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
      <p>{props.description}</p>
    </div>
  );
};

export { Description, MainDescription };
