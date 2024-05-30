import React from "react";
import FormatedDate from "./FormatedDate";
import Icon from "./Icon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="cityName">
        <h1> {props.data.city}</h1>
      </div>
      <div className="row d-flex justify-content-start">
        <div className="col-4">
          <div className="cityName">
            <div className="d-flex weather-temperature">
              <span className="main_icon">
                <Icon
                  code={props.data.icon}
                  alt={props.data.description}
                  width={100}
                  height={100}
                />
              </span>
              <WeatherTemperature celsius={props.data.temp} />
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="cityName">
            <ul id="parameters">
              <li>
                Feels like: <span id="feels_like"></span>{" "}
                {Math.round(props.data.feels)}
                °C
              </li>
              <li className="wind">
                Wind: <span id="wind">{Math.round(props.data.wind)}</span> km/h
              </li>
              <li className="humidity">
                Humidity: <span id="humidity">{props.data.humidity}</span>%
              </li>
            </ul>
          </div>
        </div>
        <div className="col-4 text-end">
          <h2>Weather</h2>
          <h3 id="date">
            <FormatedDate date={props.data.date} />
          </h3>
          <div id="weatherDescr">{props.data.description}</div>
        </div>
      </div>
    </div>
  );
}
