function getWeather() {
  let userInput1 = document.getElementById("input1").value;
  let body = document.getElementById("body");

  // Log user input to check if it is being captured
  console.log("User Input:", userInput1);

  axios.get(`https://api.weatherapi.com/v1/current.json?key=f9ebe07507ef40a6ad054957242510&q=${userInput1}`)
  .then(function (response) {
      let weatherData = response.data;
      console.log("Weather Data Response:", weatherData);
      
      document.getElementById("weatherData1").innerHTML = `<h2>Weather in ${weatherData.location.name}/${weatherData.location.country} <img src="https:${weatherData.current.condition.icon}" alt="Weather Icon"></h2>`;
      document.getElementById("weatherData2").innerHTML = `
          <h3>Temperature: ${weatherData.current.temp_c} °C</h3>
          <h3>Condition: ${weatherData.current.condition.text}</h3>
      `;
      document.getElementById("weatherData3").innerHTML = `
          <h3>Feels Like: ${weatherData.current.feelslike_c} °C</h3>
          <h3>Humidity: ${weatherData.current.humidity}%</h3>
          <h3>Wind: ${weatherData.current.wind_kph} kph</h3>
      `;
      
      let conditionValue = weatherData.current.condition.text.toLowerCase();
      console.log("Condition Value:", conditionValue);

      const weatherConditions = {
        "clear": "images/clear.jpg",
        "partly cloudy": "images/partly-cloudy.jpg",
        "partly sunny": "images/partly-sunny.jpg",
        "overcast": "images/overcast.jpeg",
        "sunny": "images/sunny.jpg",
        "mist": "images/mist.jpg",
        "fog": "images/fog.jpg",
        "rain": "images/rain.jpg",
        "showers": "images/showers.jpg",
        "thunderstorms": "images/thunderstorm.jpg",
        "snow": "images/snow.jpg",
        "sleet": "images/sleet.jpg",
        "hail": "images/hail.jpg",
        "windy": "images/windy.jpg",
        "dust": "images/dust.jpg",
        "sand": "images/sand.jpg",
        "blizzard": "images/blizzard.jpg",
        "freezing rain": "images/freezing-rain.jpg",
        "tornado": "images/tornado.jpg",
        "hurricane": "images/hurricane.jpg",
        "tropical storm": "images/tropical-storm.jpg",
        "squall": "images/squall.jpg",
        "frost": "images/frost.jpg",
        "chilly": "images/chilly.jpg",
        "hot": "images/hot.jpg",
        "warm": "images/warm.jpg",
        "cool": "images/cool.jpg",
        "drizzle": "images/drizzle.jpg",
        "heavy rain": "images/heavy-rain.jpg",
        "heavy snow": "images/heavy-snow.jpg",
        "light snow": "images/light-snow.jpg",
        "rain and snow": "images/rain-and-snow.jpg",
        "rain and sleet": "images/rain-and-sleet.jpg",
        "flurries": "images/flurries.jpg",
        "isolated thunderstorms": "images/isolated-thunderstorms.jpg",
        "cloudy": "images/cloudy.jpg",
        "scattered clouds": "images/scattered-clouds.jpg",
        "tropical storm warning": "images/tropical-storm-warning.jpg",
        "tornado watch": "images/tornado-watch.jpg",
        "severe thunderstorm watch": "images/severe-thunderstorm-watch.jpg",
        "dense fog advisory": "images/dense-fog-advisory.jpg",
        "flood warning": "images/flood-warning.jpg",
        "wind advisory": "images/wind-advisory.jpg",
        "high wind warning": "images/high-wind-warning.jpg",
        "heat advisory": "images/heat-advisory.jpg",
        "cold advisory": "images/cold-advisory.jpg",
        "air quality advisory": "images/air-quality-advisory.jpg",
        "smoke": "images/smoke.jpg",
    };
    
      body.style.backgroundImage = `url('${weatherConditions[conditionValue] || 'images/default.jpg'}')`;
  })
  .catch(function (err) {
      console.error("Error fetching weather data:", err);
      document.getElementById("weatherData1").innerHTML = `<p>Error: ${err.message}</p>`;
  });
}
