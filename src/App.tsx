import React, {useEffect} from 'react';
import { getWeatherByLatLon } from "./weatherApi";
import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(() => {
    getWeatherByLatLon(19.4150109, -98.1410678)
        .then(res => console.log(res))
        .catch(err => console.log(err));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
