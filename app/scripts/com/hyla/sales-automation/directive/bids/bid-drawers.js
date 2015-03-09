  angular.module('hyla-sales-automation').directive('bidDrawers', ['SelectDropdown', function(SelectDropdown){

    var directiveDefinitionObject = {
      controllerAs: 'BidDrawerController',
      templateUrl: function(tElement, tAttrs) {
        var drawerTemplateURL = tAttrs.bidDrawersTemplate;

        return drawerTemplateURL;
      },
      link: function(scope, element, attrs){
        var selectDropDown = new SelectDropdown();
        selectDropDown.activate(element);
      }
    };

    return directiveDefinitionObject;

  }])