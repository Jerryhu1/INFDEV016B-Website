describe('Test page unit test', function(){

    var UserService, TestService, TestCtrl, $scope, $routeParams, $rootScope, $controller;

    beforeEach(angular.mock.module('gameApp.adjective'));
    beforeEach(angular.mock.module('ui.bootstrap'));
    beforeEach(angular.mock.module('ngRoute'));
    beforeEach(angular.mock.module('test.services'));
    beforeEach(angular.mock.module('user.services'));

    describe('TestController', function(){


        beforeEach(inject(function(_$controller_, _$rootScope_, _$routeParams_, _TestService_, _UserService_){
            $rootScope = _$rootScope_;
            $routeParams = _$routeParams_;
            $scope = _$rootScope_.$new();
            TestService = _TestService_;
            $controller = _$controller_;
            UserService = _UserService_;

            TestCtrl = $controller('AdjectiveCtrl', {
                $scope : $scope,
                $rootScope : _$rootScope_,
                $routeParams : _$routeParams_,
                TestService : TestService,
                UserService : UserService
            });

        }));


        describe('Test API Service', function(){

            it('should return a list of tests', function(){
                expect(TestService.getAllTests()).not.toEqual(0);
            });

            it('should return a mock test by id', function(){
                expect(TestService.getTestById("586bcfb264f8a31a24e880f0")).not.toEqual(null);
            });

            it('should return tests based on a category', function(){
                expect(TestService.getAllTestsByCategory('adjectives')).not.toEqual(null);
            });
            it('should return tests based on a level', function(){
                expect(TestService.getAllTestsByLevel('A1')).not.toEqual(null);
            });

            var incorrectAnswers = {
                "userId" : "586bcfb264f8a31a24e880f0",
                "testId" : "586bc3db64f8a31a24e880ef",
                "answers" : []
            };


            var correctAnswers = {"userId" : "586bcfb264f8a31a24e880f0", "testId" : "586bc3db64f8a31a24e880ef", "answers" :
                [{"id" : 1, "answer" : "go"},
                    {"id" : 2, "answer" : "do not swim"},
                    {"id" : 3, "answer" : "do"},
                    {"id" : 4, "answer" : "do not play"},
                    {"id" : 5, "answer" : "brush"},
                    {"id" : 6, "answer" : "do not talk"},
                    {"id" : 7, "answer" : "do not feed"}] };
            var correctAnswers2 = {"userId" : "586bcfb264f8a31a24e880f0", "testId" : "586e41624151f02b642a5e6e", "answers" : [
                {"id" : 1, "answer" : "go"},
                {"id" : 2, "answer" : "do not swim"},
                {"id" : 3, "answer" : "do"},
                {"id" : 4, "answer" : "do not play"},
                {"id" : 5, "answer" : "brush"},
                {"id" : 6, "answer" : "do not talk"},
                {"id" : 7, "answer" : "do not feed"}] };

            it('should be able to submit answers', function(){
                TestService.submitAnswers(incorrectAnswers).success(function(result){
                    expect(result).not.toEqual(null);
                })
            });
            it('should not pass a test', function(){
                TestService.submitAnswers(incorrectAnswers).success(function(result){
                    expect(result.passed).toBeFalsy();
                })
            });
            it('should pass a test', function(){
                TestService.submitAnswers(correctAnswers).success(function(result){
                    expect(result.passed).toBeTruthy();
                });
            });


            it('should level up to A2', function(){

                TestService.submitAnswers(correctAnswers);
                TestService.submitAnswers(correctAnswers2);

                UserService.getUser("586bcfb264f8a31a24e880f0").success(function(result){
                    expect(result.level).toEqual("A2");
                })
            })
        });

        describe('Mock with API testing', function(){

            it(' API test should equal body of mock test', function(){

                var apiTest, mockTest;
                TestService.getAllTests().success(function(result){
                    apiTest = result[0];

                    TestService.getMockTest().success(function(result){
                        mockTest = result;

                    });
                    expect(apiTest.exercises).toEqual(mockTest.exercises);
                });



            });
        })
    })
});