/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal.
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).

  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.

  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else).
*/
/* write comment!  */
for (i=99; i>=0 ; i--){
  if (i==1){
    var line1= i + ' bottle of beer on the wall, ' + i + ' bottle of beer.'
    var line2='Take one down and pass it around, no more bottles of beer on the wall.'
  } else if(i==0){
    var line1= 'No more bottle of beer on the wall, no more bottles of beer.'
    var line2='Go to the store and buy some more, 99 bottles of beer on the wall.'
  } else if(i==2) {
    var line1= i + ' bottles of beer on the wall, ' + i + ' bottles of beer.'
    var line2='Take one down and pass it around, '+ (i-1) + ' bottle of beer on the wall.'
  } else{
    var line1= i + ' bottls of beer on the wall, ' + i + ' bottles of beer.'
    var line2='Take one down and pass it around, '+ (i-1) + ' bottles of beer on the wall.'
  }

  console.log(line1)
  console.log(line2)
  console.log('\n')

}
