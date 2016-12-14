'use strict';

angular.module('gameApp.test', ['ngRoute', 'ui.bootstrap'])
    .controller('TestCtrl', ['$scope', 'TestService', '$routeParams',
        function($scope, TestService, $routeParams) {

        $scope.exercises = [];
        $scope.answers = [];


            TestService.getTest($routeParams.testId).success(function(result){


                $scope.test = result;

                exercisesToList();
            });

            var exercisesToList = function()
            {
                angular.forEach($scope.test.exercises, function(item){


                    $scope.exercises.push(item);

                })
                console.log($scope.exercises);
            };

            $scope.submitAnswers = function()
            {
                console.log($scope.exercises);
                console.log($scope.answers);
                for(var i=0; i<$scope.exercises.length; i++)
                {

                    var exerciseAnswer = $scope.exercises[i].answer;
                    var givenAnswer = $scope.answers[i+1];
                    console.log(exerciseAnswer);
                    console.log(givenAnswer);
                    if(exerciseAnswer == givenAnswer)
                    {
                        console.log('correct');
                    }
                }

            }

    }
]);