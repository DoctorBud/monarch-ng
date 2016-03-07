import './webphenote.less';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import multiStepForm from 'angular-multi-step-form';

import routing from './webphenote.routes';
import WebPhenoteController from './webphenote.controller';
import FormMultiStepController from './formmultistep.controller';
import IsolatedStepCtrl from './formmultistep-isolated.controller';
import FormFormlyController from './formformly.controller';

var webphenoteModule = angular.module('app.webphenote', [uirouter, 'multiStepForm']);

webphenoteModule.config(routing);
webphenoteModule.controller('WebPhenoteController', WebPhenoteController);
webphenoteModule.controller('FormFormlyController', FormFormlyController);
webphenoteModule.controller('IsolatedStepCtrl', IsolatedStepCtrl);
webphenoteModule.controller('FormMultiStepController', FormMultiStepController);

export default {
  WebPhenoteController: WebPhenoteController,
  FormFormlyController: FormFormlyController,
  FormMultiStepController: FormMultiStepController
};
