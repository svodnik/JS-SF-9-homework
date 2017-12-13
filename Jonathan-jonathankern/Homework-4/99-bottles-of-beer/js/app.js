'use strict';

// create li element
const createListItemElement = document.createElement('li');

// find ul
const findUnorderedListElement = document.querySelector('ul');

// append li to ul
const appendListItem = findUnorderedListElement.appendChild(createListItemElement);
// console.log(appendListItem);

// create li text node
let createListItemTextNode;
let quote;
let beerArray = [];

// if i is greater than 0 and less than 100, subtract 1
for (let i = 99; i >= 0; i--) {
	let j = i - 1;
	let bottles = "bottles";
	let bottle = bottles.substr(0, bottles.length-1);
	let currentQuote = beerArray[i];
	let showQuote;

	// if j and i are both greater than 1, 'bottles' = 'bottles'
	if (j > 1 && i > 1){
		quote = i + " " + bottles + " " + "of beer on the wall," + " " + i + " " + bottles + " " + "of beer.\nTake one down and pass it around," + " " + j + " " + bottles + " " + "of beer on the wall.\n"

	// if j is 1, make the last instance of 'bottles' = 'bottle'
	} else if (j === 1){
		quote = i + " " + bottles + " " + "of beer on the wall," + " " + i + " " + bottles + " " + "of beer.\nTake one down and pass it around," + " " + j + " " + bottle + " " + "of beer on the wall.\n";

	// if i is 1, make the first 2 instances of 'bottles' = 'bottle'
	} else if (i === 1){
		quote = i + " " + bottle + " " + "of beer on the wall," + " " + i + " " + bottle + " " + "of beer.\nTake one down and pass it around," + " " + j + " " + bottles + " " + "of beer on the wall.\n";
	}

	createListItemTextNode = document.createTextNode(quote);
	// console.log(quote);
	// append list item content into list item node
	showQuote = createListItemElement.appendChild(createListItemTextNode);

	// console.log(showQuote);

	beerArray.push(quote);
	console.log(beerArray);

	// separateQuote();
}

// separate into individual quotes
// function separateQuote() {
// 	console.log('do stuff');
// }

