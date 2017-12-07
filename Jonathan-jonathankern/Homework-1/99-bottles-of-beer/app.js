/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal.
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).

  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.

  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else).
*/

'use strict';

// if i is greater than 0 and less than 100, subtract 1
for (let i = 99; i > 0 && i < 100; i--) {
	let j = i - 1;
	let bottles = "bottles";
	let bottle = bottles.substr(0, bottles.length-1);

	// if j and i are both greater than 1, 'bottles' = 'bottles'
	if (j > 1 && i > 1){
		console.log(i + " " + bottles + " " + "of beer on the wall," + " " + i + " " + bottles + " " + "of beer.\nTake one down and pass it around," + " " + j + " " + bottles + " " + "of beer on the wall.");
	// if j is 1, make the last instance of 'bottles' = 'bottle'
	} else if (j === 1){
		console.log(i + " " + bottles + " " + "of beer on the wall," + " " + i + " " + bottles + " " + "of beer.\nTake one down and pass it around," + " " + j + " " + bottle + " " + "of beer on the wall.");
	// if i is 1, make the first 2 instances of 'bottles' = 'bottle'
	} else if (i === 1){
		console.log(i + " " + bottle + " " + "of beer on the wall," + " " + i + " " + bottle + " " + "of beer.\nTake one down and pass it around," + " " + j + " " + bottles + " " + "of beer on the wall.");
	}
}
