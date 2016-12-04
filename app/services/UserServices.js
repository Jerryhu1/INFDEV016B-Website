var gameApp = angular.module('user.services', ['ngResource']);

angular.module('user.services', [])
.factory('UserService', ['$http',
    function($http, $rootScope) {

        var userService = {};

        userService.getUser = function(email, password){
            return $http.get('localhost');
        }

        userService.getAllUsers = function()
        {
            return $http.get('http://localhost:3300/users');
        }

        userService.login = function(body){

            return $http.post('http://localhost:3300/login', 'email=cool@email.com&password=password2');

        }
        return userService;
    }
]);