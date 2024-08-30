import fetch from 'node-fetch';

export default async (req, res) => {
    const { city } = req.query;
    const apiKey = process.env.WEATHER_API_KEY;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const data = await response.json();
    return res.status(200).json(data);
};