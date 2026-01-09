import React, { useState, useEffect } from 'react';
import Weather from './Weather';
import Snackbar from './Snackbar';
import API_CONFIG from '../config/api';
import { WEATHER_ICONS, DEFAULT_ICON } from '../config/weatherIcons';

const WeatherContainer = () => {
  const [cityInput, setCityInput] = useState('');
  const [weatherData, setWeatherData] = useState(false);
  const [snackbar, setSnackbar] = useState({
    isVisible: false,
    message: '',
    type: 'error',
  });

  const showSnackbar = (message, type = 'error') => {
    setSnackbar({
      isVisible: true,
      message,
      type,
    });
  };

  const hideSnackbar = () => {
    setSnackbar((prev) => ({
      ...prev,
      isVisible: false,
    }));
  };

  const search = async (city) => {
    if (city === '') {
      showSnackbar('Enter City Name', 'error');
      return;
    }

    try {
      const url = API_CONFIG.getWeatherUrl(city);
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        showSnackbar(data.message || 'Failed to fetch weather data', 'error');
        return;
      }

      console.log(data);
      const icon = WEATHER_ICONS[data.weather[0].icon] || DEFAULT_ICON;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
      showSnackbar(`Weather data loaded for ${data.name}`, 'success');
    } catch (error) {
      setWeatherData(false);
      console.error('Error in fetching weather data', error);
      showSnackbar('Error fetching weather data. Please try again.', 'error');
    }
  };

  useEffect(() => {
    search('London');
  }, []);

  const handleSearch = () => {
    search(cityInput);
  };

  const handleInputChange = (e) => {
    setCityInput(e.target.value);
  };

  return (
    <>
      <Weather
        cityInput={cityInput}
        onInputChange={handleInputChange}
        weatherData={weatherData}
        onSearch={handleSearch}
      />
      <Snackbar
        message={snackbar.message}
        type={snackbar.type}
        isVisible={snackbar.isVisible}
        onClose={hideSnackbar}
      />
    </>
  );
};

export default WeatherContainer;
