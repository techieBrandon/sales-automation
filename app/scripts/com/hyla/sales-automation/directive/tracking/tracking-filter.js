angular.module('hyla-sales-automation').directive('trackingFilter', [function(){

    var directiveDefinitionObject = {
      link: function(scope, element, attrs) {
        var trackingFilterName = attrs.trackingFilterName;

        element.click(function() {
          scope.selectTrackingByFilterName(trackingFilterName);
        });

        element.attr('data-value', trackingFilterName);

        element.html(trackingFilterName);
      }
    };

    return directiveDefinitionObject;

  }]);