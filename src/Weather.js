import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState(``);
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);

  function showWeatherResponce(response) {
    let city = response.data.name;
    let temperature = Math.round(response.data.main.temp);
    let description = response.data.weather[0].description;
    let humidity = response.data.main.humidity;
    let icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    let wind = response.data.wind.speed;
    setLoaded(true);
    setWeather({ city, temperature, description, humidity, wind, icon });
  }

  function citySubmit(event) {
    event.preventDefault();
    let apiKey = "ca0db41e2e878c74a1dfc7ffece370d4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeatherResponce);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={citySubmit}>
      <input type="search" placeholder="Enter a city.." onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded === true) {
    return (
      <div className="Weather">
        {form}
        <h1>{weather.city}</h1>
        <ul>
          <li>Temperature: {weather.temperature}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind} km/h</li>
          <img src={weather.icon} alt={weather.description} />
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
