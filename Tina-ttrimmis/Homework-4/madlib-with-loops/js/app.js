var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));

// Create New Startup
var startupIdea;
var startup  = document.querySelector('#xForY');
var create = document.querySelector('#create');

create.addEventListener('click', createStartup);

function createStartup() {
	startupIdea = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
	startup.innerHTML = startupIdea;
}

// Save New Startup
var favorites = [];
var save  = document.querySelector('#save');

save.addEventListener('click', saveFavorite);

function saveFavorite() {
    favorites.push(startupIdea);
    console.log(favorites);
}

// Print New Startup
var print = document.querySelector('#print');
var fav = document.querySelector('#favorites');

print.addEventListener('click', printFavorite);

function printFavorite() {
	fav.innerHTML = '';
	var favoritesText = "";
	for (var i = 0; i < favorites.length; i++) {	
		favoritesText = favoritesText + favorites[i] + "<br/>";
	}	
	fav.innerHTML = favoritesText;
}
