import React from "react";
import HeaderTemplate from "./components/header";
import Description from "./components/description";
import Benefits from "./components/benefits";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <HeaderTemplate />
      <Description />
      <Benefits />
    </React.Fragment>
  );
}

export default App;
