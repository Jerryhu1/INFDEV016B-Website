describe('Login integration tests', function(){

    var UserService, $scope, $routeParams, $rootScope, $controller, $httpBackend;

    beforeEach(angular.mock.module('gameApp.login'));
    beforeEach(angular.mock.module('ui.bootstrap'));
    beforeEach(angular.mock.module('ngMockE2E'));
    beforeEach(angular.mock.module('ngRoute'));
    beforeEach(angular.mock.module('user.services'));

    describe('TestController', function() {


        beforeEach(inject(function (_$controller_, _$rootScope_, _$routeParams_, _UserService_, _$httpBackend_, $injector) {
            $rootScope = _$rootScope_;
            $routeParams = _$routeParams_;
            $scope = _$rootScope_.$new();
            $controller = _$controller_;
            UserService = _UserService_;
            $httpBackend = _$httpBackend_;

            LoginCtrl = $controller('LoginCtrl', {
                $scope: $scope,
                $rootScope: _$rootScope_,
                $routeParams: _$routeParams_,
                UserService: UserService,
                $httpBackend: _$httpBackend_
            });

            $httpBackend.when('GET', "localhost:3300/users/").respond({
                status: 200,
                data : "data"
            });
            $httpBackend.whenGET("http://localhost:3300/users/:id").passThrough();
            $httpBackend.whenGET("http://localhost:3300/users/").passThrough();
            $httpBackend.whenPOST("http://localhost:3300/users/").passThrough();
            $httpBackend.whenPOST("http://localhost:3300/register/").passThrough();
            $httpBackend.whenGET("http://localhost:3300/users/email/:email/").passThrough();
            $httpBackend.whenPOST("http://localhost:3300/login").passThrough();
            $httpBackend.whenDELETE("http://localhost:3300/users").passThrough();
        }));

        afterEach(function() {
            try{
                $httpBackend.flush();
            }catch(e){

            }
        });

        describe('UserService API ', function() {


            it('should return an user', function () {
                UserService.getAllUsers().then(function(res){
                    expect(res).toBeDefined();
                });

            });

            it('should return a single user by id', function () {
                UserService.getUser("586bcfb264f8a31a24e880f0").success(function (res) {
                    expect(res[0].email).toBeDefined();
                });
            });

            it('should return an empty user', function () {
                UserService.getUser("586bcfb264f8a31a24e880f2").success(function (res) {
                    expect(res[0].email).toBeUndefined();
                });
            });

           it('should return an error message', function () {
                UserService.getUser(undefined).success(function (res) {
                    expect(res.name).toEqual("Error");
                });
            });

        });

        describe('Login integration ', function() {

            var loginInfo = {"email": "jerryhu1@live.nl", "password": "test"};
            it('should login successfully', function () {
                UserService.login(loginInfo).then(function (result) {
                    expect(result).toEqual("Login succesful");
                })
            });
            it('should fail logging in with wrong credentials', function(){
                var loginInfo = {"email" : "NaN", "password" : "NaN"};
                expect($scope.attemptLogin(loginInfo)).toBeFalsy();
            });

            it('should fail registering because of existing account', function(){
                UserService.register(loginInfo).success(function(res){
                    expect(res.code).toEqual(11000);
                })
            });
            it('should get tests, create a new user and level up to A2', function(){

                expect($scope.mockRegistration()).toBeTruthy();


            });

            it('should level up an user', function(){
                expect($scope.mockRegistration()).toBeTruthy();
            });


        })
    });
});