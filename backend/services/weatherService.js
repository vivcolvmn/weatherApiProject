import axios from 'axios';
import { getCoordinates } from './geocodingService.js'

async function getWeatherByCity(city) {
    const { lat, lon } = await getCoordinates(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.OPENWEATHERMAP_API_KEY}`;
    const response = await axios.get(url);
    return response.data;
}

export { getWeatherByCity };
