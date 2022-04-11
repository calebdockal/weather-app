import React, { useState, useEffect } from "react";
import "./App.css";
import Weather from "./components/Weather";

// api key url with api key at the end =

function App() {
  const [data, setData] = useState([]);
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      await fetch(
        "http://api.weatherapi.com/v1/current.json?key=1ad6890dd3874deaa8821237221501&q=30907"
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log("your result is " + result.location.name);
        });
    };

    fetchData();
  }, [lat, long]);

  return (
    <div className="App">
      <div>
        <div className="header" target="_blank">
          <h1>Weather</h1>
          <h1>Caleb</h1>
        </div>
      </div>

      {typeof data.location != "undefined" ? (
        <Weather data={data} />
      ) : (
        <div>
          <h1>Something Went Wrong</h1>
        </div>
      )}
    </div>
  );
}

export default App;
