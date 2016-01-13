(function(window, $, smarttv) {
  'use strict';

  smarttv.on('message', function(msg) {
    if (msg.list) {
      msg.list.forEach(function(img, index) {
        $('body').append(
          $('<div>')
            .addClass('background hidden')
            .attr('id', 'bg' + index)
            .css('background-image', 'url(images/' + img + ')')
        );
      });
    }
    $('.background').fadeOut(2000);
    $('#bg' + msg.current).fadeIn(2000);
  }).ready(function() {
    smarttv.apps.forEach(function(app) {
      if (app.name === 'menu') return;
      var icon = app.icon ?
        smarttv.getPublicPath(app) + '/' + app.icon :
        smarttv.getPublicPath() + '/smarttv-sm.png';
      $('.apps')
        .append(
          $('<a class=app><img><label></label></a>')
            .find('img')
              .attr('src', icon)
            .end()
            .find('label')
              .text(app.title)
            .end()
            .attr('href', smarttv.getPath(app))
        );
    });
  });

})(window, $, smarttv);
