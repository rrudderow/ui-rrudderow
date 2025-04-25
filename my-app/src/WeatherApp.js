import React from 'react';
import './App.css'; // Import the CSS file

function WeatherApp() {
  // Predefined weather data for New York
  const weather = {
    city: 'New York',
    temperature: 25,
    high: 30,
    low: 20,
    description: 'Sunny',
    precipitation: '10%',
    uvIndex: 5,
    humidity: '65%',
    windSpeed: '15 km/h',
    visibility: '10 km',
  };

  return (
    <div className="container">
      {/* Banner Section */}
      <div className="banner">
        <div className="city-info">
          <h1 className="city-name">{weather.city}</h1>
          <p className="temp-text">{weather.temperature}°C High: {weather.high}°C | Low: {weather.low}°C</p>
          <p className="description">{weather.description}</p>
        </div>
      </div>

      {/* Weather Information Section */}
      <div className="weather-info">
        <div className="info-box">
          <h3 className="info-title">Weather Type</h3>
          <p className="info-text">{weather.description}</p>
        </div>

        <div className="info-box">
          <h3 className="info-title">Chance for Precipitation</h3>
          <p className="info-text">{weather.precipitation}</p>
        </div>

        <div className="info-box">
          <h3 className="info-title">UV Index</h3>
          <p className="info-text">{weather.uvIndex}</p>
        </div>

        <div className="info-box">
          <h3 className="info-title">Temperature</h3>
          <p className="info-text">{weather.temperature}°C</p>
          <p className="high-low-text">High: {weather.high}°C | Low: {weather.low}°C</p>
        </div>

        <div className="info-box">
          <h3 className="info-title">Humidity</h3>
          <p className="info-text">{weather.humidity}</p>
        </div>

        <div className="info-box">
          <h3 className="info-title">Wind Speed</h3>
          <p className="info-text">{weather.windSpeed}</p>
        </div>

        <div className="info-box">
          <h3 className="info-title">Visibility</h3>
          <p className="info-text">{weather.visibility}</p>
        </div>

        <div className="info-box">
          <h3 className="info-title">High Temperature</h3>
          <p className="info-text">{weather.high}°C</p>
        </div>

        <div className="info-box">
          <h3 className="info-title">Low Temperature</h3>
          <p className="info-text">{weather.low}°C</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
