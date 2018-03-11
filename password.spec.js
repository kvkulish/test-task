describe('Password check', function() {

  global.protractor = protractor;
  global.browser = browser;

  var gender = $$('#gender');

  var password = $$('#password');
  var confirmation = $$('#confirmation');

  //password
  //input-text required-entry validate-password validation-passed
  //input-text required-entry validate-password validation-failed

  //confirmation
  //input-text required-entry validate-cpassword validation-passed
  //input-text required-entry validate-cpassword validation-failed

  var maxSymbolsString = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'; //a 64 times

  browser.waitForAngularEnabled(false);

  beforeEach(function() {

    browser.driver.get('http://b111m11434ee.dev2.oggettoweb.com/customer/account/create/');
    
  });

  it('pass and confirm should be presented and enabled',  () => {
    expect(password.isPresent()).toBeTruthy();
    expect(password.isEnabled()).toBeTruthy();

    expect(confirmation.isPresent()).toBeTruthy();
    expect(confirmation.isEnabled()).toBeTruthy();
  });

  it('should accept normal password',  () => {
    password.sendKeys('normalpass');
    confirmation.sendKeys('normalpass');
    gender.click();
    expect(password.getAttribute('class')).toEqual(['input-text required-entry validate-password validation-passed']);
    expect(confirmation.getAttribute('class')).toEqual(['input-text required-entry validate-cpassword validation-passed']);
  });

  it('should accept any symbols',  () => {
    password.sendKeys('abCD123~!@#$%^&*()_+`-=[]""{},./\|<>ёаб');
    confirmation.sendKeys('abCD123~!@#$%^&*()_+`-=[]""{},./\|<>ёаб');
    gender.click();
    expect(password.getAttribute('class')).toEqual(['input-text required-entry validate-password validation-passed']);
    expect(confirmation.getAttribute('class')).toEqual(['input-text required-entry validate-cpassword validation-passed']);
  });

  it('up to 256 symbols password',  () => {
    password.sendKeys(maxSymbolsString+maxSymbolsString+maxSymbolsString+maxSymbolsString);
    confirmation.sendKeys(maxSymbolsString+maxSymbolsString+maxSymbolsString+maxSymbolsString);
    gender.click();
    expect(password.getAttribute('class')).toEqual(['input-text required-entry validate-password validation-passed']);
    expect(confirmation.getAttribute('class')).toEqual(['input-text required-entry validate-cpassword validation-passed']);
  });

  it('password > 6',  () => {
    password.sendKeys('p');
    gender.click();
    expect(password.getAttribute('class')).toEqual(['input-text required-entry validate-password validation-failed']);

    password.sendKeys('');
    gender.click();
    expect(password.getAttribute('class')).toEqual(['input-text required-entry validate-password validation-failed']);
  });

  it('password != confirmation is an error',  () => {
    password.sendKeys('password');
    confirmation.sendKeys('not-so-password');
    gender.click();
    expect(confirmation.getAttribute('class')).toEqual(['input-text required-entry validate-cpassword validation-failed']);
  });

});