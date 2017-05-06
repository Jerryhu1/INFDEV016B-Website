'use strict';

// Declare app level module which depends on views, and components
angular.module('gameApp', [
    'ngRoute',
    'ngAnimate',
    'ngMock',
    'gameApp.tests',
    'gameApp.adjective',
    'gameApp.profile',
    'gameApp.imperative',
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
        .when('/tests/adjective/:testId',{
                templateUrl: 'test/adjective.html',
                controller: 'AdjectiveCtrl'
        })
        .when('/tests/imperative/:testId',{
                templateUrl: 'test/imperative.html',
                controller: 'ImperativeCtrl'
        })
        .when('/profile',{
                templateUrl: 'profile/profile.html',
                controller: 'ProfileCtrl'
        })


        .otherwise({redirectTo: '/'});

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);




