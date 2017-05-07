describe('Tests list page unit test', function() {

    var UserService, TestService, TestCtrl, $scope, $routeParams, $rootScope, $controller, $window;

    beforeEach(angular.mock.module('gameApp.adjective'));
    beforeEach(angular.mock.module('ui.bootstrap'));
    beforeEach(angular.mock.module('ngRoute'));
    beforeEach(angular.mock.module('test.services'));
    beforeEach(angular.mock.module('user.services'));

    describe('TestController', function () {


        beforeEach(inject(function (_$controller_, _$rootScope_, _$routeParams_, _TestService_, _UserService_m, _$window_) {
            $rootScope = _$rootScope_;
            $routeParams = _$routeParams_;
            $scope = _$rootScope_.$new();
            $window = _$window_;
            TestService = _TestService_;
            $controller = _$controller_;
            UserService = _UserService_;

            TestsCtrl = $controller('TestsCtrl', {
                $scope: $scope,
                $rootScope: _$rootScope_,
                $routeParams: _$routeParams_,
                TestService: TestService,
                UserService: UserService,
                $window: _$window_
            });

        }));

        it('should have a valid Controller', function () {
            expect($controller).toBeDefined();
        });


        it('should have a valid scope variable', function () {
            expect($scope).toBeDefined();
        });



    })
});