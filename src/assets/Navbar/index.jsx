import React from "react";
import { Link } from '@tanstack/react-router'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/">Sean Webb</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/resume">Resume</Link></li>
        </ul>
    </nav>
    );
};

export default Navbar;