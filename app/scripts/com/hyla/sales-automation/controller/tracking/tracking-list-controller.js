angular.module('hyla-sales-automation').controller('TrackingListController', ['$scope', function($scope) {

    $scope.getShowClassByName = function(typeNameString) {

      return ($scope.trackingType.name == typeNameString);

    };

  }])