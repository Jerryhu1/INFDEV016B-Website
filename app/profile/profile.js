'use strict';

angular.module('gameApp.profile', ['ngRoute', 'ui.bootstrap'])
    .controller('ProfileCtrl', ['$rootScope', '$scope', 'UserService', 'TestService', '$routeParams',
        function($rootScope, $scope, UserService, TestService, $routeParams) {

            $scope.testList = [];

            var getDetailTestInfo = function(tests)
            {
                angular.forEach(tests, function(item){
                    TestService.getTest(item.testId).success(function (test) {
                        var completedTest = {"id" : test.id, "name" : test.name, "score" : item.score};
                        console.log(completedTest);
                        $scope.testList.push(completedTest);
                    });
                });
                console.log($scope.testList);
            }

            if($rootScope.user != null){
                $scope.profile = $rootScope.user;
                getDetailTestInfo($scope.profile.completedTests);
            }
        }
    ]);