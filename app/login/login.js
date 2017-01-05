'use strict';

angular.module('gameApp.login', ['ngRoute', 'ui.bootstrap'])

    .controller('LoginCtrl', ['$rootScope', '$scope', 'UserService', function($rootScope,
                                                                                           $scope, UserService) {

        $scope.user = {};
        $scope.wrongPass;

        $scope.login = function(){

            var loginInfo = {"email" : $scope.user.email, "password" : $scope.user.password};

            UserService.getAllUsers(loginInfo.email)
                .success(function(result){
                        $rootScope.user = result[0];
                        console.log($rootScope.user);
                });
        }
    }]);