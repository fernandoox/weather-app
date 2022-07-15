import React from 'react';
import Autocomplete from "react-google-autocomplete";
import {googleMapsApi} from '../../apis/googleMapsApi';
import { getWeatherByLatLon } from '../../apis/weatherApi';
import envConsts from '../../consts/envConsts';
import './SearchingInput.scss';
import {City} from "../../models/City";
import {WeatherInfo} from "../../models/WeatherInfo";

function SearchingInput() {
    const [city, setCity] = React.useState<City>({
        address: '',
        coord: {
            lat: 0,
            lon: 0
        }
    });
    const searchGeometryCity = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        googleMapsApi(city.address)
            .then(response => {
                const {lat, lng} = response.results[0].geometry.location;
                const updatedCity = {...city, lat:lat, lon: lng};
                getWeatherByLatLon(lat, lng)
                  .then((res:WeatherInfo) => console.log(res))
                  .catch((err) => console.log(err));
                setCity(updatedCity);
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="SearchingInput-container">
            <h1 className="SearchingInput-title">Simple Weather App</h1>
            <form className="SearchingInput-form">
                <Autocomplete
                    data-testid="searching-input"
                    className="SearchingInput-form__input"
                    placeholder="Search for a city"
                    apiKey={envConsts.GMAPS_API_KEY}
                    onPlaceSelected={(place) => setCity({...city, address: place.formatted_address})}
                />
                <button
                    data-testid="searching-btn"
                    className="SearchingInput-btn SearchingInput-btn--primary SearchingInput-btn--inside"
                    onClick={searchGeometryCity}>
                    SUBMIT
                </button>
            </form>
        </div>
    );
}

export default SearchingInput;