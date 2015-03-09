angular.module('hyla-sales-automation').directive('trackingDrawerContent', [function(){

    var directiveDefinitionObject = {
      controllerAs: 'TrackingDrawerController',
      templateUrl: function(tElement, tAttrs) {
        var drawerTemplateURL = tAttrs.trackingDrawerContentTemplate;

        return drawerTemplateURL;
      }
    };

    return directiveDefinitionObject;

  }]);