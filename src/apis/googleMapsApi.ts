import apiConsts from '../consts/apiConsts';
export const googleMapsApi = (location: string) => {
  const API_GOOGLE = apiConsts.API_URL_GOOGLE_GEOCODING;
  const data = location.replace(/ /g, '+');
  const queryString = `${API_GOOGLE}?address=${data}&key=${process.env.REACT_APP_WEATHER_API_GOOGLE}`;

  fetch(queryString).then((response) => response.json());
};
