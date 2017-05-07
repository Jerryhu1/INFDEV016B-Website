describe('Login unit test', function(){

    var LoginCtrl, UserService, $scope, $routeParams, $rootScope, $controller;

    beforeEach(angular.mock.module('gameApp.login'));
    beforeEach(angular.mock.module('ui.bootstrap'));
    beforeEach(angular.mock.module('ngRoute'));
    beforeEach(angular.mock.module('user.services'));

    describe('Login controller', function() {


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

            it('should have a valid rootScope', function(){
                expect($rootScope).toBeDefined();
            });

            it('should have a valid scope', function(){
                expect($scope).toBeDefined();
            });

            it('should have a valid $scope.user', function(){
                expect($scope.user).toBeDefined();
            });
            it('should have a valid $scope.errorMessage', function(){
                expect($scope.errorMessage).toBeDefined();
            });

            it('should return false when using empty fields', function(){
                var loginInfo = {"email" : "", "password" : ""};
                expect($scope.validateFields(loginInfo)).toBeFalsy();
            });
            it('should return false when using undefined fields', function(){
                var loginInfo = {"email" : undefined, "password" : undefined};
                expect($scope.validateFields(loginInfo)).toBeFalsy();
            });

            it('should use a valid mock account', function(){
                expect($scope.useMockAccount()).toBeTruthy();
            });

            it('should return true when fields are not empty', function(){
                var loginInfo = {"email" : "test@test.com", "password" : "NaN"};
               expect($scope.validateFields(loginInfo)).toBeTruthy();
            });

        });

    });
});