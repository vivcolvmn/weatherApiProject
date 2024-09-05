import React, { useState } from 'react';
import WeatherDisplay from './components/weatherDisplay.jsx';
import './App.css';

function App() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
        const response = await fetch(`/api/weather?city=${city}`);
        const data = await response.json();
        setWeather(data);
        console.log(`this is the data keys: ${Object.keys(data)}`);
        console.log(`this is the data values: ${Object.values(data)}`);
    };

    return (
        <div class="weather-app">
            <h1 class="app-title">Basically A Window</h1>
            <input
                type="text"
                class="city-input"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
            />
            <button class="weather-button" onClick={fetchWeather}>Get Weather</button>
            {weather && <WeatherDisplay weather={weather} />}
        </div>
    );
}

export default App;
