'use strict';

angular.module('gameApp.tests', ['ngRoute', 'ui.bootstrap'])
    .controller('TestsCtrl', ['$rootScope', '$scope', '$window', 'TestService',  function($rootScope, $scope, $window, TestService) {

        $scope.isCollapsed = false;
        $scope.categories = ["Adjectives or adverb", "Articles", "Imperative"];
        var tests = [];
        $scope.tests = [];
        var currentCategory;
        try {
            var user = JSON.parse($window.localStorage.getItem("user"));
        }catch(e){
            $scope.warning("You are not logged in!");
        }


        $scope.getAllTests = function()
        {
            TestService.getAllTests()
            .success(function(result){
                    if(user) {
                        $scope.setTestsByLevel(result);
                    }else{
                        console.log(result);
                        tests = result;
                    }
            })
            .error(function(res){
                TestService.getAllMockTests().success(function(result){
                    $scope.setTestsByLevel(result);
                });
            });
        };

        $scope.setTestsByLevel = function(testList)
        {
            if(user)
            {
                angular.forEach(testList, function(test){
                    if(test.level == "A1" && user.level == "A2"){
                        tests.push(test);
                        $scope.tests.push(test);
                    }
                    else if(test.level == user.level)
                    {
                        tests.push(test);
                        $scope.tests.push(test);
                    }
                    else if(test.level == "A2" && user.level == "B1")
                    {
                        tests.push(test);
                        $scope.tests.push(test);
                    }
                    else if(test.level == "A1" && user.level == "B1")
                    {
                        tests.push(test);
                        $scope.tests.push(test);
                    }
                })
            }
        };

        $scope.getTestsBylevel = function(level)
        {
            tests = [];
            if(user) {
                if (level == user.level) {

                    getAllTestsByLevel(level);
                }
                else {
                    $scope.warning = "You are not level: " + level + " yet!";
                    return false;
                }
            }
            else{
                getAllTestsByLevel(level);
            }

        };

        var getAllTestsByLevel = function(level){

            TestService.getAllTestsByLevel(level).success(function (result) {

                if (currentCategory != null) {
                    tests = result;
                    $scope.filterTestsByCategory(currentCategory);
                }
                else {
                    $scope.tests = result;
                }
            });

        };

        $scope.filterTestsByCategory = function(category)
        {
            var count = 0;
            currentCategory = category;
            $scope.tests = [];
            angular.forEach(tests, function(item){
                if(item.category == category) {

                    $scope.checkIfDone(item, count);
                    var test = $scope.checkIfDone(item);
                    $scope.tests.push(test);
                    console.log(test);
                    count++;
                }
            })
        };

        $scope.checkIfDone = function(test)
        {
            TestService.getTestResults(test._id, user._id).success(function(res){
               if(angular.isDefined(res[res.length-1])) {

                    test["date"] = res[res.length-1].date;
                    test["score"] = res[res.length-1].correctAnswers;
               }
            }).error(function(res){
                console.log("Test not yet done");
            });
           return test;
        };

        $scope.oneAtATime = true;
        $scope.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };

        $scope.status = {
            isopen: false
        };
    }]);
