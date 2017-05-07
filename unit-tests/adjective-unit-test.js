describe('Adjective page unit test', function(){

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




        it('should have a valid Controller', function(){
            expect($controller).toBeDefined();
        });


        it('should have a valid exercises list', function(){
            expect($scope.exercises).toBeDefined();
        });

        it('should have a valid scope variable', function(){
            expect($scope).toBeDefined();
        });


        describe('Mockdata testing', function() {

            it('should get perfect score', function () {
                var exercises = [{'answer': 'pretty', 'id' : 1}, {'answer': 'ugly', 'id' : 2}];
                var answers = [{'answer': 'pretty', 'id' : 1},{ 'answer' : 'ugly', 'id' : 2 }];

                expect($scope.calculateScore(exercises, answers)).toBe(2);
            });

            it('should get a score of 0', function () {
                var exercises = [{'answer': 'tasd', 'id' : 1}, {'answer': 'asdf', 'id' : 2}];
                var answers = [{'answer': 'a', 'id' : 1},{ 'answer' : 'asd', 'id' : 2 }];

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

            it('should submit tests with user and answers and pass', function(){
                var exercises = [{'answer': 'pretty', 'id' : 1}, {'answer': 'ugly', 'id' : 2}];
                var answers = ["pretty", "ugly"];
                var userId = "1";
                expect($scope.submitMockAnswers(userId, exercises, 0, answers)).toBeTruthy();
            });

            it('should submit tests with user and answers and fail', function(){
                var exercises = [{'answer': 'pretty', 'id' : 1}, {'answer': 'ugly', 'id' : 2}];
                var answers = ["asd", "uglyasd"];
                var userId = "1";
                expect($scope.submitMockAnswers(userId, exercises, 2, answers)).toBeFalsy();
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


    })
});