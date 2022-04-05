import React, { useState, useEffect } from "react";
import "../App.css";

const Weather = (params) => {
  const [newLocationData, setNewLocationData] = useState([]);
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    console.log("your location is: " + params.data);
    setNewLocationData(params.data.location);
    console.log(newLocationData);
    setWeatherData(params.data.current);
    console.log(weatherData);
  });
  return (
    <div className="card-custom">
      <div className="card-custom-head">
        <h1>{newLocationData.name}</h1>
        <h1>{newLocationData.localtime}</h1>
      </div>

      <div className="card-body">
        <div className="temp">Current Temp: {weatherData.temp_f}</div>
        <div className="temp">Feels Like: {weatherData.feelslike_f}</div>
        <div className="temp">Humidity: {weatherData.humidity}</div>
        <div className="temp">Rain (inches): {weatherData.precip_in}</div>
      </div>
    </div>
  );
};

export default Weather;
