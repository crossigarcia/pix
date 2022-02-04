import React from 'react';
// import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import Home from "./pages/homepage/homepage.component";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Homepage/>
      <Home />
    </div>
  );
}

export default App;
