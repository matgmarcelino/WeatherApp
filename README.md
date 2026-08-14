# Weather

A small vanilla-JavaScript weather app. Search for a city and get the current
conditions, four at-a-glance stats, and an hourly forecast — with a °F/°C
toggle and automatic light/dark theming. No frameworks, no UI libraries, no
icon packs: the DOM, the Fetch API, and hand-rolled inline SVG.

Data comes from the [Visual Crossing Timeline API](https://www.visualcrossing.com/weather-api).

## Features

- **City search** — type a location and press <kbd>Enter</kbd>. Anything the
  Visual Crossing geocoder understands works: `Fremont`, `Fremont, CA`,
  `94538`, `London, UK`.
- **Unit toggle** — one button flips the whole UI between Fahrenheit
  (`unitGroup=us`: °F, mph, miles) and Celsius (`unitGroup=metric`: °C, km/h,
  km). The current city re-renders in place.
- **Remembers your last city** — the search term is written to `localStorage`
  and restored on the next visit, so the app opens on your location instead of
  an empty state.
- **Current conditions** — location, weather icon, temperature, a text summary,
  and the day's high/low.
- **Stat cards** — feels-like, humidity, wind speed, visibility.
- **Hourly forecast** — the next few hours of today, each with its own icon and
  temperature.
- **17 hand-drawn SVG icons**, each mapped to a tone color (warm, cool, rain,
  night, storm) so a thunderstorm and a clear afternoon don't read the same at
  a glance. Unknown icon keys fall back to `cloudy`.
- **Light and dark themes** via `prefers-color-scheme` — the full palette is
  redefined in CSS custom properties, no JS involved.
- **Responsive** down to 340px, with fluid `clamp()`-based spacing and layout
  breakpoints at 900px, 640px, and 340px.
- **Accessible icons** — decorative SVGs are `aria-hidden`, and
  `renderWeatherIcon()` takes an optional `label` to expose one to screen
  readers instead.

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- A free [Visual Crossing API key](https://www.visualcrossing.com/weather-api)
  (1000 records/day on the free tier)

### Install and run

```bash
git clone <your-repo-url>
cd <your-repo>
npm install
npm run start     # dev server with live reload
```

Then open the URL the dev server prints (usually `http://localhost:8080`).

To produce a production build in `dist/`:

```bash
npm run build
```

### API key

The key currently lives inline in the request URL in
`src/js/api/weatherApi.js`. Swap in your own before running the app:

```js
const response = await fetch(
  `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&include=hours&key=YOUR_KEY_HERE&contentType=json`
);
```

> **Heads up:** a key committed to source is visible to anyone who reads the
> repo or opens devtools. For anything beyond local tinkering, move it into an
> environment variable injected at build time (webpack's `DefinePlugin` or
> `dotenv-webpack`), add `.env` to `.gitignore`, and rotate any key that has
> already been pushed. Because this app calls the API straight from the
> browser, the only way to fully hide the key is to proxy requests through a
> small backend.

## Project structure

```
src/
├── index.html              # shell: header, search input, unit button, empty <main>
├── assets/
│   └── icon.svg            # app/favicon mark
├── css/
│   ├── reset.css           # modern CSS reset
│   └── style.css           # design tokens, layout, light/dark, breakpoints
└── js/
    ├── index.js            # entry point: state, events, render orchestration
    ├── api/
    │   ├── weatherApi.js   # Visual Crossing fetch + today's slice
    │   ├── storage.js      # localStorage save/load for the last city
    │   └── weatherIcons.js # inline SVG set + tone map + render helper
    └── components/
        ├── mainPanel.js    # location, icon, temp, conditions, high/low
        ├── cardsPanel.js   # feels-like / humidity / wind / visibility
        └── forecastPanel.js# hourly strip
```

## How it works

`index.js` holds all the mutable state — the current city and a `metric`
boolean — and owns every event listener. Everything else is a pure-ish module:
the `api/` files talk to the outside world, and each `components/` file exports
a function that takes data and returns a detached DOM node. Nothing but
`index.js` touches `document.querySelector('main')`.

A render pass looks like this:

1. `weatherApi.getTodaysData(city, metric)` fetches the timeline for the
   location and returns `data.days[0]` — today's summary plus its 24-entry
   `hours` array.
2. `<main>` is emptied.
3. Each panel module builds its subtree from that one payload and gets appended
   in order: main panel, stat cards, forecast.
4. If anything in step 3 throws — which is what happens when the fetch failed
   and `today` came back `undefined` — the catch swaps in a friendly
   "did not match a location" message instead.

The unit toggle doesn't convert anything client-side; it re-requests the data
with a different `unitGroup`, so temperatures, wind speed, and visibility all
arrive in the right units and the symbol (`°F`/`°C`) is threaded down to the
components as a string.

Icons are stored as SVG source strings keyed by Visual Crossing's `icon` field
(`clear-day`, `thunder-showers-night`, `fog`, …). `renderWeatherIcon()` parses
one into a real element, applies its tone via `svg.style.color` — the paths use
`fill="currentColor"`, so a single assignment colors the whole glyph — and sets
the appropriate ARIA attributes.

## Acknowledgements

- Weather data by [Visual Crossing](https://www.visualcrossing.com/).
- CSS reset adapted from [Josh Comeau](https://www.joshwcomeau.com/css/custom-css-reset/)
  and [Andy Bell](https://piccalil.li/blog/a-more-modern-css-reset/).
