import apiConsts from '../consts/apiConsts';
import envConsts from "../consts/envConsts";

export const googleMapsApi = (location: string) => {
  const API_GOOGLE = apiConsts.API_URL_GOOGLE_GEOCODING;
  const data = location.replace(/ /g, '+');
  const queryString = `${API_GOOGLE}?address=${data}&key=${envConsts.GMAPS_API_KEY}`;

  fetch(queryString).then((response) => response.json());
};
