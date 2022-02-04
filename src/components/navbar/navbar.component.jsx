import React from "react";
import { Link } from 'react-router-dom';
import "./navbar.styles.scss";

const Nav = () => (
   <div className="navbar">
      <Link to="/" className="nav-link">Class Component</Link>
      <Link to="/functional" className="nav-link">Functional Component</Link>
      {/* <Link to="/favorites" className="nav-link">Favorites</Link> */}
   </div>
);

export default Nav;