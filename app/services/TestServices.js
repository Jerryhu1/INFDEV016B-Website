'use strict';

angular.module('test.services', [])
    .factory('TestService', ['$http',
        function($http) {

            var TestService = {};
            $http.defaults.headers.common = { 'api-version' : '0.1.0 '};

            TestService.getAllMockTests = function(){
                return $http.get('test/tests.json');
            };

            TestService.getMockTest = function(id){
                return $http.get('test/mocktests/'+ id +'.json')
            };

            TestService.getAllTests = function(){
                return $http.get('http://localhost:3300/tests/');
            };

            TestService.getAllTestsByCategory = function(category){
                return $http.get('http://localhost:3300/tests/category/' + category + '');
            };

            TestService.getTestById = function(id){
                return $http.get('http://localhost:3300/tests/' + id + '');
            }
            TestService.getAllTestsByLevel = function(level){
                return $http.get('http://localhost:3300/tests/level/' + level + '');
            };

            TestService.submitAnswers = function(answers){

                return $http.post('http://localhost:3300/tests/hand-in/', answers);
            };

            return TestService;
        }
    ]);
