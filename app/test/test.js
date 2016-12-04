'use strict';

angular.module('gameApp.test', ['ngRoute'])



    .controller('TestCtrl', ['$scope', 'TestService',  function($scope, TestService) {

        $scope.categories = ["Adjectives and adverbs", "Articles", "Imperative"];


        $scope.getAllTests = function()
        {
            TestService.getAllTests().success(function(result){

                console.log(result);
                $scope.tests = result;
            });
        }


    }]);
