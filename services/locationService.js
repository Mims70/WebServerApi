const axios = require('axios');

async function getCityByIP(ip) {
    const reservedIPs = ['127.0.0.1', '::1', '::ffff:127.0.0.1']; 
    if (reservedIPs.includes(ip)) {
        console.log('Reserved IP range, using default location for testing.');
        return 'New York'; 
    }

    try {
        const response = await axios.get(`http://ip-api.com/json/${ip}`);
        if (response.data.status !== 'success') {
            throw new Error(`Location service failed: ${response.data.message}`);
        }
        return response.data.city;
    } catch (error) {
        console.error('Location Service Error:', error);
        throw new Error('Could not get location data');
    }
}

module.exports = { getCityByIP };
