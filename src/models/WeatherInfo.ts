import {Coord} from './Coord';
import {ConditionWeather} from './ConditionWeather';
import {MainWeather} from './MainWeather';
import {Wind} from './Wind';
import {SysWeather} from './SysWeather';

export interface WeatherInfo {
  coord: Coord;
  weather: ConditionWeather[];
  base: string;
  main: MainWeather;
  visibility: number;
  wind: Wind;
  clouds: {
    all: number;
  };
  dt: number;
  sys: SysWeather;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}