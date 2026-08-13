async function getWeatherData(location, metric) {

  const unit = metric ? 'metric' : 'us';

  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&include=hours&key=9GQNAARSUJ5TJUMFBRBJN4QVG&contentType=json`
  );

  if (!response.ok) throw new Error(`Weather request failed: ${response.status}`);

  return response.json();
}

async function getTodaysData(city, unit) {
  try {
    const data = await getWeatherData(encodeURI(city), unit);
    console.log(data.days[0]);
    return data.days[0];
  }
  catch (err) {
    console.error(err.message);
  };
}

export { getTodaysData }
