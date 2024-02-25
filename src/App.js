import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <Weather defaultCity="Berlin" />
      </div>
      <p className="text-center">
        Created by{" "}
        <a href="https://github.com/tetianamakhlai/new_react_weather_app">
          {" "}
          Tetiana Makhlai{" "}
        </a>
      </p>
    </div>
  );
}
