import axios from "axios";

async function getCoordinates(city) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.OPENWEATHERMAP_API_KEY}`;
    const response = await axios.get(url);
    return response.data[0];
}

export { getCoordinates };
