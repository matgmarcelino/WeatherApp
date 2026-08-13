export function save(currCity) {
  localStorage.setItem('currCity', currCity);
}

export function load() {
  const currCity = localStorage.getItem('currCity');
  if (!currCity) return;
  return currCity;
}
