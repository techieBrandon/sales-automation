angular.module('hyla-sales-automation').directive('trackingTypes', [function(){

    var directiveDefinitionObject = {
      controllerAs: 'TrackingTypeSelectorController',
      template: function(element, attrs) {

        return '<li ng-repeat="trackingType in trackingTypesCollection.trackingTypes" ng-class="getActiveTypeClassByName(\'{{trackingType.name}}\')"><a href="#" ng-click="selectTrackingTypeByName(trackingType.name)">{{trackingType.display_name}}<span class="number">{{trackingType.total}}</span></a></li>';
      }

    };

    return directiveDefinitionObject;

  }]);