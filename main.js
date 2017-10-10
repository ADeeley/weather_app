window.onload = function() {
    /**
     * returns a JSON object from the specified URL
     */
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
        updateHTML(request.response);
    }
}

function updateHTML(data) {
    //document.getElementById("weather_type").innerHTML = data["weather"][0]["main"];
    // Create weather html
    var header = document.createElement("h2");
    var text = document.createTextNode("Weather: " + data["weather"][0]["main"]);
    header.appendChild(text);
    header.id = "weather_type";
    header.classList.add("data");
    document.body.appendChild(header);
    
    // Create temperature html
    var header = document.createElement("h3");
    var text = document.createTextNode("Temperature: " + data["main"]["temp"] + " Celsius");
    header.appendChild(text);
    header.id = "temperature";
    header.classList.add("data");
    document.body.appendChild(header);

    // Create wind html
    var header = document.createElement("h3");
    var text = document.createTextNode("Wind Speed: " + data["wind"]["speed"] + " mph");
    header.appendChild(text);
    header.id = "temperature";
    header.classList.add("data");
    document.body.appendChild(header);

    // Create icon 
    var icon = document.createElement("img");
    icon.id = "weather_icon";
    icon.src = data["weather"][0]["icon"]; 
    document.body.appendChild(icon);
}









