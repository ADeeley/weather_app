var JSONdata = null;
var isCelsius = true;

window.onload = function() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            /**
             * returns a JSON object from the specified URL
             */
            var requestURL = "https://fcc-weather-api.glitch.me/api/current?";
            var lat = "lat=" + position.coords.latitude;
            var lon = "&lon=" + position.coords.longitude;

            // Declare a new request object
            var request = new XMLHttpRequest();

            // Open a new request 
            request.open('GET', requestURL + lat + lon);

            // Declare the data type to convert the URL response data to
            request.responseType = 'json';

            // Send the request to the URL provided
            request.send();

            // Wait for the request to fetch the JSON, then do the following
            request.onload = function() {
                updateHTML(request.response);
            }
        });
    }
    else {
        console.log("Geolocation is not available in this browser.");
    }
}

function updateHTML(data) {
    /*
     * Create and populate the tags using the JSON data
     */
    var text = "Weather: " + data["weather"][0]["main"];
    document.getElementById("weather_type").innerHTML = text;
    text = "Temperature: " + Math.floor(data["main"]["temp"]);
    document.getElementById("temperature").innerHTML = text + " Celsius";
    text = "Wind Speed: " + data["wind"]["speed"] + " mph";
    document.getElementById("wind_speed").innerHTML = text;

    // Create weather icon 
    var icon = document.createElement("img");
    icon.id = "weather_icon";
    icon.src = data["weather"][0]["icon"]; 
    document.body.appendChild(icon);

    adaptBackgroundColour(data["weather"][0]["main"]);

    // store the JSON in JSONdata global
    JSONdata = data;

}

function adaptBackgroundColour(weatherType) {
    var col = "background-color: ";
    switch (weatherType) {
        case "Rain":
            col += "#3D66FF";
            break;
        case "Sunny":
            col += "#f4dc41";
            break;
        case "Drizzle":
            col += "#9AA9E0";
            break;
        case "Clouds":
            col += "#DCE0ED";
            break;
        case "Snow":
            col += "#ffffff";
            break;
        case "clear":
            col += "#75C6F4";
            break;
        case "thunderstorm":
            col += "#161E4C";
            break;
        default:
            col += "#abcdef";
    }
    document.body.style = col;
}

function toFahrenheit(num) {
    return Math.floor((num * 1.8) + 32);
}

function changeScale() {
    var num = Math.floor(JSONdata["main"]["temp"]);
    var tempStr = "Temperature: " + num;

    if (isCelsius) {
        num = toFahrenheit(num);
        document.getElementById("temperature").innerHTML = tempStr + " Fahrenheit";
        isCelsius = false;
    }
    else if (!isCelsius) {
        document.getElementById("temperature").innerHTML = "Temperature: " + num + " Celsius";
        isCelsius = true;
    }
    //Update HTML using DOM
}






