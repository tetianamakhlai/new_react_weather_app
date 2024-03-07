import React from "react";
import Forecast from "./Forecast";
import FormatedDate from "./FormatedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="cityName">
        <h1> {props.data.city}</h1>
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
                  <span id="temperatures">{Math.round(props.data.temp)}</span>
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
                    {Math.round(props.data.feels)}
                    °C
                  </li>
                  <li>
                    Wind:
                    <span id="wind">{Math.round(props.data.wind)}</span> km/h
                  </li>
                  <li>
                    Humidity: <span id="humidity">{props.data.humidity}</span>%
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
              <h3 id="date"></h3>
              <FormatedDate date={props.data.date} />
            </div>
            <div id="weatherDescr">{props.data.description}</div>
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
}
