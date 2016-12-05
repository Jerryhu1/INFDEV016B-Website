var gameApp = angular.module('test.services', ['ngResource']);

angular.module('test.services', [])
    .factory('TestService', ['$http',
        function($http, $rootScope) {

            var testService = {};

            testService.getAllTests = function(){
                return  $http.get('test/tests.json');
                //return $http.get('http://localhost:3300/tests');
            };

            testService.getTest = function(id){
                return $http.get('test/'+ id +'.json')
            };



            return testService;
        }
    ]);
