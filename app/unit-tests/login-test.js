describe('Users factory', function() {
    var TestService;

    // Before each test load our api.users module
    beforeEach(angular.mock.module('test.services'));

    // Before each test set our injected Users factory (_Users_) to our local Users variable
    beforeEach(inject(function(_TestService_) {
        TestService = _TestService_;
    }));

    // A simple test to verify the Users factory exists
    it('should exist', function() {
        expect(TestService).toBeDefined();
    });
});