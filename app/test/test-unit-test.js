describe('Test page unit test', function(){

<<<<<<< HEAD
    var TestService, TestCtrl, $scope, $routeParams, $rootScope, $controller;

    beforeEach(angular.mock.module('gameApp.test'));
    beforeEach(angular.mock.module('ui.bootstrap'));
    beforeEach(angular.mock.module('ngRoute'));
    beforeEach(angular.mock.module('test.services'));

    describe('TestController', function(){
=======
describe('TestsCtrl', function () {

    var ctrl, scope, TestServices, constants, rootScope;

    beforeEach(function(){
        module('gameApp.tests');
        module('test.services');
    });

    beforeEach(angular.mock.module('test.services'));
>>>>>>> 4cb22da198983a3b515287401a2c26e7b389ce80


        beforeEach(inject(function(_$controller_, _$rootScope_, _$routeParams_, _TestService_){
            $rootScope = _$rootScope_;
            $routeParams = _$routeParams_;
            $scope = _$rootScope_.$new();
            TestService = _TestService_;
            $controller = _$controller_;

<<<<<<< HEAD
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
=======
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

>>>>>>> 4cb22da198983a3b515287401a2c26e7b389ce80

        })
    })
})