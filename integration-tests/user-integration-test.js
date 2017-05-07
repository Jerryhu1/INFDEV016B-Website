describe('Test page unit test', function(){

    var UserService, TestService;

    beforeEach(angular.mock.module('ngRoute'));
    beforeEach(angular.mock.module('test.services'));
    beforeEach(angular.mock.module('user.services'));

    describe('TestController', function(){


        beforeEach(inject(function(_TestService_, _UserService_){


            TestService = _TestService_;
            UserService = _UserService_;



        }));


        describe('User Leveling Service', function(){

            var correctAnswers = {"userId" : "586bcfb264f8a31a24e880f0", "testId" : "586bc3db64f8a31a24e880ef", "answers" :
                [{"id" : 1, "answer" : "go"},
                    {"id" : 2, "answer" : "do not swim"},
                    {"id" : 3, "answer" : "do"},
                    {"id" : 4, "answer" : "do not play"},
                    {"id" : 5, "answer" : "brush"},
                    {"id" : 6, "answer" : "do not talk"},
                    {"id" : 7, "answer" : "do not feed"}] };
            var correctAnswers2 = {"userId" : "586bcfb264f8a31a24e880f0", "testId" : "586e41624151f02b642a5e6e", "answers" : [
                {"id" : 1, "answer" : "go"},
                {"id" : 2, "answer" : "do not swim"},
                {"id" : 3, "answer" : "do"},
                {"id" : 4, "answer" : "do not play"},
                {"id" : 5, "answer" : "brush"},
                {"id" : 6, "answer" : "do not talk"},
                {"id" : 7, "answer" : "do not feed"}] };

            it('should get tests, create a new user and level up to A2', function(){
                var user = {"email" : "intTester@test.com", "password" : "test", "level" : "A1"};
                var answers = {"userId" : "", "testId" : "", "answers" : []};
                UserService.register(user).success(function(res){
                    TestService.getTestsBylevel(user.level).success(function(res){
                        angular.forEach(res, function(test){
                            answers.testId = test._id;
                            angular.forEach(test.exercises, function(exercise){
                                answers.answers.push(exercise.answer);
                            });
                            TestService.submitAnswers(answers);
                        });
                    });

                    UserService.getUser(res._id).success(function(user){
                        expect(user.level).toEqual("A2");
                        UserService.deleteUser(user._id).success(function(res){

                        });
                    })
                });


            })

        })
    })
});