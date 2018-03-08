describe('Protractor Demo App', function() {

  global.protractor = protractor;
  global.browser = browser;

  beforeEach(function() {

    browser.ignoreSynchronization = true;
    browser.driver.get('http://b111m11434ee.dev2.oggettoweb.com/customer/account/create/');
    
  });

  it('should redirect browser',  (done) => {
  	    var backButton = element(by.className('back-link')).click();
  	                
  	    var expectedUrl = browser.getCurrentUrl();            
        expect(expectedUrl).toEqual('http://b111m11434ee.dev2.oggettoweb.com/customer/account/login/');
  	    done();
  })
});