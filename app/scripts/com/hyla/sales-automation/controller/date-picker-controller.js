angular.module('hyla-sales-automation').controller('DatePickerController', ['$scope', function($scope) {

    $scope.onDatePicked = function() {

      if( ($scope.filterDate.startDate != undefined && $scope.filterDate.endDate != undefined) || ($scope.filterDate.startDate == undefined && $scope.filterDate.endDate == undefined) ) {

        $scope.getOrders();

      }

    };

    $scope.init = function() {

      //TODO: Don't use jQuery
      // $( ".date-picker-date-1 input" ).datepicker({
      //   defaultDate: "+1w",
      //   showOn: "both",
      //   buttonImage: "css/images/tracking-date-picker-calendar.png",
      //   buttonImageOnly: true,
      //   changeMonth: true,
      //   onClose: function( selectedDate ) {
      //     $( ".date-picker-date-2 input" ).datepicker( "option", "minDate", selectedDate );
      //   }
      // });

      // $( ".date-picker-date-2 input" ).datepicker({
      //   defaultDate: "+1w",
      //   showOn: "both",
      //   buttonImage: "css/images/tracking-date-picker-calendar.png",
      //   buttonImageOnly: true,
      //   changeMonth: true,
      //   onClose: function( selectedDate ) {
      //     $( ".date-picker-date-1 input" ).datepicker( "option", "maxDate", selectedDate );
      //   }
      // });

    };

  }])