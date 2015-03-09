angular.module('hyla-sales-automation').controller('TrackingSortController', ['$scope', function($scope) {

    $scope.getActiveSortClassByName = function(sortNameString) {

      return {
        active: ($scope.trackingSort == sortNameString)
      };

    };



    $scope.getSortIconClassByName = function(sortNameString) {

      return {
        'icon-carrot_down': !$scope.trackingOrder,
        'icon-carrot_up': $scope.trackingOrder,
        'hide': ($scope.trackingSort != sortNameString)
      };

    };

  }]);