describe('Test page unit test', function(){

    var UserService, TestService, TestCtrl, $scope, $routeParams, $rootScope, $controller;

    beforeEach(angular.mock.module('gameApp.test'));
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

            TestCtrl = $controller('TestCtrl', {
                $scope : $scope,
                $rootScope : _$rootScope_,
                $routeParams : _$routeParams_,
                TestService : TestService,
                UserService : UserService
            });

        }));

        it('should have a valid Controller', function(){
            expect($controller).toBeDefined();
        });


        it('should have a valid exercises list', function(){
            expect($scope.exercises).toBeDefined();
        });

        describe('Mockdata testing', function() {

            it('should get perfect score', function () {
                var exercises = [{'answer': 'pretty'}, {'answer': 'ugly'}];
                var answers = ['pretty', 'ugly'];

                expect($scope.calculateScore(exercises, answers)).toBe(2);
            });

            it('should get a score of 0', function () {
                var exercises = [{'answer': 'tasd'}, {'answer': 'asdf'}];
                var answers = ['pretty', 'ugly'];

                expect($scope.calculateScore(exercises, answers)).toBe(0);
            });

            it('should not pass the test', function () {

                var score = 0;
                expect($scope.checkIfPass(score, 2)).toBeFalsy();
            });


            it('should pass the test', function () {

                var score = 10;
                expect($scope.checkIfPass(score, 10)).toBeTruthy();
            });
        });



        describe('Test Mock Service', function(){

            it('should have a valid TestService', function(){
                expect(TestService).toBeDefined();
            });

            it('should return a list of mock tests', function(){
                expect(TestService.getAllMockTests()).not.toEqual(null);
            });

            it('should return a mock test', function(){
                expect(TestService.getMockTest(1)).not.toEqual(null);
            });

        });

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

            var answers = {
                "userId" : "586bcfb264f8a31a24e880f0",
                "testId" : "586bc3db64f8a31a24e880ef",
                "answers" : []
            };

            it('should be able to submit answers', function(){
                TestService.submitAnswers(answers).success(function(result){
                    console.log(result);
                })
            });

            it('should not be able to submit answers for a test lower than current level', function(){
                TestService.submitAnswers(answers).success(function(result){
                    console.log(result);

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