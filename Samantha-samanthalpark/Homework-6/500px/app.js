$(function() {
  // wait to run this code until DOM is now ready
  _500px.init({
    sdk_key: 'b60b6dee646e57f949af17874935b35494c12772'
  });

  $('#login').click(function() {
    _500px.login();
  });

  _500px.on('authorization_obtained', function () {
    //alert('You have logged in');
    $('.sign-in-view').hide();
    $('.image-results-view').show();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        console.log(lat + ', ' + long);

        const radius = '10mi';

        const searchOptions = {
          geo: lat + ',' + long + ',' + radius,
          only: 'Landscapes',
          sort: 'highest_rating',
          rpp: 28,
        }

        _500px.api('/photos/search', searchOptions, function(response) {
          if(response.data.photos.length === 0){
            $('.images').append('No photos found');
          } else {
            console.log('Request suceeded!');
            console.log(response.data.photos);
            handleSucessResponse(response);
          }
        })
      });
    } else {
      $('.images').append('Sorry, your browser does not support geolocation.');
    }
  });

  function handleSucessResponse(response){
    const $photos = response.data.photos;

    $.each($photos, function(){
      const $newImage = $('<img>').attr('src', $photos.image_url).addClass('image');
      $('.images').append($newImage);
    });
  }
});
