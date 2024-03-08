import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span id="temperatures">{props.celsius}</span>
        <span id="unit">
          °C|{""}
          <button onClick={convertToFahrenheit}>°F</button>
        </span>
      </div>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <div className="WeatherTemperature">
        <span id="temperatures">{fahrenheit}</span>
        <span id="unit">
          <button onClick={convertToCelsius}>°C</button>|{""}
          °F
        </span>
      </div>
    );
  }
}
