describe('Main page main test', function() {

  global.protractor = protractor;
  global.browser = browser;

  browser.waitForAngularEnabled(false);

  var firstName = $$('#firstname');
  var middleName = $$('#middlename');
  var lastName = $$('#lastname');
  var email = $$('#email_address');
  var day = $$('#day');
  var month = $$('#month');
  var gender = $$('#gender');
  var year = $$('#year');
  var password = $$('#password');
  var confirmation = $$('#confirmation');
  var isSubscribedCheck = $$('#is_subscribed');
  var registerButton = element(by.partialButtonText('Register'));
  var expectedUrl;

  beforeAll(function() {
    browser.waitForAngularEnabled(false);

    browser.get('http://b111m11434ee.dev2.oggettoweb.com/customer/account/create/'); 
  });


  var formCreateAnAccount = $$('scaffold-form');
  var start = new Date();
  var uniqueSting = 'test' + start.getHours() + start.getMinutes() + start.getSeconds();


  it('should not register new account because of repeating email_address',  () => {

    firstName.sendKeys('New firstname');
    middleName.clear();
    lastName.sendKeys('New lastname');
    email.sendKeys('testing.subscribe@form.com');  //already registred e-mail
    day.sendKeys(start.getDate());
    month.sendKeys(start.getMonth());
    year.sendKeys(start.getFullYear()-15);

    password.sendKeys('New password');
    confirmation.sendKeys('New password');

    registerButton.click();

    expectedUrl = browser.getCurrentUrl();            
    expect(expectedUrl).toEqual('http://b111m11434ee.dev2.oggettoweb.com/customer/account/create/');
    
  });


  it('should check all poles, and submit',  () => {


    firstName.clear();
    firstName.sendKeys('firstname');

    middleName.clear();
    middleName.sendKeys('middleName');

    lastName.clear();
    lastName.sendKeys('lastname');

    email.clear();
    email.sendKeys( uniqueSting + '.subscribe@form.com');

    day.clear();
    day.sendKeys('1');

    month.clear();
    month.sendKeys('1');

    year.clear();
    year.sendKeys('1990');

    gender.click();
    var allGenders = element.all(by.tagName('option'));
    var genderFemale = allGenders.last().click();
    var genderMale = allGenders.get(1).click();
    
    password.clear();
    password.sendKeys('password');

    confirmation.clear();
    confirmation.sendKeys('password');

    isSubscribedCheck.click();

    registerButton.click();

    expectedUrl = browser.getCurrentUrl();            
    expect(expectedUrl).toEqual('http://b111m11434ee.dev2.oggettoweb.com/customer/account/index/');
    browser.sleep(5000);
  });


 /*
  it('should create new account e-mail with same name and date of birth, than login into it',  () => {

    firstName.sendKeys('firstname');
    lastName.sendKeys('lastname');
    email.sendKeys( uniqueSting + '.same-name-same-date.subscribe@form.com');
    day.sendKeys('1');
    month.sendKeys('1');
    year.sendKeys('1990');

    password.sendKeys('password');
    confirmation.sendKeys('password');

    registerButton = element(by.partialButtonText('Register')).click();

    expectedUrl = browser.getCurrentUrl();            
    expect(expectedUrl).toEqual('http://b111m11434ee.dev2.oggettoweb.com/customer/account/index/');

    var logoutButton = element(by.linkText('Log Out')).click();

    browser.driver.get('http://b111m11434ee.dev2.oggettoweb.com/customer/account/login/');
    browser.sleep(500);

    var emailToLogin = $$('#email').click();
    emailToLogin.sendKeys( uniqueSting + '.same-name-same-date.subscribe@form.com');

    var passwordToLogin = $$('#pass').click();
    passwordToLogin.sendKeys('password');
    browser.sleep(3000);

    var loginButton = $$('#send2').click();

    expectedUrl = browser.getCurrentUrl();            
    expect(expectedUrl).toEqual('http://b111m11434ee.dev2.oggettoweb.com/customer/account/index/');
  });
*/

});