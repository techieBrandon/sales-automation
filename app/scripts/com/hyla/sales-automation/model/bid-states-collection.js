angular.module('hyla-sales-automation').factory('BidStatesCollection', [function() {

    return {
            bidStates: [
              {name: 'pending'},
              {name: 'awarded'},
              {name: 'declined'},
              {name: 'recent history'}
            ],
            'pending': 0,
            'awarded': 1,
            'declined': 2,
            'recent history': 3
          };

  }]);