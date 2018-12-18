import React, { Component } from 'react';
import './App.css';
// Router imports
import { Route } from "react-router-dom";
// Screen imports
import Landing from "./Screens/Landing";
import Blog from "./Screens/Blog";
import Testimonies from "./Screens/Testimonies";
// import Companies from "./Screens/Companies";
import Plans from "./Screens/Plans";
// import Family from "./Components/Family";
// import Group from "./Components/Group";
// import About from "./Components/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Landing} />
        <Route exact path="/plans" component={Plans} />
        {/* <Route path="/family" component {Family} /> */}
        {/* <Route path="/group" component {Group} /> */}
        {/* <Route path="/about" component={About} /> */}
        {/* <Route path="/companies" component={Companies} /> */}
        <Route path="/blog" component={Blog} />
        <Route path="/testimonies" component={Testimonies} />
      </div>
    );
  }
}

export default App;