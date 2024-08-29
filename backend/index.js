import express from 'express';
import fetch from 'node-fetch'
import cors from 'cors';
import dotenv from 'dotenv';
import weather from './routes/weather.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const apiKey = process.env.OPENWEATHERMAP_API_KEY;
console.log(apiKey);

app.use(express.json());
app.use(cors());
app.use('/', weather);

app.get('/', (req, res) => {
    res.send('Welcome to the Weather App!');
  });


app.get('/api/weather', async (req, res) => {
  const { city } = req.query;
  console.log(city);

  try {

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();
    console.log(`This is the data: ${data}`)
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
