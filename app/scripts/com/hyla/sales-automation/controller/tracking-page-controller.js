angular.module('hyla-sales-automation').controller('TrackingPageController', ['$scope', '$interval', 'Drawer', 'NavDropdown', 'TrackingTypesCollection', 'OrdersFactory', function($scope, $interval, Drawer, NavDropdown, trackingTypesCollection, OrdersFactory) {

    $scope.trackingTypesCollection = trackingTypesCollection;
    $scope.trackingType = $scope.trackingTypesCollection.trackingTypes[0];
    $scope.filterDate = {
      startDate: undefined,
      endDate: undefined
    };
    $scope.trackingSort = 'last updated';
    $scope.trackingOrder = false;
    $scope.trackingIndex = 0;
    $scope.trackingCount = 25;
    $scope.trackingTotal = 0;
    $scope.trackingFilter = 'all';
    $scope.ordersFactory = new OrdersFactory();
    $scope.orders = {};
    $scope.trackingInterval = null;

    for(var typeIndex = 0; typeIndex < trackingTypesCollection.trackingTypes.length; typeIndex++) {
      $scope.orders[$scope.trackingTypesCollection.trackingTypes[typeIndex].name] = [];
    }

    $scope.getOrders = function() {

      var options = {
        'success': function(data, status) {

          for(var typeIndex = 0; typeIndex < $scope.trackingTypesCollection.trackingTypes.length; typeIndex++) {
            var trackingType = $scope.trackingTypesCollection.trackingTypes[typeIndex];

            var trackingTypeFromService = data['totals']['types'][ data['totals'][trackingType.name] ];

            if(trackingTypeFromService) {
              trackingType.total = trackingTypeFromService['total'];
            }

          }

          $scope.trackingType = $scope.trackingTypesCollection.trackingTypes[$scope.trackingTypesCollection[data['type']]];
          $scope.trackingFilter = data['filter'];
          $scope.trackingSort = data['sort'];
          $scope.trackingOrder = (data['order'] == 'ascending');
          $scope.trackingIndex = data['index'];
          $scope.trackingCount = data['count'];
          $scope.trackingTotal = data['total'];

          var trackingArray = $scope.orders[$scope.trackingType.name];

          while(trackingArray.length > 0) {
            trackingArray.pop();
          }

          var counter = 0;
          $scope.trackingInterval = $interval(function() {

            if(counter < data.orders.length) {
              trackingArray.push(data.orders[counter]);
              counter++;
            }
            else {
              new Drawer().activate();
              new NavDropdown().activate();
            }

          }, 100, data.orders.length + 1);

        }
      };

      $scope.ordersFactory.getOrders(options);

    };

    $scope.getDateByDateString = function(dateString) {
      return "Today, 11:00 am";
    };

    $scope.selectTrackingType = function(trackingType) {

      if(null != trackingType) {
        $scope.trackingType = trackingType;

        $scope.getOrders();
      }
    };

    $scope.selectTrackingTypeByName = function(trackingTypeNameString) {
      var trackingTypeIndex = $scope.trackingTypesCollection[trackingTypeNameString];

      if(null != trackingTypeIndex) {
        var trackingType = $scope.trackingTypesCollection.trackingTypes[trackingTypeIndex];

        $scope.selectTrackingType(trackingType);
      }
    };

    $scope.selectTrackingByIndexAndCount = function(index, count) {

      if(null != index && null != count) {
        $scope.trackingIndex = index;
        $scope.trackingCount = count;

        $scope.getOrders();
      }

    };

    $scope.selectNextBidsPage = function() {
      var nextIndex = (($scope.trackingIndex + $scope.trackingCount) < $scope.trackingTotal) ? $scope.trackingIndex + $scope.trackingCount : 0;

      $scope.selectTrackingByIndexAndCount(nextIndex, $scope.trackingCount);
    };

    $scope.selectPreviousBidsPage = function() {
      var previousIndex = (($scope.bidIndex - $scope.bidCount) >= 0) ? $scope.bidIndex - $scope.bidCount : $scope.bidTotal - ($scope.bidTotal % $scope.bidCount);

      if(previousIndex >= $scope.bidTotal) {
        previousIndex -= $scope.bidCount;
      }

      $scope.selectBidsByIndexAndCount(previousIndex, $scope.bidCount);
    };

    $scope.selectTrackingByFilterName = function(trackingFilterNameString) {

      if(null != trackingFilterNameString) {
        $scope.trackingFilter = trackingFilterNameString;

        $scope.getOrders();
      }

    };

    $scope.selectTrackingBySortName = function(trackingSortNameString) {

      if(null != trackingSortNameString) {

        if($scope.trackingSort == trackingSortNameString) {
          $scope.trackingOrder = !$scope.trackingOrder;
        }
        else {
          $scope.trackingSort = trackingSortNameString;
        }

        $scope.getOrders();
      }

    };


    $scope.init = function() {
      $('.tabs li').last().addClass('active');

      $scope.getOrders();
    };

  }]);