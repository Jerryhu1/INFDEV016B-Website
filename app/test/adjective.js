'use strict';

angular.module('gameApp.adjective', ['ngRoute', 'ui.bootstrap'])
    .controller('AdjectiveCtrl', ['$rootScope', '$window', '$scope' , '$routeParams', 'TestService',
        function($rootScope, $window, $scope,  $routeParams, TestService) {

        $scope.exercises = [];
        $scope.answers = [];
        $scope.maxScore;
        $scope.score;
            try {
                var user = JSON.parse($window.localStorage.getItem("user"));
            }catch(e){
                $scope.errorMessage("You are not logged in!");
            }

            TestService.getTestById($routeParams.testId).success(function(result){

                $scope.test = result[0];
                exercisesToList();

            }).error(function(){
                TestService.getMockTest($routeParams.testId).success(function(result){
                    console.log("Getting mock test, service is down!");
                    $scope.test = result[0];
                    exercisesToList();
                });
            });

            var exercisesToList = function()
            {
                angular.forEach($scope.test.exercises, function(item){

                    $scope.exercises.push(item);
                });
                $scope.maxScore = $scope.exercises.length;

            };

            $scope.submitAnswers = function(){

                var count = 1;

                if(user == null){
                    alert('You are not logged in tests will not save!');
                }


                var answers = {"userId" : user._id, "testId" : $scope.test._id, "answers" : []};

                angular.forEach($scope.answers, function(item){

                    var answer = {"id" : count, "answer" : item};
                    answers.answers.push(answer);
                    count++;
                });

                $scope.score = $scope.calculateScore($scope.exercises, answers.answers);


                TestService.submitAnswers(answers).success(function (result) {
                    if (result.passed == false) {
                        alert('You did not pass |' +
                            'Your score: ' + result.correctAnswers);
                    }
                    else {
                        alert('You passed! |' +
                            'Your score: ' + result.correctAnswers);
                    }

                    $window.location.href = '/#!/tests';
                }).error(function(){
                    console.log("Not logged in results will not save! Score is: " + $scope.score);
         
                })

            };

                $scope.submitMockAnswers = function(userId, exercises, passValue, answers){

                var count = 1;

                var answersList = {"userId" : userId,  "answers" : []};

                angular.forEach(answers, function(item){
                    var answer = {"id" : count, "answer" : item};
                    answersList.answers.push(answer);
                    count++;

                });
                $scope.score = $scope.calculateScore($scope.exercises, answersList.answers);
                $scope.passed = $scope.checkIfPass($scope.score, passValue);

                return $scope.passed;
            };

            //For mockdata only
            $scope.calculateScore = function(exercises, answers)
            {

                var score = 0;
                for(var i=0; i<exercises.length; i++)
                {
                    var exerciseAnswer = exercises[i].answer;
                    var givenAnswer = "";
                    if(answers[i] == undefined){
                        continue;
                    }
                    else
                    {
                        givenAnswer = answers[i].answer;
                        if(exerciseAnswer == givenAnswer)
                        {
                            score++;
                        }
                    }
                }

                return score;
            };

            $scope.checkIfPass = function(score, passValue)
            {

                if(score >= passValue)
                {
                    return true;
                }
                else {
                    return false;
                }
            }

    }
]);