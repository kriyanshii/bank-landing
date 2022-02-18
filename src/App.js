import React from "react";
import "./style.css";

import { BrowserRouter as Router} from'react-router-dom'
import Navbar from "./components/Navbar";
import TopContainer from "./components/TopContainer"
import Middle from "./components/Middle"
import Bottom from "./components/Bottom"
import Contact from "./components/Contact"



function App() {
  return (
    <div>
      <Router>
          <Navbar />
        </Router>
        <TopContainer />
        <Middle />
        <Bottom />
        <Contact />
    </div>

  );
}

export default App;
