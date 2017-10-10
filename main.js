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
    var text = document.createTextNode(data["weather"][0]["main"]);
    header.appendChild(text);
    header.id = "weather_type";
    document.body.appendChild(header);
    
    // Create weather html
    var icon = document.createElement("img");
    icon.id = "weather_icon";
    icon.src = data["weather"][0]["icon"]; 
    document.body.appendChild(icon);
}









