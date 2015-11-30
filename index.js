/*jslint node: true */
/** @module airnow/client */
var request 	= require('request');
var async 		= require('async');
var _			= require('underscore');
var packageJson = require('./package.json');

module.exports = function(options){
	var apiKey = options.apiKey;
	
	// build a base request
	var baseRequest = request.defaults({
		baseUrl: "http://www.airnowapi.org/aq/",
		uri: "",
		timeout: 60000,
		method: "GET",
		gzip: true,
		headers: {
			"User-Agent": "npm-airnow/" +packageJson.version
		}
	});
	
	return {
		
		/** callback for getForecastByZipCode
		* @callback module:airnow/client~getForecastByZipCodeCallback
		* @param {Object} [err] error calling airnow
		* @param {body} [result] forecast
		*/
		/**
		* getForecastByZipCode
		* @param {String} zipCode Zip code
		* @param {Date} [date=current] Date of forecast in YYYY-mm-dd format.
		* @param {String=text/csv,application/json,application/xml} [format=application/json] format of the payload file returend.
		* @param {Number} [distance] If no reporting area is associated with the specified Zip Code, return a forecast from a nearby reporting area within this distance (in miles).
		* @param {module:airnow/client~getForecastByZipCodeCallback} callback callback
		*/
		getForecastByZipCode: function(options, callback){
			
			// set the correct defaults
			_.defaults(options, {
				api_key: apiKey,
				format: "application/json"
			});
			
			// send with brute force retry
			async.retry({ times: 5, interval: 100 }, function(callback){
				baseRequest({
					uri: "forecast/zipCode/?",
					qs: options,
					json: options.format === "application/json"
				}, function(err, message, body){
					callback(err, body);
				});
			}, callback);
		},
		/** callback for getForecastByLatLong
		* @callback module:airnow/client~getForecastByLatLongCallback
		* @param {Object} [err] error calling airnow
		* @param {body} [result] forecast
		*/
		/**
		* getForecastByLatLong
		* @param {String} latitude Latitude in decimal degrees
		* @param {String} longitude longitude in decimal degrees
		* @param {Date} [date=current] Date of forecast in YYYY-mm-dd format.
		* @param {String=text/csv,application/json,application/xml} [format=application/json] format of the payload file returend.
		* @param {Number} [distance] If no reporting area is associated with the specified Zip Code, return a forecast from a nearby reporting area within this distance (in miles).
		* @param {module:airnow/client~getForecastByLatLongCallback} callback callback
		*/
		getForecastByLatLong: function(options, callback){
			
			// set the correct defaults
			_.defaults(options, {
				api_key: apiKey,
				format: "application/json"
			});
			
			// send with brute force retry
			async.retry({ times: 5, interval: 100 }, function(callback){
				baseRequest({
					uri: "forecast/latLong/?",
					qs: options,
					json: options.format === "application/json"
				}, function(err, message, body){
					callback(err, body);
				});
			}, callback);
		},
		/** callback for getObservationsByZipCode
		* @callback module:airnow/client~getObservationsByZipCodeCallback
		* @param {Object} [err] error calling airnow
		* @param {body} [result] observations
		*/
		/**
		* getObservationsByZipCode
		* @param {String} zipCode Zip Code
		* @param {String=text/csv,application/json,application/xml} [format=application/json] format of the payload file returend.
		* @param {Number} [distance] If no reporting area is associated with the specified Zip Code, return a forecast from a nearby reporting area within this distance (in miles).
		* @param {module:airnow/client~getObservationsByZipCodeCallback} callback callback
		*/
		getObservationsByZipCode: function(options, callback){
			
			// set the correct defaults
			_.defaults(options, {
				api_key: apiKey,
				format: "application/json"
			});
			
			// send with brute force retry
			async.retry({ times: 5, interval: 100 }, function(callback){
				baseRequest({
					uri: "observation/zipCode/current/?",
					qs: options,
					json: options.format === "application/json"
				}, function(err, message, body){
					callback(err, body);
				});
			}, callback);
		},
		/** callback for getObservationsByLatLng
		* @callback module:airnow/client~getObservationsByLatLngCallback
		* @param {Object} [err] error calling airnow
		* @param {body} [result] observations
		*/
		/**
		* getObservationsByLatLng
		* @param {String} latitude Latitude in decimal degrees
		* @param {String} longitude longitude in decimal degrees
		* @param {String=text/csv,application/json,application/xml} [format=application/json] format of the payload file returend.
		* @param {Number} [distance] If no reporting area is associated with the specified Zip Code, return a forecast from a nearby reporting area within this distance (in miles).
		* @param {module:airnow/client~getObservationsByLatLngCallback} callback callback
		*/
		getObservationsByLatLng: function(options, callback){
			
			// set the correct defaults
			_.defaults(options, {
				api_key: apiKey,
				format: "application/json"
			});
			
			// send with brute force retry
			async.retry({ times: 5, interval: 100 }, function(callback){
				baseRequest({
					uri: "observation/latLong/current/?",
					qs: options,
					json: options.format === 'application/json'
				}, function(err, message, body){
					callback(err, body);
				});
			}, callback);
		}
	};
};