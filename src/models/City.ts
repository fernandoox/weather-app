import {Coord} from  './Coord';
import {WeatherInfo} from "./WeatherInfo";

export interface City {
    address: string;
    coord: Coord | null;
    weatherInfo: WeatherInfo | null;
}