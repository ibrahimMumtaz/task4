import React from 'react';
import architectImage from '../images/architect.jpg'
import './style.css';

const Header = () => {
  return (
    <header className="HeaderClass" id="home">
      <img className="HeaderImage" src={architectImage} alt="Architecture" />
      <div className="HeaderDiv">
        <h1 className="HeaderH1">
          <span className="HeaderBR"><b>BR</b></span>
          <span className="HeaderArchitects">Architects</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
