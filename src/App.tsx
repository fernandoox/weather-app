import classnames from 'classnames';
import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { CityContext } from "./context/CityContext";
import SearchingInput from "./components/SearchingInput/SearchingInput";
import './styles/styles.scss';

const App = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { city } = useContext(CityContext);

  return (
    <main className={classnames(theme, 'weather')}>
      <section className="weather__container">
        <header className="weather__header">
          <h3>Component: Toggle theme</h3>
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light') }>
            Cambiar tema
          </button>
        </header>
        <SearchingInput />
        <section className="weather__results">
          Component: Show results
          <ul>
            <li>Ciudad: {city.address}</li>
            <li>Coordenadas: lat={city.coord?.lat} lon={city.coord?.lon}</li>
            <li>Clima: {city.weatherInfo?.weather[0].description}</li>
          </ul>
        </section>
      </section>
    </main>
  );
};

export default App;