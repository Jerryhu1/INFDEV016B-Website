'use strict';

angular.module('gameApp.tests', ['ngRoute', 'ui.bootstrap'])
    .controller('TestsCtrl', ['$scope', 'TestService',  function($scope, TestService) {

        $scope.isCollapsed = false;
        $scope.categories = ["Adjectives or adverb", "Articles", "Imperative"];
        $scope.tests = [{}, []];

        $scope.getAllTests = function()
        {
            TestService.getAllTests().success(function(result){

                    $scope.tests = result;
            });
        };

        $scope.getTestsBylevel = function(level)
        {
            var testsByLevel = [];
            angular.forEach($scope.tests, function(test){

                if(test.level == level) {
                    testsByLevel.push(test);
                }
                angular.forEach($scope.categories, function(category){

                    $scope.getTestsByCategory(testsByLevel, category);
                });
                console.log($scope.tests);
            })


        };

        $scope.getTestsByCategory = function(tests, category)
        {
            var tempTests = [];

            angular.forEach(tests, function(item){
                if(item.category == category) {
                   tempTests.push(item);
                }
            });

            tests.push(category, tempTests);
        };

        $scope.oneAtATime = true;
        $scope.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };

        $scope.status = {
            isopen: false
        };
    }]);
