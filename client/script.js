(function(window, $, smarttv) {
  'use strict';

  smarttv.on('message', function(msg) {
    if (msg.list) {
      msg.list.forEach(function(img, index) {
        $('.ui-page').append(
          $('<div>')
            .addClass('background hidden')
            .attr('id', 'bg' + index)
            .css('background-image', 'url(images/' + img + ')')
        );
      });
    }
    $('.background').fadeOut(2000);
    $('#bg' + msg.current).fadeIn(2000);
  });

})(window, $, smarttv);
