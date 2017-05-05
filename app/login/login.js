'use strict';

angular.module('gameApp.login', ['ngRoute', 'ui.bootstrap'])

    .controller('LoginCtrl', ['$rootScope', '$scope', 'UserService', function($rootScope,
                                                                                           $scope, UserService) {

        $scope.user = {};
        $scope.wrongPass;

        $scope.login = function(){

            var loginInfo = {"email" : $scope.user.email, "password" : $scope.user.password};

            $scope.attemptLogin(loginInfo);


        };

        $scope.attemptLogin = function(credentials)
        {
            UserService.login(credentials)
                .success(function(result){
                    if(result = "Login succesful")
                    {
                        $rootScope.user = credentials;
                        $rootScope._id = "586bcfb264f8a31a24e880f0";

                        UserService.getUser("586bcfb264f8a31a24e880f0").success(function(res){
                            console.log("Got user!");
                            console.log(res);
                           $rootScope.user = res[0];
                        });
                        console.log('Login success!');
                    }
                    return true;
                }).error(function(result){
                  $scope.wrongPass = "Invalid credentials! Using mock account";

                $scope.useMockAccount();
                return false;
            });
        };


        $scope.useMockAccount = function(){
            UserService.getMockUser("jerryhu1@live.nl").success(function(user){
                console.log("Using mock account");
                $rootScope.user = user[0];
                return true;
            }).error(function(res){
                return false;
            });

        }
    }]);