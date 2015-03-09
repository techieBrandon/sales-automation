angular.module('hyla-sales-automation').directive('hylaFooter', [

    function() {
      return {
        restrict: 'E',
        replace: false,
        templateUrl: 'templates/com/hyla/sales-automation/footer.html',
        link: function(scope,element,attrs){

          element.find('.toggle-footer').click(function(e) {

            e.preventDefault();

            var clicked    = $(this),
              footer     = element.find('#footer'),
              copyright  = footer.find('.secondary');

            copyright.slideToggle();
            clicked.toggleClass('active');

          });
        }
      };
    }
  ]);