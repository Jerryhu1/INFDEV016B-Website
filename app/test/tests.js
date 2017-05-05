'use strict';

angular.module('gameApp.tests', ['ngRoute', 'ui.bootstrap'])
    .controller('TestsCtrl', ['$rootScope', '$scope', 'TestService',  function($rootScope, $scope, TestService) {

        $scope.isCollapsed = false;
        $scope.categories = ["Adjectives or adverb", "Articles", "Imperative"];
        var tests = [];
        $scope.tests = [];
        var currentCategory;


        $scope.getAllTests = function()
        {
            TestService.getAllTests().success(function(result){

                    $scope.setTestsByLevel(result);
            })
                .error(function(res){
                    TestService.getAllMockTests().success(function(result){
                        $scope.setTestsByLevel(result);
                    });
                });
        };

        $scope.setTestsByLevel = function(testList)
        {

            angular.forEach(testList, function(test){
                if(test.level == $rootScope.user.level){
                    tests.push(test);
                    $scope.tests.push(test);
                }
            })
        };

        $scope.getTestsBylevel = function(level)
        {
            tests = [];

            TestService.getAllTestsByLevel(level).success(function(result){

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
