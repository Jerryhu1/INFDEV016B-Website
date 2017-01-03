var gameApp = angular.module('user.services', ['ngResource']);

angular.module('user.services', [])
.factory('UserService', ['$http',
    function($http) {

        var userService = {};

        userService.getUser = function(email){
            return $http.get('login/models/users/' + email +'.json');
        };

        userService.getAllUsers = function()
        {
            return $http.get('login/models/users.json');
        };

        userService.login = function(body){
            return $http.post('http://localhost:3300/login', body);
        };
        return userService;
    }
]);