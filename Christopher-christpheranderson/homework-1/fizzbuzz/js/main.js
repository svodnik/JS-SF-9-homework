for (i = 1; i < 100; i++){
	if(i % 3){ 
		console.log("fizz")
	}
	/*else if{ 
	console.log([i])*/
	else if(i % 5){
		console.log("buzz")
	}	else if( i % 5 && i % 3){
		console.log("fizzbuzz")
	}
}