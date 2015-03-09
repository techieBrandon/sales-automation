angular.module('hyla-sales-automation').directive('hylaMenuSecondary', [

    function() {
      return {
        restrict: 'E',
        replace: false,
        templateUrl: 'templates/com/hyla/sales-automation/nav/menu-secondary.html',
        link: function(scope,element,attrs){

        }
      };
    }
  ]);