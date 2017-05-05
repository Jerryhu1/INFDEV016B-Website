'use strict';

angular.module('gameApp.adjective', ['ngRoute', 'ui.bootstrap'])
    .controller('AdjectiveCtrl', ['$rootScope', '$scope' , '$routeParams', 'TestService',
        function($rootScope, $scope , $routeParams, TestService) {

        $scope.exercises = [];
        $scope.answers = [];
        $scope.maxScore;
        $scope.score;

            TestService.getTestById($routeParams.testId).success(function(result){

                $scope.test = result[0];
                console.log($scope.test);
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

                if($rootScope.user == null){
                    alert('You are not logged in tests will not save!');
                }


                var answers = {"userId" : $rootScope.user._id, "testId" : $scope.test._id, "answers" : []};

                angular.forEach($scope.answers, function(item){

                    var answer = {"id" : count, "answer" : item};
                    answers.answers.push(answer);
                    count++;
                });

                $scope.score = $scope.calculateScore($scope.exercises, $scope.answers);


                TestService.submitAnswers(answers).success(function (result) {
                    if (result.passed == false) {
                        alert('You did not pass |' +
                            'Your score:' + result.correctAnswers);
                    }
                    else {
                        alert('You passed! |' +
                            'Your score: ' + result.correctAnswers);
                    }
                }).error(function(result){
                    console.log("Not logged in ");
         
                })

            };

            $scope.submitMockAnswers = function(userId, exercises, passValue){

                var count = 1;

                var answers = {"userId" : userId, "testId" : $scope.test._id, "answers" : []};

                angular.forEach($scope.answers, function(item){

                    var answer = {"id" : count, "answer" : item};
                    answers.answers.push(answer);
                    count++;

                });

                $scope.score = $scope.calculateScore($scope.exercises, $scope.answers);
                $scope.passed = $scope.checkIfPass(exercises, passValue);
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

            $scope.checkIfPass = function(score, passValue)
            {

                if(score >= passValue)
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