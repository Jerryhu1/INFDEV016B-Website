'use strict';

angular.module('gameApp.test', ['ngRoute', 'ui.bootstrap'])
    .controller('TestCtrl', ['$scope', 'TestService', '$routeParams',
        function($scope, TestService, $routeParams) {

        $scope.exercises = [];
        $scope.answers = [];
        $scope.maxScore;
        $scope.score;
        var scope = $scope;

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

            $scope.submitAnswers = function()
            {

                $scope.score = 0;
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
                        $scope.score++;
                    }
                    else{
                        console.log('incorrect');
                    }
                }




            }

    }
]);