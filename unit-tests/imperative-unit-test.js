describe('Test page unit test', function(){

    var UserService, TestService, TestCtrl, $scope, $routeParams, $rootScope, $controller;

    beforeEach(angular.mock.module('gameApp.imperative'));
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

            TestCtrl = $controller('ImperativeCtrl', {
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
    })
});