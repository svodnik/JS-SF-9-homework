/*
    1. Sign up for openweathermap.org and generate an API key.
    2. Create a fetch request to pull current weather data for San Francisco.
       (Hint: http://api.openweathermap.org/data/2.5/weather?q=...).
    3. Log the temperature to the console. Note that the temperature will be in
       Kelvin.
    4. Incorporate the following code into your app to log a Fahrenheit value for
       the temperature to the console (Fahrenheit temperature is stored in the
       degFInt variable):
       const degF = (temp - 273.15) * 1.8 + 32;
       const degFInt = Math.floor(degF);
    5. Use DOM manipulation to add the returned temperature to the span element with
       the id "temp".
    6. Sign up for developer.weatherunlocked.com and obtain your application ID and
       application key.
    7. Repeat the above steps to obtain the current temperature from this data
       source, convert it to Fahrenheit, log it to the console, and then add it to
       the DOM (uncomment out the 3 lines indicated in index.html for this step,
       and add your temperature value to the span element with the id "temp2").
    8. Refactor your code as necessary to separate the code for DOM manipulation
       from the code for sending an HTTP request.

    BONUS 1: Refactor your code to use jQuery (either $.ajax or $.get) instead of
       Fetch to pull current weather data.
    BONUS 2: Implement a form that prompts users for a city and state and returns
       data for the location they specify
       (Uncomment out the existing form code in index.html as marked).
    BONUS 3: The response data for each request includes the name of an image
       file that illustrates current weather conditions. Use the documention to
       figure out the URL for these files on the server, and then incorporate
       this image into the DOM.
 */

'use strict';

const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=94102,us';
const weatherUrl2 = 'http://api.weatherunlocked.com/api/trigger/us.94102';


const $getTemperatureSelector = $('#temp');
const $getTemperatureSelector2 = $('#temp2');

// convert temp to Farenheit
let currentTemperature;

fetch(weatherUrl + '&appid=' + apiKey).then(function(response) {
    if (response.ok) {
        // pull data and parse json
        return response.json();
    } else {
        console.log('there was a problem with the request');
    }
}).then(function(data) {
    // parse data and display data to browser
    console.log(data);

    // get current tempertature
    currentTemperature = data.main.temp;
    console.log(currentTemperature);

    // convert temp to Farenheit
    const degF = (currentTemperature - 273.15) * 1.8 + 32;
    const degFInt = Math.floor(degF);
    console.log(degFInt + ' ' + 'degrees' + ' ' + 'Farenheit');

    // display temperature in DOM
    displayTemperature(degFInt);
});

function displayTemperature(temperature) {
    console.log(temperature);

    $getTemperatureSelector.html(temperature);
}


$.ajax({
    url: 'http://api.weatherunlocked.com/api/trigger/us.94102/forecast tomorrow temperature gt 10 includecurrent?app_id={{ APP_ID }}&app_key={{ APP_KEY }}',
    type: 'GET',
    data: {
        format: 'json'
    }
}).done(function(data) {
    console.log(data);

    // get current tempertature
    currentTemperature = data.CurrentWeather.temp_f;
    console.log(currentTemperature);

    // round number to whole number
    let roundedTemperature = Math.round(currentTemperature);
    console.log(roundedTemperature);

    // display temperature in DOM
    displayTemperature2(roundedTemperature);
});

function displayTemperature2(temperature) {
    console.log(temperature);

    $getTemperatureSelector2.html(temperature);
}



