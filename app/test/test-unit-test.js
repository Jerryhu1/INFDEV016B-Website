describe('Test page unit test', function(){

<<<<<<< HEAD
describe('TestsCtrl', function () {

    var ctrl, scope, TestServices, constants, rootScope;

    beforeEach(function(){
        module('gameApp.tests');
        module('test.services');
    });

    beforeEach(angular.mock.module('test.services'));
=======
    var TestService, TestCtrl, $scope, $routeParams, $rootScope, $controller;

    beforeEach(angular.mock.module('gameApp.test'));
    beforeEach(angular.mock.module('ui.bootstrap'));
    beforeEach(angular.mock.module('ngRoute'));
    beforeEach(angular.mock.module('test.services'));

    describe('TestController', function(){
>>>>>>> 8338d76b9479c6da163350af217c4a9d99195ff4


        beforeEach(inject(function(_$controller_, _$rootScope_, _$routeParams_, _TestService_){
            $rootScope = _$rootScope_;
            $routeParams = _$routeParams_;
            $scope = _$rootScope_.$new();
            TestService = _TestService_;
            $controller = _$controller_;

<<<<<<< HEAD
    beforeEach(inject(function (_TestServices_, $controller, $rootScope) {


        scope = $rootScope.$new();
        ctrl = $controller('TestsCtrl', {
            $scope: scope
        });

        TestServices = _TestServices_;
    }));



    it('should have a valid controller',
        function(){
            expect(ctrl).toBeDefined();
    });

    it('should have a valid scope', function(){
        expect(scope).toBeDefined();
    });

    it('should have a valid TestService', function(){
       expect(TestServices).toBeDefined();
    });
    it('should create a list with 3 items', function(){

        var tests = ['a', 'b'];
        scope.tests = tests;
        expect(scope.tests).toBe(2);
    })

    describe('.getTest()', function(){
        expect(TestServices.getTest(1)).toBeDefined();
    })

=======
            TestCtrl = $controller('TestCtrl', {
                $scope : $scope,
                $rootScope : _$rootScope_,
                $routeParams : _$routeParams_,
                TestService : TestService
            });


        }));
        it('should load the controller', function(){

           expect(TestService).toBeDefined();
        });

        it('should add an exercise to the exercises', function(){
            expect($scope.exercises).toBeDefined();
>>>>>>> 8338d76b9479c6da163350af217c4a9d99195ff4

        })
    })
})