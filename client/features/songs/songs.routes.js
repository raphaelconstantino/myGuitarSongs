routes.$inject = ['$stateProvider'];

export default function routes ($stateProvider) {
  $stateProvider
    .state('/songs', {
      url: '/songs',
      template: require('./songs.html'),
      controller: 'SongsController',
      controllerAs: 'songs'
    });
}