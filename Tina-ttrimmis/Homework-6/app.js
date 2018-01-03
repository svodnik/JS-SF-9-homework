$(function () {
  // DOM is now ready
  _500px.init({
    sdk_key: 'ef29801c3a283121c63a622dd9c00ef8c9d4228b'
  });

  $('#login').click(function () {
    _500px.login();
  })

  _500px.on('authorization_obtained', function () {

    //alert('You have logged in');
    $('.sign-in-view').hide();
    $('.image-results-view').show();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        //console.log(lat + ', ' + long);
        const radius = '10mi';

        const searchOptions = {
          geo: lat + ',' + long + ',' + radius,
          only: 'Landscapes',
          image_size: 3, // This isn't neccessary but by default the images are thumbnail sized
          rpp: '28',
          //sort: 'rating', 
          sort: 'highest_rating'
        };

        _500px.api('/photos/search', searchOptions, function (response) {
          if (response.data.photos.length === 0) {
            $('.images').append('No photos found');
          } else {
            //$('.images').append('Request succeeded!');
            handleResponseSuccess(response);
            displayUserInfo(response);
          }
        })
      });
    } else {
      $('.images').append('Sorry, your browser does not support geolocation.')
    }

    // If the user has already logged in & authorized your application, this will fire an 'authorization_obtained' event
    // This keeps the site from prompting the user to log in each time the page is refreshed
    _500px.getAuthorizationStatus();

  });
});

function handleResponseSuccess(response) {
  const $photo = response.data.photos;
  $.each($photo, function () {
    const $image = $('<img>').addClass('image').attr('src', this.image_url);
    $('.images').append($image);
  });
}

function displayUserInfo(response){
  const $user = response.data.user.username;
  const $display = $('<p>').text('Hello ' + $user + '!');
  $('.user-info').append($display);
  console.log(response.data.user.username);
}

// Note: With extensions still enabled and third party cookies allowed, clear your existing cookies in Chrome, then shift-reload your app and login again and see what you get on the console.