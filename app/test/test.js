'use strict';

angular.module('gameApp.test', ['ngRoute', 'ui.bootstrap'])
    .controller('TestCtrl', ['$scope', 'TestService', '$routeParams',
        function($scope, TestService, $routeParams) {

        $scope.exercises = [];
        $scope.answers = [];
        $scope.maxScore;
        $scope.score;

            TestService.getTest($routeParams.testId).success(function(result){
                $scope.test = result;
                exercisesToList();
            });

            var exercisesToList = function()
            {
                angular.forEach($scope.test.exercises, function(item){

                    $scope.exercises.push(item);
                });
                $scope.maxScore = $scope.exercises.length;

            };

            $scope.submitAnswers = function(){

                $scope.score = $scope.calculateScore($scope.exercises, $scope.answers);
            };

            $scope.calculateScore = function(exercises, answers)
            {
                var score = 0;
                for(var i=0; i<exercises.length; i++)
                {
                    var exerciseAnswer = exercises[i].answer;
                    var givenAnswer = answers[i];
                    if(exerciseAnswer == givenAnswer)
                    {
                        score++;
                    }
                }
                return score;
            }

    }
]);