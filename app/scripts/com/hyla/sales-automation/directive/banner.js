angular.module('hyla-sales-automation').directive('hylaBanner', [

    function() {
      return {
        restrict: 'E',
        replace: false,
        templateUrl: 'templates/com/hyla/sales-automation/banner.html'
      };
    }
  ]);