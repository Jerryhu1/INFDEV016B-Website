'use strict';

angular.module('gameApp.tests', ['ngRoute', 'ui.bootstrap'])
    .controller('TestsCtrl', ['$scope', 'TestService',  function($scope, TestService) {

        $scope.isCollapsed = false;
        $scope.categories = ["Adjectives or adverb", "Articles", "Imperative"];
        var tests = [];
        $scope.tests = [];
        var currentCategory;


        $scope.getAllTests = function()
        {
            TestService.getAllTests().success(function(result){

                    tests = result;
            });
        };

        $scope.getTestsBylevel = function(level)
        {
            tests = [];

            TestService.getAllTestsByLevel(level).success(function(result){

                console.log(currentCategory);
                if(currentCategory != null){
                    tests = result;
                    $scope.filterTestsByCategory(currentCategory);
                }
                else {
                    $scope.tests = result;
                }
            })


        };

        $scope.filterTestsByCategory = function(category)
        {
            currentCategory = category;
            $scope.tests = [];
            angular.forEach(tests, function(item){

                if(item.category == category) {
                    $scope.tests.push(item);
                }
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
