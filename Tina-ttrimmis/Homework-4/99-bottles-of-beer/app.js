/*
99 Bottles of Beer in the browser window:

Remember the 99 Bottles of Beer assignment? For this assignment, you'll be creating a website that programatically displays the lyrics to that song in the browser window.
You'll need to create both an HTML file and a JavaScript file.
In your HTML file, you'll want to have an unordered list (<ul>) that contains all of your lyrics.
Each line of the song should appear inside of a list item (<li>) within that unordered list.
Your JavaScript file should programatically append each line of the song to the page--no hard-coding lyrics in HTML!
Code this project using vanilla JavaScript methods.
Then refactor your code to use jQuery instead (preserving your original code in comments)
*/


// vanilla JavaScript methods
for (let i = 99; i >= 1; i--) {
  var lyricsItem = document.createElement('li');  
  var newContent = document.createTextNode(i + " bottles of beer on the wall, " + i + " bottles of beer.\n" + "Take one down pass it around, " + (i-1) + " bottles of beer on the wall.\n\n");
  lyricsItem.appendChild(newContent);  
  document.querySelector('#javascript').appendChild(lyricsItem); 
}

// jQuery version
for (let i = 99; i >= 1; i--) {
  var lyricsItem = $('<li></li>');  
  lyricsItem.append(i + " bottles of beer on the wall, " + i + " bottles of beer.\n" + "Take one down pass it around, " + (i-1) + " bottles of beer on the wall.\n\n");  
  $('#jquery').append(lyricsItem);
}
