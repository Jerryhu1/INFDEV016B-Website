'use strict';

describe('TestsCtrl', function () {

    var ctrl, scope, TestServices, constants, rootScope;

    beforeEach(function(){
        module('gameApp.tests');
        module('test.services');
    });

    beforeEach(angular.mock.module('test.services'));



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



});