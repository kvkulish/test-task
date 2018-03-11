describe('Lastname input ', function() {

  global.protractor = protractor;
  global.browser = browser;

  var gender = $$('#gender');
  var lastName = $$('#lastname');

  //input-text required-entry validation-passed  
  //input-text required-entry validation-failed

  var maxSymbolsString = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';

  browser.waitForAngularEnabled(false);

  beforeEach(function() {

    browser.driver.get('http://b111m11434ee.dev2.oggettoweb.com/customer/account/create/');
    
  });

  it('should be presented',  () => {
    expect(lastName.isPresent()).toBeTruthy();
  });

  it('should be enabled',  () => {
    expect(lastName.isEnabled()).toBeTruthy();
  });

  it('should accept normal name',  () => {
    lastName.click();
    lastName.sendKeys('John');
    gender.click();
    expect(lastName.getAttribute('class')).toEqual(['input-text required-entry validation-passed']);   
  });

  it('should accept long normal name',  () => {
    lastName.click();
    lastName.sendKeys('Alexandr-Sergeevich-Pushkin');
    gender.click();
    expect(lastName.getAttribute('class')).toEqual(['input-text required-entry validation-passed']);
  });

  it('should accept short name',  () => {
    lastName.click();
    lastName.sendKeys('kt');
    gender.click();
    expect(lastName.getAttribute('class')).toEqual(['input-text required-entry validation-passed']);
  });

  it('should accept foreign symbols name',  () => {
    lastName.click();
    lastName.sendKeys('Санёчек');
    gender.click();
    expect(lastName.getAttribute('class')).toEqual(['input-text required-entry validation-passed']);
  });

  it('should not accept ,./\|><@#$%^&*(){}[]=_+ symbols',  () => {
    lastName.click();
    lastName.sendKeys(',./\|><@#$%^&*(){}[]=_+');
    gender.click();
    expect(lastName.getAttribute('class')).toEqual(['input-text required-entry validation-failed']);
  });

  it('should not accept more then 128 symbols',  () => {
    lastName.click();
    lastName.sendKeys(maxSymbolsString);
    gender.click();
    expect(lastName.getAttribute('class')).toEqual(['input-text required-entry validation-failed']);
  });

  it('should not accept "    " string',  () => {    
    lastName.click();
    lastName.sendKeys('    ');
    gender.click();
    expect(lastName.getAttribute('class')).toEqual(['input-text required-entry validation-failed']); 
  });  

});