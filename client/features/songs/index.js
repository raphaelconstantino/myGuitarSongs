import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './songs.routes';
import SongsController from './songs.controller';

export default angular.module("app.songs", [uirouter])
	.config(routing)
	.controller("SongsController", SongsController)
	.name;