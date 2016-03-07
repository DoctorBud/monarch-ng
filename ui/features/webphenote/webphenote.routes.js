var webphenoteTpl = require('./webphenote.html');
var formmultistepTpl = require('./formmultistep.html');
var formformlyTpl = require('./formformly.html');

export default function routes($stateProvider) {
  $stateProvider
    .state('webphenote', {
      url: '/webphenote',
      templateUrl: webphenoteTpl,
      controller: 'WebPhenoteController',
      controllerAs: 'webphenote'
    })
    .state('formmultistep', {
      url: '/formmultistep',
      templateUrl: formmultistepTpl,
      controller: 'FormMultiStepController',
      controllerAs: 'formmultistep'
    })
    .state('disease-phenotype-multi-step', {
      url: '/disease-phenotype-multi-step',
      templateUrl: formmultistepTpl,
      controller: 'FormMultiStepController',
      controllerAs: 'formmultistep'
    })
    .state('disease-metabolomic-multi-step', {
      url: '/disease-metabolomic-multi-step',
      templateUrl: formmultistepTpl,
      controller: 'FormMultiStepController',
      controllerAs: 'formmultistep'
    })
    .state('formformly', {
      url: '/formformly',
      templateUrl: formformlyTpl,
      controller: 'FormFormlyController',
      controllerAs: 'formformly'
    });
}

routes.$inject = ['$stateProvider'];
