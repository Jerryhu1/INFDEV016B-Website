'use strict';

// Declare app level module which depends on views, and components
angular.module('gameApp', [
    'ngRoute',
    'ngAnimate',
    'gameApp.tests',
    'gameApp.test',
    'gameApp.profile',
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
        .when('/profile',{
                templateUrl: 'profile/profile.html',
                controller: 'ProfileCtrl'
        })


        .otherwise({redirectTo: '/'});

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);




