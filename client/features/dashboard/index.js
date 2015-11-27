import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './dashboard.routes';
import DashboardController from './dashboard.controller';

export default angular.module("app.dashboard", [uirouter])
	.config(routing)
	.controller("DashboardController", DashboardController)
	.name;