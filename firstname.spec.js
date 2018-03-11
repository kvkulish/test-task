describe('Firstname input ', function() {

  global.protractor = protractor;
  global.browser = browser;

  var gender = $$('#gender');
  var firstName = $$('#firstname');

  //input-text required-entry validation-passed  
  //input-text required-entry validation-failed

  var maxSymbolsString = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';

  browser.waitForAngularEnabled(false);

  beforeEach(function() {

    browser.driver.get('http://b111m11434ee.dev2.oggettoweb.com/customer/account/create/');
    
  });

  it('should be presented',  () => {
    expect(firstName.isPresent()).toBeTruthy();
  });

  it('should be enabled',  () => {
    expect(firstName.isEnabled()).toBeTruthy();
  });

  it('should accept normal name',  () => {
    firstName.click();
    firstName.sendKeys('John');
    gender.click();
    expect(firstName.getAttribute('class')).toEqual(['input-text required-entry validation-passed']);   
  });

  it('should accept long normal name',  () => {
    firstName.click();
    firstName.sendKeys('Alexandr-Sergeevich-Pushkin');
    gender.click();
    expect(firstName.getAttribute('class')).toEqual(['input-text required-entry validation-passed']);
  });

  it('should accept short name',  () => {
    firstName.click();
    firstName.sendKeys('kt');
    gender.click();
    expect(firstName.getAttribute('class')).toEqual(['input-text required-entry validation-passed']);
  });

  it('should accept foreign symbols name',  () => {
    firstName.click();
    firstName.sendKeys('Санёчек');
    gender.click();
    expect(firstName.getAttribute('class')).toEqual(['input-text required-entry validation-passed']);
  });

  it('should not accept ,./\|><@#$%^&*(){}[]=_+ symbols',  () => {
    firstName.click();
    firstName.sendKeys(',./\|><@#$%^&*(){}[]=_+');
    gender.click();
    expect(firstName.getAttribute('class')).toEqual(['input-text required-entry validation-failed']);
  });

  it('should not accept more then 128 symbols',  () => {
    firstName.click();
    firstName.sendKeys(maxSymbolsString);
    gender.click();
    expect(firstName.getAttribute('class')).toEqual(['input-text required-entry validation-failed']);
  });

  it('should not accept "    " string',  () => {    
    firstName.click();
    firstName.sendKeys('    ');
    gender.click();
    expect(firstName.getAttribute('class')).toEqual(['input-text required-entry validation-failed']); 
  });  

});