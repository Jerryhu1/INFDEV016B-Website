'use strict';

describe('Controller: TestsCtrl', function () {


    // load the controller's module
    beforeEach(function() {

        module('gameApp.tests');

        module(function($provide){
            $provide.service('TestService', TestServices);
        });

        inject(function($injector){
            TestServices = $injector.get('TestServices');
        })
    });



    describe('TestsCtrl', function() {
        var ctrl, scope;
        beforeEach(inject(function ($controller, $rootScope) {

            scope = $rootScope.$new();
            ctrl = $controller('TestsCtrl', {
                $scope: scope
            });
        }));

        it('should create a tests list with 2 tests',
            function(){
                expect(ctrl.scope.tests).toBe(2);
                 console.log("test1");
            });

        it('should uppercase correctly', function(){
            expect(testCont.upper('lol')).toEqual('LOL');

        });

    })

});