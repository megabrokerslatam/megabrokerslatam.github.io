import React, { Component } from 'react';
import './App.css';
// Router imports
import { Route, Switch } from "react-router-dom";
// Screen imports
import Landing from "./Screens/Landing";
import Blog from "./Screens/Blog";
import Testimonies from "./Screens/Testimonies";
import Plans from "./Screens/Plans";
// import Family from "./Components/Family";
// import Group from "./Components/Group";
import About from "./Screens/About";
import NotFound from "./Screens/NotFound";

// Using Context to toggle sidenav
const SidenavContext = React.createContext(false);

class App extends Component {
  render() {
    return (
      <SidenavContext.Provider value="false">
        <div className="App">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/plans" component={Plans} />
            {/* <Route path="/family" component {Family} /> */}
            {/* <Route path="/group" component {Group} /> */}
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/testimonies" component={Testimonies} />
            <Route component={NotFound} />
          </Switch> 
        </div>
      </SidenavContext.Provider>
    );
  }
}

export default App;