import React, {useContext, useState} from 'react';
import Autocomplete from "react-google-autocomplete";
import {googleMapsApi} from '../../apis/googleMapsApi';
import {getWeatherByLatLon} from '../../apis/weatherApi';
import envConsts from '../../consts/envConsts';
import {WeatherInfo} from "../../models/WeatherInfo";
import {CityContext} from "../../context/CityContext";
import {Coord} from "../../models/Coord";
import './SearchingInput.scss';

const SearchingInput = () => {
    const {setCity} = useContext(CityContext);
    const [addressCity, setAddressCity] = useState<string>('');
    const [coordCity, setCoordCity] = useState<Coord>({lat: 0, lon: 0});

    const searchCoordCity = async (address: string) => {
        try {
            const geometru = await googleMapsApi(address);
            const {lat, lng} = geometru.results[0].geometry.location;
            setCoordCity({lat: lat, lon: lng});
        } catch (e) {
            console.error(e);
        }
    }

    const searchWeatherCity = async (event: React.MouseEvent<HTMLButtonElement>) => {
        try {
            event.preventDefault();
            const weatherCity: WeatherInfo = await getWeatherByLatLon(coordCity.lat, coordCity.lon);
            setCity({
                address: addressCity,
                coord: coordCity,
                weatherInfo: weatherCity
            });
        } catch (e) {
            console.error(e)
        }
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
                    onPlaceSelected={(place) => {
                        setAddressCity(place.formatted_address);
                        searchCoordCity(place.formatted_address);
                    }}
                />
                <button
                    data-testid="searching-btn"
                    className="SearchingInput-btn SearchingInput-btn--primary SearchingInput-btn--inside"
                    onClick={searchWeatherCity}>
                    SUBMIT
                </button>
            </form>
        </div>
    );
}

export default SearchingInput;