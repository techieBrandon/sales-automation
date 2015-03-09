  angular.module('hyla-sales-automation').directive('bidFilter', [function(){

    var directiveDefinitionObject = {
      link: function(scope, element, attrs) {
        var bidFilterName = attrs.bidFilterName;

        element.click(function() {
          scope.selectBidsByFilterName(bidFilterName);
        });

        element.attr('data-value', bidFilterName);

        element.html(bidFilterName);
      }
    };

    return directiveDefinitionObject;

  }])