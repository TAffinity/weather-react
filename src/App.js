import React from "react";
import WeatherCity from "./WeatherCity";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherCity />
      <footer>
        This project is{" "}
        <a href="https://github.com/TAffinity/weather-react" target="_blank">
          open-sourced on GitHub
        </a>{" "}
        coded by Tatiana Bugulova
      </footer>
    </div>
  );
}

export default App;
