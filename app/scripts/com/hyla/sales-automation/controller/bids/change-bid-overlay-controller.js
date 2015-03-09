angular.module('hyla-sales-automation').controller('ChangeBidOverlayController', ['$scope', function($scope) {

  $scope.shouldRepresentativeContactMe = false;
  $scope.haveAgreedToTerms = false;

  $scope.init = function() {

    $scope.shouldRepresentativeContactMe = false;
    $scope.haveAgreedToTerms = false;

  };

}]);