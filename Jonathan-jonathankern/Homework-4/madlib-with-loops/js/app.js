var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));

// console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

let randomQuote = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]

let h1Element = document.querySelector('#xForY');
let h1TextNode = document.createTextNode(randomQuote);

let h2Element = document.querySelector('#favorites');
let h2TextNode;

let createButton = document.querySelector('#create');
let saveButton = document.querySelector('#save');
let printButton = document.querySelector('#print');

let currentQuote;
let quotesArray = [];

let showFavorites;

createButton.addEventListener('click', function(element) {
	element.preventDefault();
	// append text to element
	h1Element.appendChild(h1TextNode);
	console.log(h1TextNode);

}, false);

saveButton.addEventListener('click', function(element) {
	element.preventDefault();

	// add quote to array
	quotesArray.push(randomQuote);
	console.log(quotesArray);

	for(let i = 0; i < quotesArray.length; i++) {
		currentQuote = quotesArray[i];

		document.createTextNode(currentQuote);
		console.log(currentQuote);
	}

}, false);

printButton.addEventListener('click', function(element) {
	element.preventDefault();
	// console.log(quotesArray);

	// append currentQuote to h2TextNode
	h2TextNode = document.createTextNode(quotesArray);
	// console.log(h2TextNode);

	// add to dom
	h2Element.appendChild(h2TextNode);

}, false);
