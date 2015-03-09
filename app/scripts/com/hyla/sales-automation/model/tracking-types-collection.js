angular.module('hyla-sales-automation').factory('TrackingTypesCollection', [function() {

    return {
            trackingTypes: [
              {
                formatted_name: 'shipping',
                name: 'shipping',
                display_name: 'shipping',
                total: 0
              },
              {
                formatted_name: 'processing',
                name: 'processing',
                display_name: 'processing',
                total: 0
              },
              {
                formatted_name: 'paid',
                name: 'paid',
                display_name: 'paid',
                total: 0
              }
            ],
            'shipping': 0,
            'processing': 1,
            'paid': 2
          };

  }]);