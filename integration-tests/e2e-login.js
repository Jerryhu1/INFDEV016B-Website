var myAppDev = angular.module('gameApp.login-e2e', ['myApp', 'ngMockE2E']);

myAppDev.run(function($httpBackend) {
    var phones = [{name: 'phone1'}, {name: 'phone2'}];

    // returns the current list of phones
    $httpBackend.whenGET('/users').passThrough();


});