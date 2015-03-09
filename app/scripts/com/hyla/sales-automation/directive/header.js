angular.module('hyla-sales-automation').directive('hylaHeader', [

    function() {
      return {
        restrict: 'E',
        replace: false,
        templateUrl: 'templates/com/hyla/sales-automation/header.html'
      };
    }
  ]);