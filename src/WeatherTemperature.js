import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  return (
    <div className="WeatherTemperature">
      <span id="temperatures">{props.celsius}</span>
      <span id="unit">°C{""}</span>
    </div>
  );
}
