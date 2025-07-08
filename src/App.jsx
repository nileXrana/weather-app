import React, { useState, useEffect } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("Delhi");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
    );
    const data = await res.json();
    setWeather(data);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div>
      <input value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={fetchWeather}>Get Weather</button>

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.main.temp}°C</p>
          <p>{weather.weather[0].main}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
