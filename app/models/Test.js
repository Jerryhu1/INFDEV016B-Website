gameApp.factory('Test', function($http){

    var Test = function(id, difficulty){

        this.id = id;
        this.difficulty = difficulty;
    };

    Test.prototype.getId = function(){
        var self = this;

        return UserService.getUser();
    }

    return Test;
});