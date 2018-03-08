describe('Main page main test', function() {

  global.protractor = protractor;
  global.browser = browser;

  browser.waitForAngularEnabled(false);

  beforeEach(function() {

    browser.driver.get('http://b111m11434ee.dev2.oggettoweb.com/customer/account/create/');
    
  });

  /*
  var formCreateAnAccount = element(by.className('scaffold-form'));
  */

  it('should check all poles, not redirect cause of birthDateYear wrong',  () => {
    browser.waitForAngularEnabled(false);

    var firstName = element(by.id('firstname'));
    firstName.sendKeys('firstName');

    var middleName = element(by.id('middlename')).click();
    middleName.sendKeys('middleName');

    var lastName = element(by.id('lastname')).click();
    lastName.sendKeys('lastname');

    var email = element(by.id('email_address')).click();
    email.sendKeys('l.lastname@gmail.com');

    var day = element(by.id('day')).click();
    day.sendKeys('19');

    var month = element(by.id('month')).click();
    month.sendKeys('3');

    var year = element(by.id('year')).click();
    year.sendKeys('1988');
    year.clear();

    var gender = element(by.id('gender')).click();
    
    var password = element(by.id('password')).click();
    password.sendKeys('password');

    var confirmation = element(by.id('confirmation'));
    confirmation.sendKeys('password');

    var isSubscribedCheck = element(by.id('is_subscribed')).click();

    var registerButton = element(by.partialButtonText('Register')).click();
    var expectedUrl = browser.getCurrentUrl();            
    expect(expectedUrl).toEqual('http://b111m11434ee.dev2.oggettoweb.com/customer/account/create/');


  })




});