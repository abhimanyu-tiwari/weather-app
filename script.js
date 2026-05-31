const apiKey = "eec52250a634e463e7d1658df48912db"; // Replace with your OpenWeatherMap API key

document.getElementById('searchBtn').addEventListener('click', async () => {
  const city = document.getElementById('cityInput').value.trim();
  if (!city) return;

  const result = document.getElementById('weatherResult');
  result.innerHTML = 'Loading...';

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      result.innerHTML = 'City not found';
      return;
    }

    result.innerHTML = `
      <h2>${data.name}</h2>
      <p>🌡 Temperature: ${data.main.temp} °C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬 Wind: ${data.wind.speed} m/s</p>
      <p>☁ ${data.weather[0].description}</p>
    `;
  } catch (e) {
    result.innerHTML = 'Error fetching weather data';
  }
});
