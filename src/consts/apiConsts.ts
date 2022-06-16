const apiConsts = {
  API_URL_WEATHER: `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
  API_URL_GOOGLE_GEOCODING: `https://maps.googleapis.com/maps/api/geocode/json`
};

export default apiConsts;
