const API_KEY = '9GQNAARSUJ5TJUMFBRBJN4QVG';

async function getWeatherData(location) {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&include=alerts&key=${API_KEY}&contentType=json`
    );

    if (!response.ok) throw new Error(`Weather request failed: ${response.status}`);

    console.log(response.json())
    return response.json();

}

function printWeatherReport(city) {
  try {
    getWeatherData(encodeURI(city)).then((data) => {
      const today = data.days[0];
      console.log(`
      Location: ${city}
      Date: ${today.datetime}
      Temperature: ${today.temp}
      Feels Like: ${today.feelslike}
      Conditions: ${today.conditions}
      Description: ${today.description}
      `
      );
  })}
  catch (err) {
    console.error(err.message);
  };
}

export { printWeatherReport }
