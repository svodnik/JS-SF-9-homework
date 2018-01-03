$(function() {
    // DOM is now ready

    // initialize 500px
    _500px.init({
        sdk_key: 'af876ca3c1a2027fde092ab78b90e64de993ba21'
    });

    // make login button functional
    $('#login').click(function() {
    	_500px.login();
    });

    // listen for authorization obtained event
    _500px.on('authorization_obtained', function () {
	    // alert('You have logged in');
	    _500px.api('/users', function (response) {
            // hide sign-in-view
		    $('.sign-in-view').hide();

		    // show image-results-view
		    $('.image-results-view').show();

            handleUserData(response);
        });

	    // check browser
	    if (navigator.geolocation) {
	    	// get user location
	    	navigator.geolocation.getCurrentPosition(function(position) {
	    		// pull lat and log
	    		const lat = position.coords.latitude;
	    		const long = position.coords.longitude;
	    		// console.log(lat + ', ' + long);
	    		const radius = '10mi';
	    		const searchOptions = {
	    			geo: lat + ',' + long + ',' + radius,
	    			only: 'Landscapes',
	    			sort: 'rating',
	    			rpp: 28
	    		}

	    		// write API request
	    		_500px.api('/photos/search', searchOptions, function(response) {
	    			const $fadeResponse = $('.response').fadeTo(1000,1).fadeOut(800);

	    			if (response.data.photos.length === 0) {
	    				$('.response').addClass('error');
	    				$('.response.error').append('<p>No photos found.</p>');
	    				$fadeResponse;
	    			} else {
	    				$('.response').addClass('success');
	    				$('.response.success').append('<p>Request succeeded!</p>');
	    				$fadeResponse;

	    				// call function to handle success response
	    				handleResponseSuccess(response);
	    			}
	    		});
	    	});
	    } else {
	    	$('.response').append('Sorry, your browser does not support geolocation.');
	    }
	});
});

function handleUserData(response) {
	// console.log('handle user data');
	const $userFullName = response.data.user.fullname;
	// console.log($userFullName);

	// get user name class
	const $getUserName = $('.user-name');

	// append user full name to DOM
	$getUserName.append($userFullName);
}

function handleResponseSuccess(response) {
	const $photo = response.data.photos;
	const $photoLength = $photo.length;

	// console.log($photoLength + ' is the total amount of images');

	for (let i = 0; i < $photoLength; i++) {
		// create child image element
		const $imageElement = $('<img class="image">');

		// create parent images element
		const $imagesElement = $('.images');

		// get photo url
		const photoUrl = $photo[i].image_url;
		// console.log(photoUrl);

		// get rating
		const $rating = $photo[i].rating;
		// console.log($rating);

		// create source for img
		const $imageSource = $imageElement.attr('src', photoUrl);
		// console.log($imageSource);

		// append child to parent
		$imagesElement.append($imageElement);

		// append photo url to imageElement
		$imageElement.append(photoUrl);
	}
}
