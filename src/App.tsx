import React, { useEffect, useState } from 'react';
import { getWeatherByLatLon } from "./weatherApi";
import { googleMapsApi } from "./apis/googleMapsApi"
import logo from './logo.svg';
import './App.css';

function App() {
  const [searchString, setSearchString] = useState<string>("");
  useEffect(() => {

    getWeatherByLatLon(19.4150109, -98.1410678)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, [])


  function onChangeEntry(dataString: string) {
    setSearchString(dataString)
  }

  function submitSearch() {
    getLatLon(searchString);
  }

  function getLatLon(searchString: string) {
    googleMapsApi(searchString);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
            <input type="text" id="input-text" onChange={(event) => onChangeEntry(event.target.value)} />
            <button id="button" onClick={() => submitSearch()}>Obtener Coordenadas</button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
