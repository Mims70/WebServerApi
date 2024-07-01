const express = require('express');
const router = express.Router();
const locationService = require('../services/locationService');
const weatherService = require('../services/weatherService');

router.get('/hello', async (req, res) => {
    const visitor_name = req.query.visitor_name;
    const client_ip = req.ip;

    try {
        const city = await locationService.getCityByIP(client_ip);
        const temperature = await weatherService.getTemperatureByCity(city);

        res.json({
            client_ip: client_ip,
            location: city,
            greeting: `Hello, ${visitor_name}!, the temperature is ${temperature} degrees Celsius in ${city}`
        });
    } catch (error) {
        console.error('Error occurred:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

module.exports = router;
