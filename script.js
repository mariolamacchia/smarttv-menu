var smarttv = require('smarttv');
var fs = require('fs');

var backgrounds = fs.readdirSync(__dirname + '/client/images');
var current = 0;

smarttv.on('connect', function(e, id) {
  smarttv.send(id, backgrounds[current]);
});

setInterval(function() {
  current = (current + 1) % backgrounds.length;
  smarttv.send(backgrounds[current]);
}, 5000);
