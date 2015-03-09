  angular.module('hyla-sales-automation').directive('bidDrawerContent', [function(){

    console.log("Reading bidDrawerContent")

    var directiveDefinitionObject = {
      controllerAs: 'BidDrawerController',
      templateUrl: function(tElement, tAttrs) {
        var drawerTemplateURL = tAttrs.bidDrawerContentTemplate;
        console.log("Fetching bidDrawerContent", drawerTemplateURL );
        return drawerTemplateURL;
      }
    };

    return directiveDefinitionObject;

  }]);