import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import songs from './features/songs';

import routing from './app.config';

angular.module('app', [uirouter, songs]).config(routing);