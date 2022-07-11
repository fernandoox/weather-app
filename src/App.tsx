import { useContext, useEffect, useState } from 'react';
import { googleMapsApi } from './apis/googleMapsApi';
import { getWeatherByLatLon } from './apis/weatherApi';
import './App.css';
import { ThemeContext } from './context/ThemeContext';
import './css/_darkMode.scss';
import logo from './logo.svg';

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [searchString, setSearchString] = useState<string>('');
  useEffect(() => {
    getWeatherByLatLon(19.4150109, -98.1410678)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  const getLatLon = (searchString: string) => {
    googleMapsApi(searchString);
  };

  return (
    <div className={theme}>
      <div className="background">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="text">
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <div>
            <input
              type="text"
              id="input-text"
              onChange={(event) => setSearchString(event.target.value)}
            />
            <button id="button" onClick={() => getLatLon(searchString)}>
              Obtener Coordenadas
            </button>
          </div>
          <div>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
              Cambiar tema
            </button>
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
    </div>
  );
}

export default App;
