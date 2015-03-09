angular.module('hyla-sales-automation').controller('BidDrawerController', ['$scope', function($scope) {

    $scope.getItemGradeClass = function(gradeString) {

      return {
        "bg-dark-green": (gradeString == 'ptg'),
        "bg-medium-green": (gradeString == 'renew'),
        "bg-medium-blue": (gradeString == 'ptc'),
        "bg-acid-green": (gradeString == 'refresh'),
        "bg-primary-blue": (gradeString == 'rec'),
        "bg-bright-blue": (gradeString == 'ftp')
      };

    };

  }])