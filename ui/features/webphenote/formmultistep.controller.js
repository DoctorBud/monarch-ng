var _ = require('underscore');
var angular = require('angular');

var step1TemplateUrl = require('!ngtemplate!html!./disease-phenotype-multi-step/step1.html');
var step2TemplateUrl = require('!ngtemplate!html!./disease-phenotype-multi-step/step2.html');
var step3TemplateUrl = require('!ngtemplate!html!./disease-phenotype-multi-step/step3.html');
var step4TemplateUrl = require('!ngtemplate!html!./disease-phenotype-multi-step/step4.html');

export default class FormMultiStepController {
  constructor($scope, $http, $log, $timeout, $rootScope) {
    var that = this;
    this.name = 'formmultistep';
    this.$http = $http;
    this.client = null;
    this.model = {
        domain: 'NODOMAIN',
        title: 'NOTITLE',
        phenotype: 'NOPHENOTYPE',
        onset: 'NOONSET',
        evidence: 'NOEVIDENCE'
    };

    this.steps = [
        {
            templateUrl: step1TemplateUrl,
            title: 'Saving data'
        },
        {
            templateUrl: step2TemplateUrl,
            hasForm: true,
            title: 'Using scope inheritance'
        },
        {
            templateUrl: step3TemplateUrl,
            hasForm: true,
            isolatedScope: true,
            controller: 'IsolatedStepCtrl',
            controllerAs: 'isolated',
            title: 'Isolated step scopes'
        },
        {
            templateUrl: step4TemplateUrl,
            title: 'Your name is...'
        }
    ];


  }
}

FormMultiStepController.$inject = ['$scope', '$http', '$log', '$timeout', '$rootScope'];
