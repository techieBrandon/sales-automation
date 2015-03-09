angular.module('hyla-sales-automation').controller('BidListController', ['$scope', function($scope) {

    $scope.getShowClassByName = function(typeNameString) {

      return ($scope.bidType.name == typeNameString);

    };

  }])