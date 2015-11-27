import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import songs from './features/songs';
import dashboard from './features/dashboard';

import routing from './app.config';

angular.module('app', [uirouter, songs, dashboard]).config(routing);