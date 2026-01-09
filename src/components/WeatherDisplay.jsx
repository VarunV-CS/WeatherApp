import React from 'react';
import './WeatherDisplay.css';

const WeatherDisplay = ({ icon, temperature, location }) => {
  return (
    <>
      <img src={icon} alt="Weather icon" className="weather-icon" />
      <p className="temperature">{temperature}°c</p>
      <p className="location">{location}</p>
    </>
  );
};

export default WeatherDisplay;
