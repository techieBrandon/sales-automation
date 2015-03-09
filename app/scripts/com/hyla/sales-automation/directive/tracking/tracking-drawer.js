angular.module('hyla-sales-automation').directive('trackingDrawer', ['SelectDropdown', function(SelectDropdown){

    var directiveDefinitionObject = {
      controllerAs: 'TrackingDrawerController',
      templateUrl: function(tElement, tAttrs) {
        var drawerTemplateURL = tAttrs.trackingDrawerTemplate;

        return drawerTemplateURL;
      },
      link: function(scope, element, attrs){
        var selectDropDown = new SelectDropdown();
        selectDropDown.activate(element);
      }
    };

    return directiveDefinitionObject;

  }])