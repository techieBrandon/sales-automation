angular.module('hyla-sales-automation').directive('hylaMenuPrimary', [

    function() {
      return {
        restrict: 'E',
        replace: false,
        templateUrl: 'templates/com/hyla/sales-automation/nav/menu-primary.html',
        link: function(scope,element,attrs){

        }
      };
    }
  ]);