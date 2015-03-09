angular.module('hyla-sales-automation').directive('trackingList', [function(){

    var directiveDefinitionObject = {
      controllerAs: 'TrackingListController',
      templateUrl: function(tElement, tAttrs) {
        var templateURL = tAttrs.trackingListUrl;
        return templateURL;
      }
    };

    return directiveDefinitionObject;

  }]);