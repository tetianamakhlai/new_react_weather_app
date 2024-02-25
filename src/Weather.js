import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function ShowWeather(response) {
    setWeatherData({
      ready: true,
      date: "22 Sept 24",
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      feels: response.data.main.feels_like,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather-app">
        <div className="conrainer">
          <form className="mb-4" id="search-form">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="form-control"
                  id="cityInput"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="cityName">
          <h1> {weatherData.city}</h1>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <div className="cityName">
                  <div className="d-flex weather-temperature">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3222/3222691.png"
                      alt="Clear"
                      id="icon"
                    />
                    <span id="temperatures">
                      {Math.round(weatherData.temp)}
                    </span>
                    <span id="Celsium">
                      <a
                        href="https://www.google.com/search?q=google+weather&rlz=1C5CHFA_enDE970DE970&oq=google+weather&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIMCAEQABgUGIcCGIAEMgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMgcICRAAGIAE0gEINDMwM2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
                        className="active"
                      >
                        °C|
                      </a>
                    </span>
                    <span id="units">
                      {" "}
                      <a
                        href="https://www.google.com/search?q=google+weather&rlz=1C5CHFA_enDE970DE970&oq=google+weather&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIMCAEQABgUGIcCGIAEMgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMgcICRAAGIAE0gEINDMwM2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
                        id="fahrenheit-link"
                      >
                        {" "}
                        °F
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="cityName">
                  <ul id="parameters">
                    <li>
                      Feels like: <span id="feels_like"></span>{" "}
                      {Math.round(weatherData.feels)}
                      °C
                    </li>
                    <li>
                      Wind:<span id="wind">{Math.round(weatherData.wind)}</span>{" "}
                      km/h
                    </li>
                    <li>
                      Humidity:{" "}
                      <span id="humidity">{weatherData.humidity}</span>%
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-6 info">
                <h2>Weather</h2>
                <h3 id="date">{weatherData.date}</h3>
              </div>
              <div id="weatherDescr">{weatherData.description}</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <Forecast />
          </div>
          <div className="col-2">
            <Forecast />
          </div>
          <div className="col-2">
            <Forecast />
          </div>
          <div className="col-2">
            <Forecast />
          </div>
          <div className="col-2">
            <Forecast />
          </div>
          <div className="col-2">
            <Forecast />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "a33b693cfbefd271b0ed075f9a8f65f0";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(ShowWeather);
    return "Loading...";
  }
}
