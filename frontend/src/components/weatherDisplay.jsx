import React from 'react';

function WeatherDisplay({ weather }) {
    const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    return (
        <div class="weather-display">
            <h2 class="weather-city">{weather.name}</h2>
            <img class="weather-icon" src={iconUrl} alt="Weather icon"></img>
            <p class="weather-description">{weather.weather[0].description}</p>
            <p class="weather-temp">Temperature: {weather.main.temp}°F</p>
            <p class="weather-humidity">Humidity: {weather.main.humidity}%</p>
            <p class="weather-wind">Wind Speed: {weather.wind.speed} m/s</p>
        </div>
    );
}

export default WeatherDisplay;
