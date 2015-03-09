angular.module('hyla-sales-automation').controller('BidTypeSelectorController', ['$scope', function($scope) {

    $scope.getActiveTypeClassByName = function(typeNameString) {

      return {
        active: ($scope.bidType.name == typeNameString)
      };
    };

  }])