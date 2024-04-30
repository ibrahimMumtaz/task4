import React from 'react';
import './style.css';

const Navbar = () => {
  return (
    <div className="topbar">
      <a href="#home" className="topbarleft"><b>BR</b> Architects</a>
      <div className="topbarright"> 
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};
export default Navbar;
