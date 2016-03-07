var _ = require('underscore');
var angular = require('angular');

export default class WebPhenoteController {
  constructor($http, $log, $timeout, $rootScope) {
    var that = this;
    this.name = 'webphenote';
    this.$http = $http;
    this.client = null;

    this.domains = [
      {
        title: 'Disease-Phenotype-Onset',
        href: 'formmultistep',  // disease-phenotype-onset',
        description:
          `Associate a disease with its phenotypes and the evidence that supports the
          claim.`
      },
      {
        title: 'Disease-Metabolomic',
        href: 'formmultistep',  // disease-metabolomic',
        description:
          `Associate a disease with its metabolomic signature and the evidence that supports the
          claim.`
      }
    ];
  }
}

WebPhenoteController.$inject = ['$http', '$log', '$timeout', '$rootScope'];
