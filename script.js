var fs = require('fs');
var $ = require('jquery');

var current = 0;
var total = 4;

smarttv.on('connect', function(id) {
  smarttv.send(id, current);
});

setInterval(function() {
  current = ((current + 1) % total) +1;
  smarttv.send(current);
  $('.background').fadeOut(2000);
  $('#bg' + current).fadeIn(2000);
}, 20 * 1000);
