angular.module('hyla-sales-automation').controller('PageOverlayController', ['$scope', function($scope) {

  $scope.getOverlayURL = function() {
    return $scope.pageOverlayTemplateURL;
  };

}]);