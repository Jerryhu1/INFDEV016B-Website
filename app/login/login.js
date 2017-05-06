'use strict';

angular.module('gameApp.login', ['ngRoute', 'ui.bootstrap'])

    .controller('LoginCtrl', ['$rootScope', '$httpBackend', '$scope', 'UserService',
        function($httpBackend, $rootScope, $scope, UserService) {

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
                        if (result != null) {
                            $rootScope.user = result;
                            return true;
                        }
                    }).error(function (result) {
                        $scope.errorMessage = "Invalid credentials!";
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
            var credentials = {"email" : $scope.user.email, "password" : $scope.user.password, "level" : "A1"};

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

        $scope.mockRegistration = function()
        {
            var user = {"email" : "intTester@test.com", "password" : "test", "level" : "A1"};
            var answers = {"userId" : "", "testId" : "", "answers" : []};
            UserService.register(user).success(function(res){

                TestService.getTestsBylevel(user.level).success(function(res){
                    angular.forEach(res, function(test){
                        answers.testId = test._id;
                        angular.forEach(test.exercises, function(exercise){
                            answers.answers.push(exercise.answer);
                        });
                        TestService.submitAnswers(answers);
                    });
                });

                UserService.getUser(res._id).success(function(user){

                    if(user.level == "A1")
                    {
                        return true;
                    }
                    else {
                        false;
                    }
                });
            });
        }
    }]);