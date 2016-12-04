'use strict';

angular.module('gameApp.test', ['ngRoute', 'ui.bootstrap'])
    .controller('TestCtrl', ['$scope', 'TestService',  function($scope, TestService) {

        $scope.isCollapsed = false;
        $scope.categories = ["Adjectives or adverb", "Articles", "Imperative"];
        $scope.tests = [];

        $scope.getAllTests = function()
        {
            TestService.getAllTests().success(function(result){

                angular.forEach(result, function(){

                   $scope.tests.push(result);
                })
            });
        };

        $scope.getTestsByCategory = function(category)
        {
            TestService.getAllTests().success(function(result){

                angular.forEach(result, function(item){
                    console.log(item.category);
                    console.log(category);
                    if(item.category == category) {

                        $scope.tests.push(item);
                    }
                });
            });
        }

        $scope.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };

    }]);
