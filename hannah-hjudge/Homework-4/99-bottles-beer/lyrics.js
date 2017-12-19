"use strict";

for(let i = 99; i >= 1; i--) {
	var updateLyrics = document.querySelector('#lyrics');
	var newItem = document.createElement('li');
	var newItemText = document.createTextNode(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down, pass it around, " + (i-1) + " bottles of beer.")
newItem.appendChild(newItemText);
updateLyrics.appendChild(newItem);
};


console.log('something happened');