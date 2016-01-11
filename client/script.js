(function(window, $, smarttv) {
  'use strict';

  smarttv.on('message', function(id) {
    $('.background').fadeOut(2000);
    $('#bg' + id).fadeIn(2000);
  });

})(window, $, smarttv);
