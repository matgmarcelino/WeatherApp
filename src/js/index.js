import "../css/style.css";
import * as weatherApi from './api/weatherApi.js';
import * as mainPanel from './components/mainPanel.js';
import * as cardsPanel from './components/cardsPanel.js';
import * as forecastPanel from './components/forecastPanel.js';
import * as storage from './api/storage.js';

async function renderPanels(city, metric) {
  const today = await weatherApi.getTodaysData(city, metric);

  const symbol = metric ? 'C' : 'F';

  const main = document.querySelector('main');
  main.innerHTML = '';
  main.classList.remove('edge-case');

  try {
    renderMainPanel(city, today, symbol);
    renderCardsPanel(today, symbol);
    renderForecastPanel(today, symbol);
  } catch {
    handleNoHit(main, city);
  }

}

function renderMainPanel(city, today, symbol) {
  const card = mainPanel.renderMainPanel(city, today, symbol);
  document.querySelector('main').prepend(card);
}

function renderCardsPanel(data, symbol) {
  const cards = cardsPanel.renderCardsPanel(data, symbol);
  document.querySelector('main').append(cards);
}

function renderForecastPanel(data, symbol) {
  const forecast = forecastPanel.renderForecastPanel(data.hours, symbol);
  document.querySelector('main').append(forecast);
}

function handleNoHit(main, city) {
  main.classList.add('edge-case');
  const p = document.createElement('p');
  p.textContent = `${city} did not match a location. Please try again.`;
  main.append(p);
}

function handleNoSearch() {
  const main = document.querySelector('main');
  main.classList.add('edge-case');
  const p = document.createElement('p');
  p.textContent = 'Enter a location to see the current weather!';
  main.append(p);
}


const searchBar = document.querySelector('input');
const button = document.querySelector('button');

let metric = false; // default to fahrenheit
let currCity = storage.load() ? storage.load() : null;
if (!currCity) handleNoSearch();
else {
renderPanels(currCity, metric);
searchBar.value = currCity;
}

button.addEventListener('click', () => {
  metric = !metric;
  if (!currCity) return;

  renderPanels(currCity, metric);
});

searchBar.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    if (!searchBar.value.trim()) return;
    currCity = searchBar.value;
    renderPanels(currCity, metric);
    storage.save(currCity);
  }
});

