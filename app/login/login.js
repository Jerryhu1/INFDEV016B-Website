'use strict';

angular.module('gameApp.login', ['ngRoute', 'ui.bootstrap'])

    .controller('LoginCtrl', ['$rootScope', '$scope', 'UserService', function($rootScope, $scope, UserService) {

        $scope.user = {};

        $scope.login = function(){

            var loginInfo = {"email" : $scope.user.email, "password" : $scope.user.password};

            UserService.getUser(loginInfo.email)
                .success(function(result){

                    if(loginInfo.password == result.password){
                        $rootScope.user = result;
                        console.log($rootScope.user);
                    }


                });
        }
    }]);