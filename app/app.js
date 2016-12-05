'use strict';

// Declare app level module which depends on views, and components
angular.module('gameApp', [
    'ngRoute',
    'ngAnimate',
    'gameApp.view1',
    'gameApp.view2',
    'gameApp.tests',
    'gameApp.test',
    'user.services',
    'test.services',
    'gameApp.login',
    'gameApp.version'


]).
config(['$locationProvider', '$routeProvider', '$httpProvider', function($locationProvider, $routeProvider, $httpProvider) {
  $locationProvider.hashPrefix('!');
    $routeProvider
         .when('/tests', {
                templateUrl: 'test/tests.html',
                controller: 'TestsCtrl'
            })
        .when('/login', {
        templateUrl: 'login/login.html',
        controller: 'LoginCtrl'
        })
        .when('/tests/:testId',{
                templateUrl: 'test/test.html',
                controller: 'TestCtrl'
        })


        .otherwise({redirectTo: '/view1'});

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}])

