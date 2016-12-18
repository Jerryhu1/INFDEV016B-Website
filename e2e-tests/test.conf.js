describe('test page exercises list', function(){

    it('should have a title', function(){

        browser.get('/#!');
        expect(browser.getTitle()).toEqual('English Test');

    });

    it('should have a valid nav link to tests page', function(){
        expect(element(by.id('test-page-link')).getAttribute('href')).toEqual('http://localhost:8000/#!/tests');
    });

    it('should load tests view when user clicks on tests nav button', function(){
        element(by.id('test-page-link')).click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#!/tests');
    })

    it('should have more than 1 test category on tests page', function(){
        browser.get('/#!/tests');
        var testList = element.all(by.repeater('test in tests'));
        expect(testList.count()).toBeGreaterThan(1);
    });

    it('should have valid links to tests', function(){
        element.all(by.repeater('test in tests')).
        get(0).
        $('a').
        click().then(function(){
            var newUrl = browser.getCurrentUrl();
            expect(newUrl).toEqual('http://localhost:8000/#!/tests/1');
        });

    });

    it('should have 10 exercises in a test', function(){

        browser.get('http://localhost:8000/#!/tests/1');
        var exerciseList = element.all(by.repeater('exercise in exercises'));
        expect(exerciseList.count()).toBe(10);
    })
});