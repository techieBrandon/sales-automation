angular.module('hyla-sales-automation').controller('AccountPageController', ['$scope', '$interval', 'Drawer', 'NavDropdown', function($scope, $interval, Drawer, NavDropdown) {


    $scope.init = function() {
      $('.tabs li').first().addClass('active');
    };

  }]);