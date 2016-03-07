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
    this.model = {foo: 'foo'};
    console.log('this:', this);
    console.log('$scope:', $scope);
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


    // this.steps = [
    //     {
    //         template: 'Hello <button class="btn btn-default" ng-click="$nextStep()">Next</button>'
    //     },
    //     {
    //         template: 'World <button class="btn btn-default" ng-click="$previousStep()">Previous</button>'
    //     }
    // ];


    this.templateSteps = [
      {
          templateUrl: step1TemplateUrl,
          title: 'Introduction'
      },
      {
          templateUrl: step2TemplateUrl,
          hasForm: true,
          title: 'Update validity'
      },
      {
          templateUrl: step3TemplateUrl,
          hasForm: true,
          title: 'Automatically update validity'
      },
      {
          templateUrl: step4TemplateUrl,
          title: 'Congratulations'
      }
    ];

  }
}

FormMultiStepController.$inject = ['$scope', '$http', '$log', '$timeout', '$rootScope'];
