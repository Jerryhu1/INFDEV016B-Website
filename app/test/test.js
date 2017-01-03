'use strict';

angular.module('gameApp.test', ['ngRoute', 'ui.bootstrap'])
    .controller('TestCtrl', ['$rootScope', '$scope', 'TestService', '$routeParams',
        function($rootScope, $scope, TestService, $routeParams) {

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

                var count = 1;

                var answers = {"userid" : $rootScope.user.id, "testid" : $scope.test.id, "answers" : []};

                angular.forEach($scope.answers, function(item){

                    var answer = {"id" : count, "answer" : item};
                    answers.answers.push(answer);
                    count++;

                });
                console.log(answers);
                TestService.submitAnswers(answers)
            };

            //For mockdata only
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
            };

            $scope.checkIfPass = function(score)
            {

                if(score > $scope.test.pass_value)
                {
                    console.log('pass');

                    return true;
                }
                else {
                    return false;
                }
            }

    }
]);