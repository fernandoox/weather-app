import React, { createContext, Dispatch, SetStateAction, useState } from 'react';
import {City} from "../models/City";

interface ICity {
  city: City;
  setCity: Dispatch<SetStateAction<City>>;
}

export const CityContext = createContext<ICity>({
  city: {
    address: "",
    coord: null,
    weatherInfo: null
  },
  setCity: () => {}
});

interface child {
  children?: React.ReactNode;
}

export const CityProvider: React.FC<child> = ({ children }) => {
  const [city, setCity] = useState<City>({
      address: "",
      coord: null,
      weatherInfo: null
  });

  return <CityContext.Provider value={{ city, setCity }}>{children}</CityContext.Provider>;
};
