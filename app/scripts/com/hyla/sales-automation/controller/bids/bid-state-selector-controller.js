angular.module('hyla-sales-automation').controller('BidStateSelectorController', ['$scope', function($scope) {

    $scope.getActiveStateClassByName = function(stateNameString) {
      return {
        active: ($scope.bidState.name == stateNameString)
      };
    };

  }])