import React from "react";
import Header from "./components/header";
import Description from "./components/description";
// import Benefits from "./components/benefits";
import Gallery from "./components/gallery";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Description />
      {/* <Benefits /> */}
      <div className="bookdescription">
        <p className="">
          Currently, I am using the Total English Book series. The tools are
          based on the material in these 3 books, but I will be adding more
          books as the site grows.
        </p>
        <img src="thumbs/totalenglish.png" alt="total english book"></img>
      </div>
      <Gallery />
    </React.Fragment>
  );
}

export default App;
