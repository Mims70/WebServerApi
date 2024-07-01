const axios = require('axios');

async function getTemperatureByCity(city) {
    try {
        const apiKey = process.env.WEATHER_API_KEY;
        if (!apiKey) {
            throw new Error('API key is missing');
        }
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        if (!response.data.current) {
            throw new Error('Invalid weather data');
        }
        return response.data.current.temp_c;
    } catch (error) {
        console.error('Weather Service Error:', error);
        throw new Error('Could not get weather data');
    }
}

module.exports = { getTemperatureByCity };
