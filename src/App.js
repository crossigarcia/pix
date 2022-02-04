import React from 'react';
import { Routes, Route } from "react-router-dom";
import Nav from './components/navbar/navbar.component';
import Homepage from "./pages/homepage/homepage.component";
import Home from "./pages/home/home.component";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/functional" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
