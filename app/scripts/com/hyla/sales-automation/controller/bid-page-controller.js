angular.module('hyla-sales-automation').controller('BidPageController', ['$scope', '$interval', 'Drawer', 'NavDropdown', 'BidTypesCollection', 'BidStatesCollection', 'BidsFactory', function($scope, $interval, Drawer, NavDropdown, bidTypesCollection, bidStatesCollection, BidsFactory) {

    $scope.bidsFactory = new BidsFactory();
    $scope.bidTypesCollection = bidTypesCollection;
    $scope.bidType = $scope.bidTypesCollection.bidTypes[0];
    $scope.bidStatesCollection = bidStatesCollection;
    $scope.bidState = $scope.bidStatesCollection.bidStates[0];
    $scope.bidFilter = 'all';
    $scope.bidSort = 'last updated';
    $scope.bidOrder = false;
    $scope.bidIndex = 0;
    $scope.bidCount = 25;
    $scope.bidTotal = 0;
    $scope.bids = {};
    $scope.bidInterval = null;
    $scope.pageOverlayTemplateURL = "";
    $scope.selectedBid = null;

    for(var typeIndex = 0; typeIndex < bidTypesCollection.bidTypes.length; typeIndex++) {
      $scope.bids[$scope.bidTypesCollection.bidTypes[typeIndex].name] = [];
    }

    $scope.onPageOverlayVisibleDelegate = function() {};

    $scope.onPageOverlayVisible = function() {
      $scope.onPageOverlayVisibleDelegate();
    };

    $scope.openPageOverlay = function(templateURL) {
      $scope.pageOverlayTemplateURL = templateURL;

      var overlayElement = $('#pageOverlay');

      if(!overlayElement.attr('data-overlay-is-initialized')) {
        overlayElement.overlay({
          closeBtn: false,
          offClick: true,
          visible: function() {
            $scope.onPageOverlayVisible();
          }
        });
      }

      overlayElement.overlay('open');

    };

    $scope.closePageOverlay = function() {
      var overlayElement = $('#pageOverlay');

      $scope.onOpenPageOverlayDelegate = function() {};

      overlayElement.overlay('close');

      $scope.pageOverlayTemplateURL = null;
    };

    $scope.cancelBidByIndex = function(bidIndex) {

      var bid = $scope.bids[$scope.bidType.name][bidIndex];

      if(bid) {

        $scope.selectedBid = bid;

        $scope.onPageOverlayVisibleDelegate = function() {

          var overlayYesButton = $('.cancelBidOverlay button.primary');
          overlayYesButton.unbind();
          overlayYesButton.click(function(){

          });

        };

        $scope.openPageOverlay('templates/com/hyla/sales-automation/bids/cancel-bid-overlay.html');

      }

    };

    $scope.changeBidByIndex = function(bidIndex) {

      var bid = $scope.bids[$scope.bidType.name][bidIndex];

      if(bid) {

        $scope.selectedBid = bid;

        $scope.onPageOverlayVisibleDelegate = function() {

        };

        $scope.openPageOverlay('templates/com/hyla/sales-automation/bids/change-bid-overlay.html');
      }

    };

    $scope.getBids = function() {
      var options = {
        'success': function(data, status) {

          for(var typeIndex = 0; typeIndex < $scope.bidTypesCollection.bidTypes.length; typeIndex++) {
            var bidType = $scope.bidTypesCollection.bidTypes[typeIndex];

            var bidTypeFromService = data['totals']['types'][ data['totals'][bidType.name] ];

            if(bidTypeFromService) {
              bidType.total = bidTypeFromService['total'];
            }

          }

          $scope.bidType = $scope.bidTypesCollection.bidTypes[$scope.bidTypesCollection[data['type']]];
          $scope.bidState = $scope.bidStatesCollection.bidStates[$scope.bidStatesCollection[data['state']]];
          $scope.bidFilter = data['filter'];
          $scope.bidSort = data['sort'];
          $scope.bidOrder = (data['order'] == 'ascending');
          $scope.bidIndex = data['index'];
          $scope.bidCount = data['count'];
          $scope.bidTotal = data['total'];


          var bidsArray = $scope.bids[$scope.bidType.name];

          while(bidsArray.length > 0) {
            bidsArray.pop();
          }

          var counter = 0;
          $scope.bidInterval = $interval(function() {
            if(counter < data.bids.length) {
              bidsArray.push(data.bids[counter]);
              counter++;
            }
            else {
              //TODO: Likely going to cause double-tap, should be in directive linkFx
              new Drawer().activate();
              new NavDropdown().activate();
            }
          }, 100, data.bids.length + 1);

        }
      };

      $scope.bidsFactory.getBids(options);
    };

    $scope.getDateByDateString = function(dateString) {
      return "Today, 11:00 am";
    };

    $scope.selectBidType = function(bidType) {

      if(null != bidType) {
        $scope.bidType = bidType;

        $scope.getBids();
      }
    };

    $scope.selectBidTypeByName = function(bidTypeNameString) {
      var bidTypeIndex = $scope.bidTypesCollection[bidTypeNameString];

      if(null != bidTypeIndex) {
        var bidType = $scope.bidTypesCollection.bidTypes[bidTypeIndex];

        $scope.selectBidType(bidType);
      }
    };

    $scope.selectBidState = function(bidState) {
      if(null != bidState) {
        $scope.bidState = bidState;

        $scope.getBids();
      }
    };

    $scope.selectBidStateByName = function(bidStateNameString) {
      var bidStateIndex = $scope.bidStatesCollection[bidStateNameString];

      if(null != bidStateIndex) {
        $scope.selectBidState($scope.bidStatesCollection.bidStates[bidStateIndex]);
      }
    };

    $scope.selectBidsByFilterName = function(bidFilterNameString) {

      if(null != bidFilterNameString) {
        $scope.bidFilter = bidFilterNameString;

        $scope.getBids();
      }

    };

    $scope.selectBidsBySortName = function(bidSortNameString) {

      if(null != bidSortNameString) {

        if($scope.bidSort == bidSortNameString) {
          $scope.bidOrder = !$scope.bidOrder;
        }
        else {
          $scope.bidSort = bidSortNameString;
        }

        $scope.getBids();
      }

    };

    $scope.selectBidsByIndexAndCount = function(index, count) {

      if(null != index && null != count) {
        $scope.bidIndex = index;
        $scope.bidCount = count;

        $scope.getBids();
      }

    };

    $scope.selectNextBidsPage = function() {
      var nextIndex = (($scope.bidIndex + $scope.bidCount) < $scope.bidTotal) ? $scope.bidIndex + $scope.bidCount : 0;

      $scope.selectBidsByIndexAndCount(nextIndex, $scope.bidCount);
    };

    $scope.selectPreviousBidsPage = function() {
      var previousIndex = (($scope.bidIndex - $scope.bidCount) >= 0) ? $scope.bidIndex - $scope.bidCount : $scope.bidTotal - ($scope.bidTotal % $scope.bidCount);

      if(previousIndex >= $scope.bidTotal) {
        previousIndex -= $scope.bidCount;
      }

      $scope.selectBidsByIndexAndCount(previousIndex, $scope.bidCount);
    };


    $scope.init = function() {
      $('.tabs li').first().addClass('active');

      $scope.getBids();
    };

  }]);