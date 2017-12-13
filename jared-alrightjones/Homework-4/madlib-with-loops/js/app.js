
const createBtn = document.querySelector('#create');
const saveBtn = document.querySelector('#save');
const printBtn = document.querySelector('#print');

var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'GitHub', 'Tesla', 'Hyperloop', 'Harvest'];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));

createBtn.addEventListener('click', function() {
  something.somethingElse = 'dontForgetFunctionDefinition';
};

console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);


// 1. click the createBtn
// 2. creatBtn runs function to
// 	a. random1 to startupX selection
// 	b. random2 to startupY selection
// 3. console.log satement to add text and combine random1 + random2
// 4. print the console.log statement the XforY h1
