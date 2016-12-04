'use strict';

// Declare app level module which depends on views, and components
angular.module('gameApp', [
    'ngRoute',
    'gameApp.view1',
    'gameApp.view2',
    'gameApp.testView',
    'user.services',
    'test.services',
    'gameApp.loginView',
    'gameApp.version'


]).
config(['$locationProvider', '$routeProvider', '$httpProvider', function($locationProvider, $routeProvider, $httpProvider) {
  $locationProvider.hashPrefix('!');
    $routeProvider
         .when('/testview', {
                templateUrl: 'testview/testview.html',
                controller: 'TestViewCtrl'
            })
        .when('/loginview', {
        templateUrl: 'loginView/loginView.html',
        controller: 'LoginViewCtrl'
    })

        .otherwise({redirectTo: '/view1'});

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}])

