import songs from './index';

describe('Controller: Songs', function() {
  let $controller;

  beforeEach(angular.mock.module(songs));

  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('name is initialized to World', function() {
    let ctrl = $controller('SongsController');
    expect(ctrl.test).toBe("test");
  });
});