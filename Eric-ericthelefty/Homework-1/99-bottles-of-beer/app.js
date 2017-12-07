/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal.
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).

  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.

  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else).
*/

'use strict';

let b = ' bottle of beer on the wall,'
let c = ' bottles of beer.'
let d = 'Take one down and pass it around, '
let e = ' bottles of beer on the wall.'

for(let i = 99; i >= 1; i--) {
console.log(i + b + i + c + '\n' + d + (i-1) + e);
};


/*
99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.

'bottles of beer on the wall, ' i 'bottles of beer.' '/n/'
'Take one down and pass it around, ' i-1 ' bottles of beer on the wall.');
}

*/
