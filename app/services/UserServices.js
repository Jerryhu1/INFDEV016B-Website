'use strict';

angular.module('user.services', [])
.factory('UserService', ['$http', '$httpBackend',
    function($http, $httpBackend) {

        var userService = {};
        $http.defaults.headers.common = { 'api-version' : '0.1.0 '};

        userService.getUser = function(id){
            return $http.get('http://localhost:3300/users/' + id + '');
        };

        userService.getAllUsers = function(){
            return $http.get('http://localhost:3300/users/');
        };


        userService.getMockUser = function(email){
            return $http.get('login/models/users/' + email +'.json');
        };

        userService.getAllMockUsers = function()
        {
            return $http.get('login/models/users.json');
        };

        userService.login = function(body){
            return $http.post('http://localhost:3300/login', body);
        };

        userService.register = function(body){
            return $http.post('http://localhost:3300/users/', body);
        };

        userService.getUserByEmail = function(email){
            return $http.get('http://localhost:3300/users/email/' + email);
        };

        userService.deleteUser = function(id){
            return $http.delete('http://localhost:3300/users/' + id);
        };
        return userService;
    }
]);