'use strict';

angular.module('gameApp.login', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', ['$rootScope', '$scope', 'UserService', 'ui.bootstrap', function($scope, UserService) {

  $scope.login = function(){

     // var loginInfo = {"email" : user.email, "password" : user.password};
      var loginInfo = {
          "email": "cool@email.nl",
          "password": "password2"
      }
      UserService.login(loginInfo)
          .success(function(result){

               //   $rootScope.user = $scope.loginInfo.email;

                  $scope.user = result;


      });
  }
}]);