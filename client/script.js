(function(window, $, smarttv) {
  'use strict';

  smarttv.on('private', function(backgroundUrl) {
    $('.ui-page').css('background-image', 'url(images/' + backgroundUrl + ')');
  });

  smarttv.on('public', function(backgroundUrl) {
    $('.ui-page').css('background-image', 'url(images/' + backgroundUrl + ')');
  });

})(window, $, smarttv);
