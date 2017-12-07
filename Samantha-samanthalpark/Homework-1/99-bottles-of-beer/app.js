/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal.
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).

  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.

  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else).
*/
let bPlural = " bottles of beer";
let bSingle = " bottle of beer";

for(let i = 100; i > 0; --i){
  if (i > 1){
    console.log("\n" + i + bPlural + " on the wall. " + i + bPlural + ". Take one down, pass it around. " + i + bPlural + " on the wall.");
  } else{
    console.log("\n" + i + bSingle + " on the wall. " + i + bSingle + ". Take one down, pass it around. " + i + bSingle + " on the wall.");
  }
}
