var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

// var random1 = Math.floor((Math.random() * startupX.length));
// var random2 = Math.floor((Math.random() * startupY.length));

// console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
let random1;
let random2;
let randomQuote;

let h1Element;
let h1TextNode;

let h2Element;
let h2TextNode;

let createButton = document.querySelector('#create');
let saveButton = document.querySelector('#save');
let printButton = document.querySelector('#print');

let currentQuote;
let quotesArray = [];

let showFavorites;

createButton.addEventListener('click', function(element) {
	element.preventDefault();


	random1 = Math.floor((Math.random() * startupX.length));
	random2 = Math.floor((Math.random() * startupY.length));
	randomQuote = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];

	h1Element = document.querySelector('#xForY');
	h1TextNode = document.createTextNode(randomQuote);

	// append text to element
	// h1Element.appendChild(h1TextNode);
	h1Element.innerHTML = randomQuote;
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

	// find h2 element
	h2Element = document.querySelector('#favorites');

	// append currentQuote to h2TextNode
	h2TextNode = document.createTextNode(quotesArray);
	// console.log(h2TextNode);

	// add to dom
	h2Element.appendChild(h2TextNode);

}, false);
