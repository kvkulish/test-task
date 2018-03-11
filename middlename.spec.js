describe('Middlename check ', function() {

  global.protractor = protractor;
  global.browser = browser;

  var gender = $$('#gender');
  var middlename = $$('#middlename');

  //input-text validation-passed  
  //input-text validation-failed

  var maxSymbolsString = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';

  browser.waitForAngularEnabled(false);

  beforeEach(function() {

    browser.driver.get('http://b111m11434ee.dev2.oggettoweb.com/customer/account/create/');
    
  });

  it('should be presented',  () => {
    expect(middlename.isPresent()).toBeTruthy();
  });

  it('should be enabled',  () => {
    expect(middlename.isEnabled()).toBeTruthy();
  });

  it('should accept normal name',  () => {
    middlename.click();
    middlename.sendKeys('John');
    gender.click();
    expect(middlename.getAttribute('class')).toEqual(['input-text validation-passed']);   
  });

  it('should accept long normal name',  () => {
    middlename.click();
    middlename.sendKeys('Alexandr-Sergeevich-Pushkin');
    gender.click();
    expect(middlename.getAttribute('class')).toEqual(['input-text validation-passed']);
  });

  it('should accept short name',  () => {
    middlename.click();
    middlename.sendKeys('kt');
    gender.click();
    expect(middlename.getAttribute('class')).toEqual(['input-text validation-passed']);
  });

  it('should accept foreign symbols name',  () => {
    middlename.click();
    middlename.sendKeys('Санёчек');
    gender.click();
    expect(middlename.getAttribute('class')).toEqual(['input-text validation-passed']);
  });

  it('should not accept ,./\|><@#$%^&*(){}[]=_+ symbols',  () => {
    middlename.click();
    middlename.sendKeys(',./\|><@#$%^&*(){}[]=_+');
    gender.click();
    expect(middlename.getAttribute('class')).toEqual(['input-text validation-failed']);
  });

  it('should not accept more then 128 symbols',  () => {
    middlename.click();
    middlename.sendKeys(maxSymbolsString);
    gender.click();
    expect(middlename.getAttribute('class')).toEqual(['input-text validation-failed']);
  });

  it('should not accept "    " string',  () => {    
    middlename.click();
    middlename.sendKeys('    ');
    gender.click();
    expect(middlename.getAttribute('class')).toEqual(['input-text validation-failed']); 
  });  

});