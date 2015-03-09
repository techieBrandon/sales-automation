angular.module('hyla-sales-automation').factory('OrdersFactory', ['$http', function($http) {

    return function() {

      var self = this;

      self.getOrders = function(options) {

        options['cache'] = true;

        $http.get('json/tracking/orders.json').then(function(response) {

          if(options['success'])
          {
            options['success'](response.data);
          }

        });

      };

    };

  }]);