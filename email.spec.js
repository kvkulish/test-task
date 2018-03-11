describe('Email check ', function() {

  global.protractor = protractor;
  global.browser = browser;

  var gender = $$('#gender');
  var email = $$('#email_address');

  //input-text validate-email required-entry validation-passed
  //input-text validate-email required-entry validation-failed

  var maxSymbolsString = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'; //a 64 times

  browser.waitForAngularEnabled(false);

  beforeEach(function() {

    browser.driver.get('http://b111m11434ee.dev2.oggettoweb.com/customer/account/create/');
    
  });

  it('should be presented',  () => {
    expect(email.isPresent()).toBeTruthy();
  });

  it('should be enabled',  () => {
    expect(email.isEnabled()).toBeTruthy();
  });

  it('should accept normal address',  () => {
    email.click();
    email.sendKeys('john@example.com');
    gender.click();
    expect(email.getAttribute('class')).toEqual(['input-text validate-email required-entry validation-passed']);   
  });

  it('should accept long normal address',  () => {
    email.click();
    email.sendKeys('Alexandr-Sergeevich-Pushkin@example.com');
    gender.click();
    expect(email.getAttribute('class')).toEqual(['input-text validate-email required-entry validation-passed']);
  });

  it('should accept short address',  () => {
    email.click();
    email.sendKeys('kt@example.com');
    gender.click();
    expect(email.getAttribute('class')).toEqual(['input-text validate-email required-entry validation-passed']);
  });

  it('should not accept .. in address',  () => {
    email.click();
    email.sendKeys('..kt@example.com');
    gender.click();
    expect(email.getAttribute('class')).toEqual(['input-text validate-email required-entry validation-failed']);
  });

  it('should not accept more than one @ in address',  () => {
    email.click();
    email.sendKeys('joh@n@example.com');
    gender.click();
    expect(email.getAttribute('class')).toEqual(['input-text validate-email required-entry validation-failed']);
  });

  it('should not accept more than 64 symbols before @ in address',  () => {
    email.click();
    email.sendKeys(maxSymbolsString+'a@example.com');
    gender.click();
    expect(email.getAttribute('class')).toEqual(['input-text validate-email required-entry validation-failed']);
  });

  it('should not accept more than 254 symbols after @ in address',  () => {
    email.click();
    email.sendKeys('a@'+maxSymbolsString+maxSymbolsString+maxSymbolsString+maxSymbolsString);
    gender.click();
    expect(email.getAttribute('class')).toEqual(['input-text validate-email required-entry validation-failed']);
  });
});