describe('Test page unit test', function(){

    var TestService, TestCtrl, $scope, $routeParams, $rootScope, $controller;

    beforeEach(angular.mock.module('gameApp.test'));
    beforeEach(angular.mock.module('ui.bootstrap'));
    beforeEach(angular.mock.module('ngRoute'));
    beforeEach(angular.mock.module('test.services'));

    describe('TestController', function(){


        beforeEach(inject(function(_$controller_, _$rootScope_, _$routeParams_, _TestService_){
            $rootScope = _$rootScope_;
            $routeParams = _$routeParams_;
            $scope = _$rootScope_.$new();
            TestService = _TestService_;
            $controller = _$controller_;

            TestCtrl = $controller('TestCtrl', {
                $scope : $scope,
                $rootScope : _$rootScope_,
                $routeParams : _$routeParams_,
                TestService : TestService
            });


        }));

        it('should have a valid Controller', function(){
            expect($controller).toBeDefined();
        });

        it('should have a valid exercises list', function(){
            expect($scope.exercises).toBeDefined();
        });

        it('should get perfect score', function(){
            var exercises = [{'answer' : 'pretty'}, {'answer' : 'ugly'}];
            var answers = ['pretty', 'ugly'];

            expect($scope.calculateScore(exercises, answers)).toBe(2);
        });

        it('should get a score of 0', function(){
            var exercises = [{'answer' : 'tasd'}, {'answer' : 'asdf'}];
            var answers = ['pretty', 'ugly'];

            expect($scope.calculateScore(exercises, answers)).toBe(0);
        });

        describe('Test Service', function(){

            it('should have a valid TestService', function(){
                expect(TestService).toBeDefined();
            });

            it('should return a list of tests', function(){
                expect(TestService.getAllTests()).not.toEqual(0);
            });

            it('should return a test', function(){
                expect(TestService.getTest(1)).not.toEqual(0);
            });

        })
    })
});