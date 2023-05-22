import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
   <nav>
    <h1>
        Port<span>F</span>olio
    </h1>
    <ul>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Project">Project</Link>
        <Link to="/contact">Contact</Link>
    </ul>
   </nav>

  );
};

export default Navbar;