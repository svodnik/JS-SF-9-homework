var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));

var createButton = document.querySelector('#create');
var startupField = document.querySelector('#xForY');

createButton.addEventListener('click', function(event) {
	event.preventDefault();
	var newItem = document.createElement('h1');
	var newItemText = document.createTextNode('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
	newItem.appendChild(newItemText);
	startupField.appendChild(newItem);
}, false);

console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);