// original code

// for (i = 99; i >= 1; i--) {
// 	console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around, " + (i-1) + " bottles of beer on the wall.") ;
// }

// update for hw4

 for (let i = 99; i >= 1; i--) {
   var listElement = document.createElement('li');  
   var createText = document.createTextNode(i + " bottles of beer on the wall, " + i + " bottles of beer." + "Take one down pass it around, " + (i-1) + " bottles of beer on the wall.");
   listElement.appendChild(createText);  
   document.querySelector('#javascript').appendChild(createText); 
}