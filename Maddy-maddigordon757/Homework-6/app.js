$(function() {
  // DOM is now ready
  _500px.init({
    sdk_key: '0c6bcc5916ef4b165db94e9cdf34d7a95a34304e'
  });

  $('#login').click(function() {
    _500px.login();
  }); 

  _500px.on('authorization_obtained', function () {
    alert('You have logged in');
    $('.sign-in-view').hide();
    $('.image-results-view').show();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        console.log(lat + ','+ long);
        const radius = '10mi';
        const searchOptions = {
          geo: lat + ',' + long + ',' + radius,
          only: 'Landscapes',
          rpp: 28,
          sort: "rating"
        }
        _500px.api('/photos/search', searchOptions, function(response) {
          if (response.data.photos.length === 0) {
            $('.images').append("No photos found");
          } else {
            handleResponseSuccess(response);
          }
        })
      });
    } else {
      $('.images').append("Sorry, your browser does not support geolocation.")
    }
  });
  
  function handleResponseSuccess(response) {
    const data = response.data.photos;

    $.each(data, function() {
      const element = $('<img>').attr('src', this.image_url).addClass('image');
      $('.images').append(element);
    });
  }
});


