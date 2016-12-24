console.log('js loaded');

$(function () {
    console.log('jQuery loaded');
});

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

$(function displaySpots() {
  var spotsUl = $('ul').addClass('surfSpotsUl');

  for (var i = 0; i < surfSpots.length; i++) {
    var spotsLi = $('li');
    spotsLi.text(surfSpots[i].split(' '));
    spotsUl.append(spotsLi);
  }
  $('#surf-spots').append(spotsUl);
});
