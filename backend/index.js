import express from 'express';
import fetch from 'node-fetch'
import cors from 'cors';
import dotenv from 'dotenv';
import { getWeatherByCity } from "./services/weatherService.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const apiKey = process.env.OPENWEATHERMAP_API_KEY;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    console.log('Root is hit')
    res.send('Welcome to the Weather App!');
  });

app.get('/api/weather/:city', async (req, res) => {
  console.log('Root is hit')
  try {
    const { city } = req.params;
    const weatherData = await getWeatherByCity(city);
    res.json(weatherData);
  } catch (error) {
      res.status(500).json({ error: 'Unable to fetch weather data' });
  }
});

app.get('/api/weather', async (req, res) => {
  console.log('Root is hit')
  const { city } = req.query;
  console.log(city);

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();
    res.json(data);
    console.log(`This is the data keys: ${Object.keys(data)}`);
    console.log(`This is the data values: ${Object.values(data)}`)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
