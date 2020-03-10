import React from "react";

const NavDropDown = props => {
  console.log()
  const dropDown = props.items.map(item => (
    <a key={item.name} href={item.url}>
      {item.name}
    </a>
  ));
  return (
    <React.Fragment>
      <div className="dropdown">
        <button className="dropbtn">{props.title}</button>
        <div className="dropdown-content">{dropDown}</div>
      </div>
    </React.Fragment>
  );
};

export default NavDropDown;
