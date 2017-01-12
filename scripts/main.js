console.log('js connected');

$(document).ready(function() {

  var WEATHER_UNDERGROUND_API = 'http://api.wunderground.com/api/b9a4b3dc52783dbb/conditions/q/';

  var testCity = WEATHER_UNDERGROUND_API + 'CA/San_Francisco.json';

  var forecastResults = $('#forecast-results');

  function testCallWeatherAPI() {
    $.get(testCity, function(whatever){
      console.log(whatever);
    })
  }

  testCallWeatherAPI();

  function callWeatherAPI(city) {
    if (city.length == 0) {
      forecastResults.html('Please enter a city name into the search bar');
    } else {
      $.get(WEATHER_UNDERGROUND_API + city, function(forecastResults) {

      });
    }
  }

  $('#search-button').on('click', function(e) {
    e.preventDefault();

    callWeatherAPI($('#search-bar').val());
  });

//
  var surfSpots = [
    'Point Judith \'The Lighthouse\'',
    'Matunuck',
    'Narragansett Beach',
    'The K',
    'Bonnet Point',
    'Ruggles',
    'First Beach',
    'Second Beach',
    'Monahan\'s Dock'
  ];

  $('#search-button').on('click', function() {
    console.log('search button clicked!');

    for (var i = 0; i < surfSpots.length; i++) {
      var spotsLi = $('li').text(surfSpots[i]);
      $('#surf-spots-ul').append(spotsLi);
    }
  });

  $('#surf-spots').each(surfSpots, function(e) {
    var spotsLi = $('li');
    $(spotsLi).text(surfSpots[e]);
    $(spotsLi).appendTo('#surf-spots-ul');
  })

});
