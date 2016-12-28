'use strict';

angular.module('test.services', [])
    .factory('TestService', ['$http',
        function($http, $rootScope) {

            var TestService = {};

            TestService.getAllTests = function(){
                return  $http.get('test/tests.json');
                //return $http.get('http://localhost:3300/tests');
            };

            TestService.getTest = function(id){
                return $http.get('test/mocktests/'+ id +'.json')
            };


            return TestService;
        }
    ]);
