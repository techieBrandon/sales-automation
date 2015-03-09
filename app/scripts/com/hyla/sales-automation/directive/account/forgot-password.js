angular.module('hyla-sales-automation').directive('hylaForgotPassword', [

    function() {
      return {
        restrict: 'E',
        replace: false,
        templateUrl: 'templates/com/hyla/sales-automation/account/forgot-password.html'
      };
    }
  ]);