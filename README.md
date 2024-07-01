# Web Server API

This project is a simple Node.js web server that exposes an API endpoint to greet a visitor by name, display their IP address, location, and the current temperature in their city.

## Features

- Detects the client's IP address.
- Retrieves the client's city based on the IP address.
- Fetches the current temperature for the detected city.
- Returns a greeting message with the visitor's name, IP address, location, and temperature.

## API Endpoint

**Endpoint:** [GET] `/api/hello?visitor_name={name}`

