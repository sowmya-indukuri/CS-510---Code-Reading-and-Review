import React from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import { Route } from "react-router-dom";
import About from "./About";
import Header from "./header";
import Homepage from "./view/home"
import "./App.css";


//Main application flow starts here

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Header />
        <Route path="/" exact component={Homepage} />
        <Route path="/About" component={About} />
        {/* </Router> */}
    </div>
  );
}

export default App;

