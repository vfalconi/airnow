# airnow.js

airnow is a module for making HTTP requests to the airnowapi.org webservices API.

## Installation

npm install airnow --save

## Quick Examples

```javascript
var airnow = require('airnow');

var client = airnow({ apiKey: 'my airnow.org key' });

// get the forecast by zip
client.getForecastByZipCode({ zipCode: "53703" }, function(err, forecast){
	
});

// get the forecast by latitude and longitude
client.getForecastByLatLong({ latitude: 39.0509, longitude: -121.4453}, function(err, forecast){
	
});

// get the observations by zip
client.getObservationsByZipCode({ zipCode: "53703" }, function(err, observations){
	
});

// get the observations by latitude and longitude
client.getObservationsByLatLng({ latitude: 39.0509, longitude:-121.4453 }, function(err, observations){
	
});
```

## Features

1. Supports forecast endpoints
2. Supports current observation endpoints
3. Brute force retries of the HTTP calls

## Contributing

The more PRs the merrier. :-)