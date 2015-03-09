  angular.module('hyla-sales-automation').directive('bidSort', [function(){

    var directiveDefinitionObject = {
      controllerAs: 'BidSortController',
      template: function(tElement, tAttrs) {
        var bidSortName = tAttrs.bidSortName;

        return '<span class="text" ng-click="selectBidsBySortName(\''+bidSortName+'\')">'+bidSortName+' <span class="icon" ng-class="getSortIconClassByName(\''+bidSortName+'\')"></span></span>';
      }
    };

    return directiveDefinitionObject;

  }]);