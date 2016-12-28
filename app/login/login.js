'use strict';

angular.module('gameApp.login', ['ngRoute', 'ui.bootstrap'])

    .controller('LoginCtrl', ['$rootScope', '$scope', 'UserService', '$location', function($rootScope,
                                                                                           $scope, UserService, $location) {

        $scope.user = {};
        $scope.wrongPass;

        $scope.login = function(){

            var loginInfo = {"email" : $scope.user.email, "password" : $scope.user.password};

            UserService.getUser(loginInfo.email)
                .success(function(result){

                    if(loginInfo.password == result.password){
                        $rootScope.user = result;
                        $location.url('/profile');
                        console.log($rootScope.user);
                    }
                    else{
                        $scope.wrongPass = "Wrong password or email, please try again";
                    }


                });
        }
    }]);