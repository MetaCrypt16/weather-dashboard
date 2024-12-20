const apiKey = 'affee9be20538486f9e5d264cad4f241'; 


document.getElementById('search-btn').addEventListener('click', fetchWeather);

function fetchWeather() {

  const cityName = document.getElementById('city-input').value.trim();

 
  if (cityName === '') {
    alert('Please enter a city name');
    return;
  }

  
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

  
  fetch(apiURL)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found');
      }
      return response.json();
    })
    .then(data => displayWeather(data)) 
    .catch(error => {
      console.error(error);
      alert('City not found. Please try again.');
    });
}

function displayWeather(data) {
  const weatherSection = document.getElementById('weather-details');
  const { name, main, weather, wind } = data;

  
  weatherSection.innerHTML = `
    <h2>Weather in ${name}</h2>
    <p><strong>Temperature:</strong> ${main.temp}°C</p>
    <p><strong>Weather:</strong> ${weather[0].description}</p>
    <p><strong>Humidity:</strong> ${main.humidity}%</p>
    <p><strong>Wind Speed:</strong> ${wind.speed} m/s</p>
    <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="Weather Icon">
  `;
}
