angular.module('hyla-sales-automation').factory('BidsFactory', ['$http', function($http) {

    return function() {

      var self = this;

      self.getBids = function(options) {

        options['cache'] = true;

        $http.get('json/bids/bids.json').then(function(response) {

          if(options['success'])
          {
            options['success'](response.data);
          }

        });

      };

    };

  }]);