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
      {/* Routes are added to homepage and about page */}
        {/*Header is built inside this component*/}
        <Header />
        {/*Homepage contains search city and footer components*/}
        <Route path="/" exact component={Homepage} />
        {/*About talks about the dashboard and the authors*/}
        <Route path="/About" component={About} />
        {/* </Router> */}
    </div>
  );
}

export default App;

