import * as weatherIcons from '../api/weatherIcons.js';

export function renderForecastPanel(dataArray, symbol) {
  const forecastPanel = document.createElement('div');
  forecastPanel.classList.add('forecast-panel');

  const forecastDays = document.createElement('div');
  forecastDays.classList.add('forecast-days');

  const panelsCount = appendDayPanels(forecastDays, dataArray, symbol);

  const forecastText = document.createElement('div');
  forecastText.classList.add('forecast-text');
  forecastText.textContent = `Next ${panelsCount} hours`;

  forecastPanel.append(forecastText, forecastDays);

  return forecastPanel;
}

function appendDayPanels(div, data, symbol) {
  const currentHour = (new Date()).getHours();
  const blocker = currentHour + 6 <= 24 ? currentHour + 6 : 24;
  for (let i = currentHour; i < blocker; i++) {
    div.append(createDayPanel(data[i], symbol));
  }

  return blocker - currentHour;
}

function createDayPanel(data, symbol) {
  const div = document.createElement('div');
  div.classList.add('forecast-day');

  const head = document.createElement('div');
  head.classList.add('head');
  head.textContent = toHourLabel(data.datetime);

  const svg = weatherIcons.renderWeatherIcon(data.icon);

  const footer = document.createElement('div');
  footer.classList.add('footer');
  footer.textContent = `${data.temp}°${symbol}`;

  div.append(head, svg, footer);
  return div;
}

export function toHourLabel(datetime) {
  const curHour = datetime.split(':')[0];
  if (curHour === 0) return '12 AM';
  if (curHour > 12) return `${curHour - 12} PM`;
  return `${curHour} AM`;
}

