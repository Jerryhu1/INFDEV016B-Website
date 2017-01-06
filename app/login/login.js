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
                           $rootScope.user._id = "586fdbf3e39e4c3c0cf87c32";
                           console.log('Login succesful');
                       }
                });

            UserService.getUser("586fdbf3e39e4c3c0cf87c32").success(function(user){

                $rootScope.user = user[0];
            })
        }
    }]);