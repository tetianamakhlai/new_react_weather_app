import React from "react";
import "./App.css";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <div className="conrainer">
            <form className="mb-4" id="search-form">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder=""
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
            <h1> Kyiv</h1>
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
                      <span id="temperatures"></span>
                      <span id="Celsium">
                        <a href="" className="active">
                          °C|
                        </a>
                      </span>
                      <span id="units">
                        {" "}
                        <a href="" id="fahrenheit-link">
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
                        Feels like: 10<span id="feels_like"></span>°C
                      </li>
                      <li>
                        Wind:<span id="wind"></span> 56 km/h
                      </li>
                      <li>
                        Humidity: <span id="humidity">60</span>%
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
                  <h3 id="date">22.02.24</h3>
                </div>
                <div id="weatherDescr">Cloudy</div>
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
      </div>
    </div>
  );
}
