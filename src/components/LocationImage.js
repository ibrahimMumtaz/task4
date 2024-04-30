import React from "react";
import './style.css';
import mapImage from '../images/map.jpg'; 

const LocationImage = () => {
  return (
    <div className="LocationContainer"> 
      <img className="MapImage" src={mapImage} alt="Our Location" /> 
    </div>
  );
};

export default LocationImage;
