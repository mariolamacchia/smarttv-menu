var fs = require('fs');
var $ = require('jquery');

var images = fs.readdirSync(__dirname + '/client/images');
var current = 0;
var total = images.length;

images.forEach(function(img, index) {
  $('body').append(
    $('<div>')
      .addClass('background hidden')
      .attr('id', 'bg' + index)
      .css('background-image', 'url(client/images/' + img + ')')
  );
});
fade();

smarttv.on('connect', function(id) {
  smarttv.send({
    list: images,
    current: current
  });
});

setInterval(function() {
  fade();
}, 20 * 1000);

function fade() {
  current = (current + 1) % total;
  smarttv.send({current: current});
  $('.background').fadeOut(2000);
  $('#bg' + current).fadeIn(2000);
}
