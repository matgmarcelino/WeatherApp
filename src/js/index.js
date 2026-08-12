import "../css/style.css";
import * as weatherApi from './api/weatherApi.js';

const searchBar = document.querySelector('input');
searchBar.addEventListener('keydown', e => {
  if (e.key !== 'Enter') return;

  const city = searchBar.value;
  weatherApi.printWeatherReport(city);
});
