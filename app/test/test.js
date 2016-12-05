'use strict';

angular.module('gameApp.test', ['ngRoute', 'ui.bootstrap'])
    .controller('TestCtrl', ['$scope', 'TestService', '$routeParams',
        function($scope, TestService, $routeParams) {

        $scope.exercises = [];

            TestService.getTest($routeParams.testId).success(function(result){


                $scope.test = result;

                exercisesToList();
            });

            var exercisesToList = function()
            {
                angular.forEach($scope.test.exercises, function(item){

                    $scope.exercises.push(item);
                })
            }


    }
]);