'use strict';

angular.module('gameApp.login', ['ngRoute', 'ui.bootstrap'])

    .controller('LoginCtrl', ['$rootScope', '$scope', 'UserService', function($rootScope, $scope, UserService) {

        $scope.user = {};
        $scope.errorMessage = "";

        $scope.login = function(){

            var loginInfo = {"email" : $scope.user.email, "password" : $scope.user.password};
            if($scope.validateFields(loginInfo)) {
                $scope.attemptLogin(loginInfo);
            }

        };

        $scope.attemptLogin = function(credentials) {
            if($scope.validateFields(credentials)) {
                UserService.login(credentials)
                    .success(function (result) {
                        if (result == "Login succesful") {
                            $rootScope.user = credentials;
                            $rootScope._id = "586bcfb264f8a31a24e880f0";

                            UserService.getUser("586bcfb264f8a31a24e880f0").success(function (res) {
                                console.log("Got user!");
                                console.log(res);
                                $rootScope.user = res[0];
                                console.log('Login success!');
                                return true;
                            });

                        }
                        return true;
                    }).error(function (result) {
                        $scope.errorMessage = "Invalid credentials! Using mock account";
                        $scope.useMockAccount();
                        return false;
                    }
                );
                return false;
            }
            return false;
        };


        $scope.useMockAccount = function(){
            UserService.getMockUser("jerryhu1@live.nl").success(function(user){
                console.log("Using mock account");
                $rootScope.user = user[0];
                return true;
            }).error(function(res){
                return false;
            });
            return true;
        };

        $scope.register = function()
        {
            var credentials = {"email" : $scope.user.email, "password" : $scope.user.password};

           if($scope.validateFields(credentials)) {

               UserService.register(credentials).success(function (res) {
                   alert('Account succesfully registered with email: ' + res.email);
               }).error(function (res) {
                   if (res.code == 11000) {
                       $scope.errorMessage = "This account already exists";
                   }
               });
           }
        };

        $scope.validateFields = function(credentials){
            $scope.errorMessage = "";
            console.log(credentials);
            if(credentials.password == undefined ||credentials.password == "")
            {
                $scope.errorMessage = "No password inserted";
                return false;
            }
            else if(credentials.email == undefined || credentials.password == "")
            {
                $scope.errorMessage = "No username inserted";
                return false;
            }
            else{
                return true;
            }
        }
    }]);