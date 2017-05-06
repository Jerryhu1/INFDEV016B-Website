
describe('login page', function(){


    it('should display no password inserted', function(){
        browser.get('#!/login');
        var email = browser.findElement(protractor.By.model('user.email'));
        var password = browser.findElement(protractor.By.model('user.password'));
        var submit = browser.findElement(protractor.By.id('loginBtn'));
        email.sendKeys("jerryhu1@live.nl");
        password.sendKeys("");
        submit.click();
        expect(browser.findElement(protractor.By.id('error-message')).getText()).toEqual("No password inserted");
    });

    it('should display invalid credentials', function(){
        browser.get('#!/login');
        var email = browser.findElement(protractor.By.model('user.email'));
        var password = browser.findElement(protractor.By.model('user.password'));
        var submit = browser.findElement(protractor.By.id('loginBtn'));
        email.sendKeys("jerryhu1@live.nl");
        password.sendKeys("asdasd");
        submit.click();
        expect(browser.findElement(protractor.By.id('error-message')).getText()).toEqual("Invalid credentials!");
    });

    it('should log in succesfully', function(){


        browser.get('#!/login');
        var email = browser.findElement(protractor.By.model('user.email'));
        var password = browser.findElement(protractor.By.model('user.password'));
        var submit = browser.findElement(protractor.By.id('loginBtn'));
        email.sendKeys("jerryhu1@live.nl");
        password.sendKeys("test");
        submit.click();
        expect(browser.findElement(protractor.By.id('error-message')).getText()).toEqual("");
    });
});

describe('test page exercises list', function(){

    it('should have a title', function(){

        expect(browser.getTitle()).toEqual('English Test');

    });

    it('should have a valid nav link to tests page', function(){

        expect(element(by.id('test-page-link')).getAttribute('href')).toEqual('http://localhost:8000/#!/tests');
    });

    it('should load tests view when user clicks on tests nav button', function(){
        element(by.id('test-page-link')).click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#!/tests');
    });

    it('should have more than 1 test in a category', function(){

        element(by.id("adjective-accordion-link")).$('a').click();
        var testList = element.all(by.repeater('test in tests'));
        expect(testList.count()).toBeGreaterThan(1);
    });

    it('should have valid links to tests', function(){

        var link = element.all(by.repeater('test in tests')).get(0).$('a');
        var url = link.getAttribute('href');

        link.click().then(function(){
            expect(browser.getCurrentUrl()).toEqual(url);
        });

    });

    it('should have 10 exercises in a test', function(){

        var exerciseList = element.all(by.repeater('exercise in exercises'));
        expect(exerciseList.count()).toBe(10);
    });


});

describe('profile page tests', function(){

   it('should go to profile pages', function(){
       expect(element(by.id('profile-page-link')).getAttribute('href')).toEqual('http://localhost:8000/#!/profile');
   });

   it('should display recently completed tests', function(){
       element(by.id('profile-page-link')).click();
       var testList = element.all(by.repeater('result in results'));
       expect(testList.count()).toBeGreaterThan(1);
   })
});