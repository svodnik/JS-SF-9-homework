var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

const createButton = document.querySelector('#create');
const favoriteButton = document.querySelector('#save');
const printButton = document.querySelector('#print');

createButton.addEventListener('click', function(){
  document.querySelector('h1').innerHTML = '';

  var random1 = Math.floor((Math.random() * startupX.length));
  var random2 = Math.floor((Math.random() * startupY.length));
  let madLib = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];

  console.log(madLib);

  const mainHeading = document.createElement('h1');
  const headingText = document.createTextNode(madLib);
  mainHeading.appendChild(headingText);
  document.querySelector('#xForY').appendChild(mainHeading);
}, false);

madLibFavorites = new Array();

favoriteButton.addEventListener('click', function(){
  const selectItem = document.querySelector('h1').textContent;
  madLibFavorites.push(selectItem);
  console.log(madLibFavorites);
}, false);

printButton.addEventListener('click', function(){
  for( i = 0; i < madLibFavorites.length; i++){
    const listItem = document.createElement('h2');
    const favoriteText = document.createTextNode(madLibFavorites[i]);
    listItem.appendChild(favoriteText);
    document.querySelector('#favorites').appendChild(listItem);
  }
}, false);
