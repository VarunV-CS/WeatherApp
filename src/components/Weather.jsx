import React from 'react';
import '../styles/Weather.css';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';
import WeatherStats from './WeatherStats';

const Weather = ({ cityInput, onInputChange, weatherData, onSearch }) => {
  return (
    <div className="weather">
      <SearchBar
        value={cityInput}
        onChange={onInputChange}
        onSearch={onSearch}
      />
      {weatherData && (
        <>
          <WeatherDisplay
            icon={weatherData.icon}
            temperature={weatherData.temperature}
            location={weatherData.location}
          />
          <WeatherStats
            humidity={weatherData.humidity}
            windSpeed={weatherData.windSpeed}
          />
        </>
      )}
    </div>
  );
};

export default Weather;