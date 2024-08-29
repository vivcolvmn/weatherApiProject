import express from "express";
// import router from express.Router();
import weatherService from "../services/weatherService.js"

const router = express.Router()
const weather = router.get('/:city', async (req, res) => {
    try {
        const { city } = req.params;
        const weatherData = await weatherService.getWeatherByCity(city);
        res.json(weatherData);
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch weather data' });
    }
});

export default weather;
