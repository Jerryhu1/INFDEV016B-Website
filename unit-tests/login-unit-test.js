describe('Users unit test', function(){

    var UserService, $scope, $routeParams, $rootScope, $controller;

    beforeEach(angular.mock.module('gameApp.login'));
    beforeEach(angular.mock.module('ui.bootstrap'));
    beforeEach(angular.mock.module('ngRoute'));
    beforeEach(angular.mock.module('user.services'));

    describe('TestController', function() {


        beforeEach(inject(function (_$controller_, _$rootScope_, _$routeParams_, _UserService_) {
            $rootScope = _$rootScope_;
            $routeParams = _$routeParams_;
            $scope = _$rootScope_.$new();
            $controller = _$controller_;
            UserService = _UserService_;

            LoginCtrl = $controller('LoginCtrl', {
                $scope: $scope,
                $rootScope: _$rootScope_,
                $routeParams: _$routeParams_,
                UserService: UserService
            });
        }));

        describe('Login page ', function(){

            it('should have a valid controller', function(){
                expect($controller).toBeDefined();
            });

            it('should have a valid UserService', function(){
                expect(UserService).toBeDefined();
            });

            it('should succeed logging in', function(){
                var loginInfo = {"email" : "jerryhu1@live.nl", "password" : "test"};
                expect($scope.attemptLogin(loginInfo)).toBeTruthy();
            });

            it('should fail logging in', function(){
                var loginInfo = {"email" : "jerryhu1@live.nl", "password" : "test"};
                expect($scope.attemptLogin(loginInfo)).toBeFalsy();
            });

            it('should use mock account', function(){
                expect($scope.useMockAccount()).toBeTruthy();
            });

        });

    });
});