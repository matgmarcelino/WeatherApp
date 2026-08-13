export function renderCardsPanel(data, symbol) {
  const cards = document.createElement('div');
  cards.classList.add('cards');

  const speedUnit = symbol === 'F' ? 'mph' : 'km/h';
  const unit = symbol === 'F' ? 'mi' : 'km';

  const feelsLike = createCard('Feels like', `${data.feelslike}°${symbol}`);
  const humidity = createCard('Humidity', `${data.humidity}%`);
  const wind = createCard('Wind', `${data.windspeed} ${speedUnit}`);
  const visibility = createCard('Visibility', `${data.visibility} ${unit}`);

  cards.append(feelsLike, humidity, wind, visibility);
  return cards;
}

function createCard(title, body) {
  const div = document.createElement('div');

  const cardTitle = document.createElement('p');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = title;

  const cardBody = document.createElement('p');
  cardBody.classList.add('card-body');
  cardBody.textContent = body;

  div.append(cardTitle, cardBody);
  return div;
}
