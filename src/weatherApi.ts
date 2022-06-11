import {API_URL} from "./consts/apiConsts";

export const getWeatherByLatLon = (lat: number, lon: number) =>
     fetch(`${API_URL}&lat=${lat}&lon=${lon}`)
         .then(response => response.json());

