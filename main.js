var requestURL = "https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139";

// Declare a new request object
var request = new XMLHttpRequest();

// Open a new request 
request.open('GET', requestURL);

// Declare the data type to convert the URL response data to
request.responseType = 'json';

// Send the request to the URL provided
request.send();

// Wait for the request to fetch the JSON, then do the following
request.onload = function() {
    var data = request.response;
    console.log(data);
}


