'use strict';

angular.module('gameApp.testView', ['ngRoute'])



    .controller('TestViewCtrl', ['$scope', 'TestService',  function($scope, TestService) {

        $scope.categories = ["Adjectives and adverbs", "Articles", "Imperative"];


        $scope.getAllTests = function()
        {
            TestService.getAllTests().success(function(result){

                $scope.tests = result;
            });
        }

    }]);
