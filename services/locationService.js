const axios = require('axios');

async function getCityByIP(ip) {
    try {
        const response = await axios.get(`https://ipinfo.io/${ip}/json`);
        if (!response.data || !response.data.city) {
            throw new Error(`Location service failed: No city data`);
        }
        console.log(`IP Data: ${JSON.stringify(response.data)}`); // Debugging IP data
        return response.data.city;
    } catch (error) {
        console.error('Location Service Error:', error);
        throw new Error('Could not get location data');
    }
}

module.exports = { getCityByIP };
