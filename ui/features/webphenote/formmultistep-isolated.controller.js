var angular = require('angular');

export default class IsolatedStepCtrl {
  constructor($scope, multiStepFormScope, multiStepFormInstance) {
    this.model = angular.copy(multiStepFormScope.formmultistep.model);
    var that = this;

    $scope.$on('$destroy', function () {
      multiStepFormScope.formmultistep.model = angular.copy(that.model);
    });
  }
}

IsolatedStepCtrl.$inject = ['$scope', 'multiStepFormScope', 'multiStepFormInstance'];
