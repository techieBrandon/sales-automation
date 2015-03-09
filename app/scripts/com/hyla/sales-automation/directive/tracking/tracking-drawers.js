angular.module('hyla-sales-automation').directive('trackingDrawers', ['SelectDropdown', function(SelectDropdown){

    var directiveDefinitionObject = {
      controllerAs: 'TrackingDrawerController',
      templateUrl: function(tElement, tAttrs) {
        var drawerTemplateURL = tAttrs.trackingDrawersTemplate;

        return drawerTemplateURL;
      },
      link: function(scope, element, attrs){
        var selectDropDown = new SelectDropdown();
        selectDropDown.activate(element);
      }
    };

    return directiveDefinitionObject;

  }])