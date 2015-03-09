angular.module('hyla-sales-automation').directive('hylaPalette', [

    function() {
      return {
        restrict: 'E',
        replace: false,
        templateUrl: 'templates/com/hyla/sales-automation/design-styles/palette.html'
      };
    }
  ]);