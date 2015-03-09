  angular.module('hyla-sales-automation').animation('.bid-list-item', function() {

    return {
      enter: function(element, done) {

          $(element).animate({opacity: 0, right: '120%'}, 0).animate({opacity: 1, right: 0}, 200, function(){
            done();

          });

          return function(cancelled) {
            if(cancelled) {
              $(element).stop();
              $(element).css("display", "none");
            }
          };
      },
      leave: function(element, done) {
        $(element).animate({right: '120%'}, 200, function(){
          $(this).css("display", "none");
          done();
        });

        return function(cancelled) {
          if(cancelled) {
            $(element).stop();
            $(element).css("display", "none");
          }
        };
      }
    };
  });