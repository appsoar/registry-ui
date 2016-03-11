'use strict';

describe('Controller: LoginController', function () {

  // load the controller's module
  beforeEach(module('registryUiApp'));

  var LoginController,scope,$httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
    scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    LoginController = $controller('LoginController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should be delete ok', function () {
    // expect(LoginController.data).toBe('200');
  });
});
