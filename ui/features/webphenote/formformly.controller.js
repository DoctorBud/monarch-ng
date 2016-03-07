var _ = require('underscore');
var angular = require('angular');

export default class FormFormlyController {
  constructor($http, $log, $timeout, $rootScope) {
    var that = this;
    this.name = 'formformly';
    this.$http = $http;
    this.client = null;
  }

}


FormFormlyController.$inject = ['$http', '$log', '$timeout', '$rootScope'];
