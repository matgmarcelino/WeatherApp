import * as weatherIcons from '../api/weatherIcons.js';

export function renderMainPanel(location, data, symbol) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardTitle = document.createElement('div');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = formatLocation(location);

  const cardBody = createCardBody(data.icon, data.temp, symbol);

  const cardFooter = createCardFooter(data.conditions, data.tempmax, data.tempmin, symbol);

  card.append(cardTitle, cardBody, cardFooter);
  return card;
}

function formatLocation(location) {
  return location.split(' ').map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
}

function createCardBody(iconKey, temp, symbol) {
  const body = document.createElement('div');
  body.classList.add('card-body');

  const svg = weatherIcons.renderWeatherIcon(iconKey);

  const p = document.createElement('p');
  p.textContent = `${temp}°${symbol}`;

  body.append(svg, p);
  return body;
}

function createCardFooter(conditions, tempmax, tempmin, symbol) {
  const footer = document.createElement('div');
  footer.classList.add('card-footer');

  const cond = document.createElement('div');
  cond.classList.add('conditions');
  cond.textContent = conditions;

  const temp = document.createElement('div');
  temp.classList.add('temp');
  temp.innerHTML = `High <span class="high">${tempmax}°${symbol}</span> · Low <span class="low">${tempmin}°${symbol}</span>`;

  footer.append(cond, temp);
  return footer;
}
