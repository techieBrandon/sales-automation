  angular.module('hyla-sales-automation').directive('bidTypes', [function(){

    var directiveDefinitionObject = {
      controllerAs: 'BidTypeSelectorController',
      template: function(element, attrs) {

        return '<li ng-repeat="bidType in bidTypesCollection.bidTypes" ng-class="getActiveTypeClassByName(\'{{bidType.name}}\')"><a href="#" ng-click="selectBidTypeByName(bidType.name)">{{bidType.display_name}}<span class="number">{{bidType.total}}</span></a></li>';
      }

    };

    return directiveDefinitionObject;

  }]);