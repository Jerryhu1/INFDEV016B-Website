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

        describe('UserService API ', function(){

            var loginInfo = {"email" : "test@test.com", "password" : "test"};

            it('should return all users', function(){
                expect(UserService.getAllUsers()).not.toEqual(null);
            });

            it('should return a single user by id', function(){
                expect(UserService.getUser("586bcfb264f8a31a24e880f0")).success(function(res){
                    console.log(res);
                    expect(res.email).toEqual("test@test.com")
                });
            });

            it('should return an empty user', function(){
                expect(UserService.getUser("586bcfb264f8a31a24e880f2")).success(function(res){
                    expect(res.email).toBeUndefined();
                });
            });

            it('should return an error message', function(){
                expect(UserService.getUser("")).success(function(res){
                    expect(res.name).toEqual("Error");
                });
            });

            it('should login successfully', function(){
                UserService.login(loginInfo).success(function(result){

                    expect(result).toEqual("Login succesfully");
                })
            });


        })
    });
});