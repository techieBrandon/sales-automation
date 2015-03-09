  angular.module('hyla-sales-automation').directive('bidDrawer', ['SelectDropdown', function(SelectDropdown){

    var directiveDefinitionObject = {
      controllerAs: 'BidDrawerController',
      templateUrl: function(tElement, tAttrs) {
        var drawerTemplateURL = tAttrs.bidDrawerTemplate;

        return drawerTemplateURL;
      },
      link: function(scope, element, attrs){
        var selectDropDown = new SelectDropdown();
        selectDropDown.activate(element);
      }
    };

    return directiveDefinitionObject;

  }])