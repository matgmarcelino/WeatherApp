const ICONS = {
  "clear-day": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" role="img"><title>Clear day</title><circle cx="12" cy="12" r="4.5"/><path d="M12 5.7V3.2M12 18.3v2.5M18.3 12h2.5M5.7 12H3.2M16.46 7.54l1.76-1.76M7.54 16.46l-1.76 1.76M16.46 16.46l1.76 1.76M7.54 7.54L5.78 5.78" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "clear-night": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" role="img"><title>Clear night</title><path d="M9.38 4.98A7.5 7.5 0 1 0 19.02 14.62A7.5 7.5 0 0 1 9.38 4.98Z"/></svg>`,
  "cloudy": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" role="img"><title>Cloudy</title><circle cx="8" cy="14" r="4"/><circle cx="12.5" cy="11.5" r="5"/><circle cx="17" cy="14.5" r="3.5"/><rect x="8" y="14" width="9" height="4"/></svg>`,
  "partly-cloudy-day": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" role="img"><title>Partly cloudy day</title><circle cx="6.5" cy="6.2" r="2.5"/><path d="M6.5 2.5V1.3M2.8 6.2H1.6M3.88 3.58L3.04 2.74M3.88 8.82L3.04 9.66M9.12 3.58L9.96 2.74" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><circle cx="11" cy="14.5" r="3.2"/><circle cx="14.5" cy="12.6" r="4"/><circle cx="18" cy="14.9" r="2.8"/><rect x="11" y="14.5" width="7" height="3.2"/></svg>`,
  "partly-cloudy-night": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" role="img"><title>Partly cloudy night</title><path d="M5.86 2.76A3.5 3.5 0 1 0 9.94 6.84A3.5 3.5 0 0 1 5.86 2.76Z"/><circle cx="11" cy="14.5" r="3.2"/><circle cx="14.5" cy="12.6" r="4"/><circle cx="18" cy="14.9" r="2.8"/><rect x="11" y="14.5" width="7" height="3.2"/></svg>`,
  "rain": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" role="img"><title>Rain</title><circle cx="8" cy="11" r="3.4"/><circle cx="12" cy="9" r="4.2"/><circle cx="15.8" cy="11.4" r="3"/><rect x="8" y="11" width="7.8" height="3.4"/><path d="M7.5 16.4L6.0 19.9M11.7 16.4L10.2 19.9M15.9 16.4L14.4 19.9" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "showers-day": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" role="img"><title>Showers day</title><circle cx="6.5" cy="6.2" r="2.5"/><path d="M6.5 2.5V1.3M2.8 6.2H1.6M3.88 3.58L3.04 2.74M3.88 8.82L3.04 9.66M9.12 3.58L9.96 2.74" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9.5" cy="11.2" r="3.2"/><circle cx="13.2" cy="9.4" r="4"/><circle cx="16.8" cy="11.6" r="2.8"/><rect x="9.5" y="11.2" width="7.3" height="3.2"/><path d="M11.4 16.6L9.9 20.1M15.4 16.6L13.9 20.1" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "showers-night": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" role="img"><title>Showers night</title><path d="M5.86 2.76A3.5 3.5 0 1 0 9.94 6.84A3.5 3.5 0 0 1 5.86 2.76Z"/><circle cx="9.5" cy="11.2" r="3.2"/><circle cx="13.2" cy="9.4" r="4"/><circle cx="16.8" cy="11.6" r="2.8"/><rect x="9.5" y="11.2" width="7.3" height="3.2"/><path d="M11.4 16.6L9.9 20.1M15.4 16.6L13.9 20.1" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "snow": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" role="img"><title>Snow</title><circle cx="8" cy="11" r="3.4"/><circle cx="12" cy="9" r="4.2"/><circle cx="15.8" cy="11.4" r="3"/><rect x="8" y="11" width="7.8" height="3.4"/><path d="M7.8 15.9V20.1M5.97 16.95L9.63 19.05M5.97 19.05L9.63 16.95M12 18.5V22.7M10.17 19.55L13.83 21.65M10.17 21.65L13.83 19.55M16.2 15.9V20.1M14.37 16.95L18.03 19.05M14.37 19.05L18.03 16.95" fill="none" stroke="currentColor" stroke-width="1.05" stroke-linecap="round"/></svg>`,
  "snow-showers-day": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" role="img"><title>Snow showers day</title><circle cx="6.5" cy="6.2" r="2.5"/><path d="M6.5 2.5V1.3M2.8 6.2H1.6M3.88 3.58L3.04 2.74M3.88 8.82L3.04 9.66M9.12 3.58L9.96 2.74" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9.5" cy="11.2" r="3.2"/><circle cx="13.2" cy="9.4" r="4"/><circle cx="16.8" cy="11.6" r="2.8"/><rect x="9.5" y="11.2" width="7.3" height="3.2"/><path d="M11.3 16.3V20.5M9.47 17.35L13.13 19.45M9.47 19.45L13.13 17.35M15.5 16.3V20.5M13.67 17.35L17.33 19.45M13.67 19.45L17.33 17.35" fill="none" stroke="currentColor" stroke-width="1.05" stroke-linecap="round"/></svg>`,
  "snow-showers-night": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" role="img"><title>Snow showers night</title><path d="M5.86 2.76A3.5 3.5 0 1 0 9.94 6.84A3.5 3.5 0 0 1 5.86 2.76Z"/><circle cx="9.5" cy="11.2" r="3.2"/><circle cx="13.2" cy="9.4" r="4"/><circle cx="16.8" cy="11.6" r="2.8"/><rect x="9.5" y="11.2" width="7.3" height="3.2"/><path d="M11.3 16.3V20.5M9.47 17.35L13.13 19.45M9.47 19.45L13.13 17.35M15.5 16.3V20.5M13.67 17.35L17.33 19.45M13.67 19.45L17.33 17.35" fill="none" stroke="currentColor" stroke-width="1.05" stroke-linecap="round"/></svg>`,
  "sleet": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" role="img"><title>Sleet</title><circle cx="8" cy="11" r="3.4"/><circle cx="12" cy="9" r="4.2"/><circle cx="15.8" cy="11.4" r="3"/><rect x="8" y="11" width="7.8" height="3.4"/><path d="M7.8 16.4L6.3 19.9M16.2 16.4L14.7 19.9" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 16.5V20.7M10.17 17.55L13.83 19.65M10.17 19.65L13.83 17.55" fill="none" stroke="currentColor" stroke-width="1.05" stroke-linecap="round"/></svg>`,
  "thunder-rain": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" role="img"><title>Thunder rain</title><circle cx="8" cy="11" r="3.4"/><circle cx="12" cy="9" r="4.2"/><circle cx="15.8" cy="11.4" r="3"/><rect x="8" y="11" width="7.8" height="3.4"/><path d="M14 14.6L9.2 20.1H12.2L11.1 22.8L15.9 17.3H12.9Z"/><path d="M6.8 16.6L5.3 20.1M18 16.6L16.5 20.1" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "thunder-showers-day": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" role="img"><title>Thunder showers day</title><circle cx="6.5" cy="6.2" r="2.5"/><path d="M6.5 2.5V1.3M2.8 6.2H1.6M3.88 3.58L3.04 2.74M3.88 8.82L3.04 9.66M9.12 3.58L9.96 2.74" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9.5" cy="11.2" r="3.2"/><circle cx="13.2" cy="9.4" r="4"/><circle cx="16.8" cy="11.6" r="2.8"/><rect x="9.5" y="11.2" width="7.3" height="3.2"/><path d="M14 14.6L9.2 20.1H12.2L11.1 22.8L15.9 17.3H12.9Z"/></svg>`,
  "thunder-showers-night": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" role="img"><title>Thunder showers night</title><path d="M5.86 2.76A3.5 3.5 0 1 0 9.94 6.84A3.5 3.5 0 0 1 5.86 2.76Z"/><circle cx="9.5" cy="11.2" r="3.2"/><circle cx="13.2" cy="9.4" r="4"/><circle cx="16.8" cy="11.6" r="2.8"/><rect x="9.5" y="11.2" width="7.3" height="3.2"/><path d="M14 14.6L9.2 20.1H12.2L11.1 22.8L15.9 17.3H12.9Z"/></svg>`,
  "fog": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" role="img"><title>Fog</title><circle cx="8" cy="11" r="3.4"/><circle cx="12" cy="9" r="4.2"/><circle cx="15.8" cy="11.4" r="3"/><rect x="8" y="11" width="7.8" height="3.4"/><path d="M4 17.8H14.5M17 17.8H20M4 21.2H6.5M9 21.2H20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`,
  "wind": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" role="img"><title>Wind</title><path d="M3 6H12A2 2 0 1 0 10 4M3 12H16.5A2.2 2.2 0 1 1 14.3 14.2M3 17.8H9.5A1.9 1.9 0 1 1 7.6 19.7" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`
};

const TONES = {
  "clear-day": "--warm",
  "clear-night": "--night",
  "cloudy": "--cool",
  "partly-cloudy-day": "--warm",
  "partly-cloudy-night": "--night",
  "rain": "--rain",
  "showers-day": "--rain",
  "showers-night": "--rain",
  "snow": "--cool",
  "snow-showers-day": "--cool",
  "snow-showers-night": "--cool",
  "sleet": "--cool",
  "thunder-rain": "--storm",
  "thunder-showers-day": "--storm",
  "thunder-showers-night": "--storm",
  "fog": "--text-muted",
  "wind": "--text-muted"
};

const FALLBACK = "cloudy";

export function weatherIcon(key) {
  return ICONS[key] ?? ICONS[FALLBACK];
}

export function weatherTone(key) {
  return `var(${TONES[key] ?? "--cool"})`;
}

export function renderWeatherIcon(key, { label = "" } = {}) {
  const el = document.createElement("span");
  el.innerHTML = weatherIcon(key);
  const svg = el.firstElementChild;
  svg.style.color = weatherTone(key);
  if (label) {
    svg.setAttribute("aria-label", label);
  } else {
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("role", "presentation");
  }
  return svg;
}

export const WEATHER_ICON_KEYS = Object.keys(ICONS);
