describe('Login integration tests', function(){

    var UserService, $scope, $routeParams, $rootScope, $controller, $httpBackend;

    beforeEach(angular.mock.module('gameApp.login'));
    beforeEach(angular.mock.module('ui.bootstrap'));
    beforeEach(angular.mock.module('ngRoute'));
    beforeEach(angular.mock.module('user.services'));

    describe('TestController', function() {


        beforeEach(inject(function (_$controller_, _$rootScope_, _$routeParams_, _UserService_, _$httpBackend_, $injector) {
            $rootScope = _$rootScope_;
            $routeParams = _$routeParams_;
            $scope = _$rootScope_.$new();
            $controller = _$controller_;
            UserService = _UserService_;
            $httpBackend = $injector.get('$httpBackend');

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

        }));

        afterEach(function() {

            $httpBackend.flush();
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        describe('UserService API ', function() {

            var user = {};
            $httpBackend.expectGET("localhost:3300/users").respond(200, {});

            it('should return all users', function () {

                inject(function(){
                UserService.getAllUsers().then(function(res){
                    user = res[0];
                    expect(res.length).toBeGreaterThan(0);

                    })
                })


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


            })

        })
    });
});