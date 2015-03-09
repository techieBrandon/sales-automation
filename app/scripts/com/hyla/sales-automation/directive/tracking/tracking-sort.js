angular.module('hyla-sales-automation').directive('trackingSort', [function(){

    var directiveDefinitionObject = {
      controllerAs: 'TrackingSortController',
      template: function(tElement, tAttrs) {
        var trackingSortName = tAttrs.trackingSortName;

        return '<span class="text" ng-click="selectTrackingBySortName(\''+trackingSortName+'\')">'+trackingSortName+' <span class="icon" ng-class="getSortIconClassByName(\''+trackingSortName+'\')"></span></span>';
      }
    };

    return directiveDefinitionObject;

  }]);