function getWeather() {
  let userInput1 = document.getElementById("input1").value;

  axios.get(`https://api.weatherapi.com/v1/current.json?key=f9ebe07507ef40a6ad054957242510&q=${userInput1}`)
      .then(function(response) {
          let weatherData = response.data;
console.log(response)
          document.getElementById("weatherData1").innerHTML = `<h2>Weather in ${weatherData.location.name}/${weatherData.location.country} <img src="https:${weatherData.current.condition.icon}"></h1>`;
          document.getElementById("weatherData2").innerHTML = `
              <h3>Temperature: ${weatherData.current.temp_c} °C</h3>
              <h3>Condition: ${weatherData.current.condition.text}</h3>
              `;
              document.getElementById("weatherData3").innerHTML = `
              <h3>FeelsLike: ${weatherData.current.feelslike_c} °C</h3>
              <h3>Humidity:   ${weatherData.current.humidity}</h3>
              <h3>Wind:   ${weatherData.current.wind_kph}kph</h3>
              `

      })
      .catch(function(err) {
          console.error("Error fetching weather data:", err);
          document.getElementById("weatherData1").innerHTML = `<p>Error: ${err.message}</p>`;
      });
}
