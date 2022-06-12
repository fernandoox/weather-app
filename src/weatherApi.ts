import ApiConsts from "./consts/apiConsts";

export const getWeatherByLatLon = (lat: number, lon: number) =>
     fetch(`${ApiConsts.API_URL_WEATHER}&lat=${lat}&lon=${lon}`)
         .then(response => response.json());

