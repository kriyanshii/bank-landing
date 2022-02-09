import React from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import TopContainer from "./components/TopContainer"
import Middle from "./components/Middle"
import Bottom from "./components/Bottom"


function App() {
  return (
    <>
      <body>
        <Navbar />
        <TopContainer />
        <Middle />
        <Bottom />
      </body>
    </>
  );
}

export default App;
