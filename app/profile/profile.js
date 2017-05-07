'use strict';

angular.module('gameApp.profile', ['ngRoute', 'ui.bootstrap'])
    .controller('ProfileCtrl', ['$rootScope', '$scope', 'UserService', 'TestService', '$routeParams', '$window',
        function($rootScope, $scope, UserService, TestService, $routeParams, $window) {

            $scope.results = [];


            try {
                var user = JSON.parse($window.localStorage.getItem("user"));
            }catch(e){
                $scope.error = "You are not logged in";
            }


            if(user != null){
                $scope.profile = user;
            }else{
                $scope.error = "You are not logged in";
            }


            TestService.getAllTests().success(function(result){
                $scope.testList = result;
                if(user) {
                    getResults();
                }
            });


            var getResults = function() {
                angular.forEach($scope.testList, function (test) {

                    if(test && user){
                        TestService.getTestResults(test._id, user._id).success(function (result) {
                            if(result[0] != undefined) {
                                var testResult = {
                                    "name": test.name,
                                    "level": test.level,
                                    "score": result[result.length-1].correctAnswers,
                                    "passed": result[result.length-1].passed
                                };
                                $scope.results.push(testResult);
                            }
                        })
                            .error(function(res){
                                console.log("No tests found for user: " + user._id);
                            })
                    }
                    else{
                       $scope.error = "Error loading tests";
                    }

                });

            };
        }
    ]);