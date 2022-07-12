import classnames from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { googleMapsApi } from './apis/googleMapsApi';
import { getWeatherByLatLon } from './apis/weatherApi';
import { ThemeContext } from './context/ThemeContext';
import './styles/styles.scss';

const App = () => {
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
    <main className={classnames(theme, 'weather')}>
      <section className="weather__container">
        <header className="weather__header">
          <h3>Component: Toggle theme</h3>
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            Cambiar tema
          </button>
        </header>
        <section className="weather__search">
          <h3>Component: Input to search</h3>
          <div>
            <input type="text" onChange={(event) => setSearchString(event.target.value)} />
            <button onClick={() => getLatLon(searchString)}>Obtener Coordenadas</button>
          </div>
        </section>
        <section className="weather__results">Component: Show results</section>
      </section>
    </main>
  );
};

export default App;
