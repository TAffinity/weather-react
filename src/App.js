import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
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
