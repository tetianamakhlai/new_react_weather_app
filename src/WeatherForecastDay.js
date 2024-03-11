import React from "react";
import Icon from "./Icon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="weather-forecast-day">
      <div id="WeatherForecast-day">{day()}</div>
      <Icon
        code={props.data.weather[0].icon}
        width={props.width}
        height={props.height}
      />
      <div className="WeatherForecast-temperatures">
        <span id="weather-forecast-max"> {maxTemperature()} </span>
        <span id="weather-forecast-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
