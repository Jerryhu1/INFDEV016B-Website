'use strict';

angular.module('gameApp.loginView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/loginView', {
    templateUrl: 'loginView/loginView.html',
    controller: 'LoginViewCtrl'
  });
}])

.controller('LoginViewCtrl', ['$rootScope', '$scope', 'UserService', function($scope, UserService) {

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