'use strict';

angular.module('gameApp.tests', ['ngRoute', 'ui.bootstrap'])
    .controller('TestsCtrl', ['$scope', 'TestService',  function($scope, TestService) {

        $scope.isCollapsed = false;
        $scope.categories = ["Adjectives or adverb", "Articles", "Imperative"];
        var tests = [];
        $scope.tests = [];


        $scope.getAllTests = function()
        {
            TestService.getAllTests().success(function(result){

                    tests = result;
            });
        };

        $scope.getTestsBylevel = function(level)
        {
            var testsByLevel = [];

            TestService.getAllTestsByLevel(level).success(function(result){

               tests = result;
            })


        };

        $scope.filterTestsByCategory = function(category)
        {
            angular.forEach(tests, function(item){

                $scope.tests.push(item);
            })
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
