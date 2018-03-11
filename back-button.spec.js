describe('Protractor Demo App', function() {

  global.protractor = protractor;
  global.browser = browser;

  browser.waitForAngularEnabled(false);

  beforeEach(function() {

    browser.driver.get('http://b111m11434ee.dev2.oggettoweb.com/customer/account/create/');
        
  });

  it('should redirect browser',  () => {
  	    let backButton = element(by.className('back-link')).$('.back-link');
        backButton.click();
  	                
  	    var expectedUrl = browser.getCurrentUrl();            
        expect(expectedUrl).toEqual('http://b111m11434ee.dev2.oggettoweb.com/customer/account/login/');
  })
});