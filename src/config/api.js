const API_CONFIG = {
  BASE_URL: 'https://api.openweathermap.org/data/2.5',
  ENDPOINTS: {
    WEATHER: '/weather',
  },
  getWeatherUrl: (city) => {
    return `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.WEATHER}?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
  }
};

export default API_CONFIG;
