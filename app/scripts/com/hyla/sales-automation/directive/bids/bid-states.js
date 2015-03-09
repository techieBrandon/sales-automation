  angular.module('hyla-sales-automation').directive('bidStates', [function(){

    var directiveDefinitionObject = {
      controllerAs: 'BidStateSelectorController',
      template: function(tElement, tAttrs) {

        return '<li ng-repeat="bidState in bidStatesCollection.bidStates" ng-class="getActiveStateClassByName(\'{{bidState.name}}\')"><a href="#" ng-click="selectBidStateByName(bidState.name)">{{bidState.name}}</a></li>';
      }

    };

    return directiveDefinitionObject;

  }]);