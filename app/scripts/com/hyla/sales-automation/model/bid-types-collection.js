angular.module('hyla-sales-automation').factory('BidTypesCollection', [function() {

    return {
            bidTypes: [
              {
                formatted_name: 'sir_bid',
                name: 'sir bid',
                display_name: 'sir bids',
                total: 0
              },
              {
                formatted_name: 'lot_bid',
                name: 'lot bid',
                display_name: 'lot bids',
                total: 0
              }
            ],
            'sir bid': 0,
            'lot bid': 1
          };

  }]);