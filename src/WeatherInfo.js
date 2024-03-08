import React from "react";
import Forecast from "./Forecast";
import FormatedDate from "./FormatedDate";
import Icon from "./Icon";
import WeatherTemperature from "./WeatherTemperature";

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
                  <Icon code={props.data.icon} alt={props.data.description} />
                  <WeatherTemperature celsius={props.data.temp} />
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
              <h3 id="date">
                <FormatedDate date={props.data.date} />
              </h3>
            </div>
            <div id="weatherDescr">{props.data.description}</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <Forecast code="10d" />
        </div>
        <div className="col-2">
          <Forecast code="04d" />
        </div>
        <div className="col-2">
          <Forecast code="10d" />
        </div>
        <div className="col-2">
          <Forecast code="01d" />
        </div>
        <div className="col-2">
          <Forecast code="04d" />
        </div>
        <div className="col-2">
          <Forecast code="10d" width={60} height={60} />
        </div>
      </div>
    </div>
  );
}
