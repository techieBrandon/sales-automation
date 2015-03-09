angular.module('hyla-sales-automation').controller('TrackingTypeSelectorController', ['$scope', function($scope) {

    $scope.getActiveTypeClassByName = function(typeNameString) {

      return {
        active: ($scope.trackingType.name == typeNameString)
      };
    };

  }]);