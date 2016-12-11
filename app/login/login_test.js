'use strict';

describe('gameApp.login module', function() {

  beforeEach(module('gameApp.login'));

  describe('login controller', function(){

    it('should have a valid controller', inject(function($controller) {
      //spec body
      var loginViewCtrl = $controller('LoginCtrl');
      expect(loginViewCtrl).toBeDefined();
    }));

    it('should get login succes',
    $httpBackend.expect('POST', 'localhost:3306/login')
        .respond(200, ""))

  });
});