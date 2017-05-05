'use strict';

angular.module('gameApp.profile', ['ngRoute', 'ui.bootstrap'])
    .controller('ProfileCtrl', ['$rootScope', '$scope', 'UserService', 'TestService', '$routeParams',
        function($rootScope, $scope, UserService, TestService, $routeParams) {

            $scope.results = [];

            var user = $rootScope.user;

            TestService.getAllTests().success(function(result){
                $scope.testList = result;
                getResults();
            });


            var getResults = function() {
                angular.forEach($scope.testList, function (test) {
                    TestService.getTestResults(test._id, user._id).success(function (result) {
                        
                        var testResult = {
                            "name": test.name,
                            "level": test.level,
                            "score": result[0].correctAnswers,
                            "passed": result[0].passed
                        };
                        $scope.results.push(testResult);
                    })
                        .error(function(res){
                            console.log("No tests found for user: " + user._id);
                        })

                });
            };

            if($rootScope.user != null){
                $scope.profile = $rootScope.user;
            }


        }
    ]);