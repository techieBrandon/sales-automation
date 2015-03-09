angular.module('hyla-sales-automation').controller('BidSortController', ['$scope', function($scope) {

    $scope.getActiveSortClassByName = function(sortNameString) {

      return {
        active: ($scope.bidSort  == sortNameString)
      };

    };

    $scope.getSortIconClassByName = function(sortNameString) {

      return {
        'icon-carrot_down': !$scope.bidOrder,
        'icon-carrot_up': $scope.bidOrder,
        'hide': ($scope.bidSort != sortNameString)
      };

    };

  }])