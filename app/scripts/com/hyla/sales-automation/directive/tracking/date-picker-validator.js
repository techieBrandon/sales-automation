angular.module('hyla-sales-automation').directive('datePickerValidator', [function(){

    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {

        ctrl.$parsers.unshift(function(viewValue) {

            if( !isNaN(Date.parse(viewValue)) ) {
              ctrl.$setValidity('datePickerValidator', true);
              return viewValue;
            }
            else
            {
              ctrl.$setValidity('datePickerValidator', false);
              return undefined;
            }

        });

      }
    };

  }]);