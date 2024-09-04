import React, { useState } from 'react';
import WeatherDisplay from './components/weatherDisplay.jsx';

function App() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
        const response = await fetch(`/api/weather?city=${city}`);
        const data = await response.json();
        setWeather(data);
    };

    return (
        <div>
            <h1>Weather App</h1>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
            />
            <button onClick={fetchWeather}>Get Weather</button>
            {weather && <WeatherDisplay weather={weather} />}
        </div>
    );
}

export default App;
