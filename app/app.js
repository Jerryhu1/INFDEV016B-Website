'use strict';

// Declare app level module which depends on views, and components
angular.module('gameApp', [
    'ngRoute',
    'gameApp.view1',
    'gameApp.view2',
    'gameApp.test',
    'user.services',
    'test.services',
    'gameApp.login',
    'gameApp.version'


]).
config(['$locationProvider', '$routeProvider', '$httpProvider', function($locationProvider, $routeProvider, $httpProvider) {
  $locationProvider.hashPrefix('!');
    $routeProvider
         .when('/test', {
                templateUrl: 'test/test.html',
                controller: 'TestCtrl'
            })
        .when('/login', {
        templateUrl: 'login/login.html',
        controller: 'LoginCtrl'
    })

        .otherwise({redirectTo: '/view1'});

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}])

