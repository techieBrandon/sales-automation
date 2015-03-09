  angular.module('hyla-sales-automation').directive('bidList', [function(){

    var directiveDefinitionObject = {
      controllerAs: 'BidListController',
      templateUrl: function(tElement, tAttrs) {
        var templateURL = tAttrs.bidListUrl;
        return templateURL;
      }
    };

    return directiveDefinitionObject;

  }]);