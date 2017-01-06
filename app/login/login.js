'use strict';

angular.module('gameApp.login', ['ngRoute', 'ui.bootstrap'])

    .controller('LoginCtrl', ['$rootScope', '$scope', 'UserService', function($rootScope,
                                                                                           $scope, UserService) {

        $scope.user = {};
        $scope.wrongPass;

        $scope.login = function(){

            var loginInfo = {"email" : $scope.user.email, "password" : $scope.user.password};

            UserService.login(loginInfo)
                .success(function(result){
                       if(result = "Login succesful")
                       {
                           $rootScope.user = loginInfo;
                           console.log('Login succesful');
                       }
                });
        }
    }]);