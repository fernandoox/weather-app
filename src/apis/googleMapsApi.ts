
import apiConsts from "../consts/apiConsts";
export const  googleMapsApi = (location: string) =>{
    const API_KEY_GOOGLE = apiConsts.GOOGLE_KEY;
    const API_GOOGLE = apiConsts.API_URL_GOOGLE_GEOCODING;
    let data = location.replace(/ /g, "+")
    let queryString = `${API_GOOGLE}?address=${data}&key=${API_KEY_GOOGLE}` 

    fetch(queryString)
        .then(response => response.json());
    
}