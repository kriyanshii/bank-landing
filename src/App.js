import React from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import TopContainer from "./components/TopContainer"
import Middle from "./components/Middle"

function App() {
  return (
    <>
      <body>
        <Navbar />
        <TopContainer />
        <Middle />
      </body>
    </>
  );
}

export default App;
