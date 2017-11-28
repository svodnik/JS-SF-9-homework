/*
    1. Create a function that accepts a temperature value in Fahrenheit and converts it to Celsius.
      Note: Equation to convert F to C:
      C = (F - 32) / 1.8
      Test your function.
    2. Create a second function that accepts a temperature value in Celsius and converts it to Fahrenheit.
      Note: Equation to convert C to F:
      F = 1.8 * C + 32
      Test your function.

    BONUS 1: Update your functions to use the value entered in the text box on the web page, and to perform calculations only when the appropriate button is clicked:
      1.  Set the value of the temp variable to the value of the element with the id value 'temperature'.
          (Hint: read about the document.querySelector() method.)
      2.  Set the appropriate function to run when each button is clicked.
        (Hint: read about the addEventListener() method.)

    BONUS 2: Display the result of each calculation in the browser window rather than in the console:
      1.  At the end of each function, set the text of the element with the id value 'result' to the same text string you were previously logging to the console.

    BONUS 3: Clear the contents of the text box after you've displayed your results, so a user can easily enter another temperature to convert. (Hint: Read about the 'value' property in JavaScript. What string value could you assign as the value of an input box that would give it no content to display?)
*/

// assign #fahrenheit_to_celsius variable
let fahrenheitToCelsius = document.getElementById('fahrenheit_to_celsius');

// assign #celsius_to_fahrenheit variable
let celsiusToFahrenheit = document.getElementById('celsius_to_fahrenheit');

// assign #celsius_to_fahrenheit variable
let clearContents = document.getElementById('clear_contents');

let showResult = document.getElementById('result');

// add click event listener to fahrenheitToCelsius
let fahrenheitToCelsiusEventHandler = fahrenheitToCelsius.addEventListener("click", function() {
    // console.log("fahrenheit was clicked");

    // store temperature from input field
    let temperature = document.querySelector('#temperature').value;

    fahrenheitToCelsiusConverter(temperature);
});

// add click event listener to celsiusToFahrenheit
let celsiusToFahrenheitEventHandler = celsiusToFahrenheit.addEventListener("click", function() {
    // console.log("celsius was clicked");

    // store temperature from input field
    let temperature = document.querySelector('#temperature').value;

    celsiusToFahrenheitConverter(temperature);
});

// add click event listener to clearContents
let clearContentsEventHandler = clearContents.addEventListener("click", function() {
    // console.log("clearContents was clicked");
    // store temperature from input field
    let temperature = document.querySelector('#temperature').value = ' ';
    // console.log(temperature);

    reset(temperature);
});

// convert fahrenheit to celsius
function fahrenheitToCelsiusConverter(temperature) {
    // console.log(temperature + " " + "fahrenheit");

    let convertedTemperature = (temperature - 32) / 1.8;
    // console.log(convertedTemperature);

    // round to whole number
    let roundToWholeNumber = Math.round(convertedTemperature);
    // console.log(temperature + " " + "converted from Fahrenheit to Celsius is" + " " + roundToWholeNumber);

    showResult.innerHTML = '"' + temperature + '°' + " " + "converted from Fahrenheit to Celsius is" + " " + roundToWholeNumber + '°"';

    reset(temperature);
}

// convert celsius to fahrenheit
function celsiusToFahrenheitConverter(temperature) {
    // console.log(celsiusTemperature + " " + "celsius");

    let convertedTemperature = (1.8 * temperature) + 32;
    // console.log(convertedTemperature);

    // round to whole number
    let roundToWholeNumber = Math.round(convertedTemperature);
    // console.log(temperature + " " + "converted from Celsius to Fahrenheit is" + " " + roundToWholeNumber);

    showResult.innerHTML = '"' + temperature + '°' + " " + "converted from Celsius to Fahrenheit is" + " " + roundToWholeNumber + '°"';

    reset(temperature);
}

// reset form
function reset(temperature) {
    if (temperature === ' ') {
        // console.log("empty");
        showResult.innerHTML = ' ';

        // add placeholder attribute
        let temperaturePlaceholder = document.querySelector('input[placeholder]');
        temperaturePlaceholder.value = 'Enter a value';

        let temperatureInput = document.querySelector('input');
        temperatureInput.addEventListener("mousedown", function(){
            temperaturePlaceholder.value = ' ';
        });
    }
}
