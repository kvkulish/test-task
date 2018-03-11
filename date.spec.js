describe('Date of Birth ', function() {

  global.protractor = protractor;
  global.browser = browser;

  var dob = $$('.customer-dob');

  var gender = $$('#gender');

  var day = $$('#day');
  var month = $$('#month');
  var year = $$('#year');


  //input-box customer-dob validation-passed
  //input-box customer-dob validation-error

  browser.waitForAngularEnabled(false);

  beforeEach(function() {

    browser.driver.get('http://b111m11434ee.dev2.oggettoweb.com/customer/account/create/');
    
  });

  it('day should be presented and enabled',  () => {
    expect(day.isPresent()).toBeTruthy();
    expect(day.isEnabled()).toBeTruthy();
  });

  it('month should be presented and enabled',  () => {
    expect(month.isPresent()).toBeTruthy();
    expect(month.isEnabled()).toBeTruthy();
  });

  it('year should be presented and enabled',  () => {
    expect(year.isPresent()).toBeTruthy();
    expect(year.isEnabled()).toBeTruthy();
  });

  it('should accept normal date',  () => {
    day.click();
    day.sendKeys('1');
    month.click();
    month.sendKeys('1');
    year.click();
    year.sendKeys('1988');
    gender.click();
    expect(dob.getAttribute('class')).toEqual(['input-box customer-dob validation-passed']);
  });

  it('only digits',  () => {
    day.click();
    day.sendKeys('a');
    month.click();
    expect(dob.getAttribute('class')).toEqual(['input-box customer-dob validation-error']);
    day.sendKeys('1');

    month.click();
    month.sendKeys('&');
    year.click();
    expect(dob.getAttribute('class')).toEqual(['input-box customer-dob validation-error']);
    month.sendKeys('2');

    year.click();    
    year.sendKeys(' ');
    gender.click();
    expect(dob.getAttribute('class')).toEqual(['input-box customer-dob validation-error']);

  });

  it('only integer',  () => {
    day.click();
    day.sendKeys('0');
    month.click();
    expect(dob.getAttribute('class')).toEqual(['input-box customer-dob validation-error']);
    day.sendKeys('1');

    month.click();
    month.sendKeys('-2');
    year.click();
    expect(dob.getAttribute('class')).toEqual(['input-box customer-dob validation-error']);
    month.sendKeys('2');

    year.click();    
    year.sendKeys('1992.2');
    gender.click();
    expect(dob.getAttribute('class')).toEqual(['input-box customer-dob validation-error']);
  });

  it('correct day in month verification',  () => {

      day.sendKeys('31');
      month.sendKeys('6');
      year.sendKeys('1988');
      month.click();
      expect(dob.getAttribute('class')).toEqual(['input-box customer-dob validation-error']);

      day.sendKeys('29');
      month.sendKeys('2');
      year.sendKeys('1987');
      month.click();
      expect(dob.getAttribute('class')).toEqual(['input-box customer-dob validation-error']);
  });

  it('0    < day   <   32',  () => {

      day.sendKeys('1');
      month.sendKeys('1');

      day.click();
      day.sendKeys('-1');
      month.click();
      expect(dob.getAttribute('class')).toEqual(['input-box customer-dob validation-error']);
      day.sendKeys('32');
      month.click();
      expect(dob.getAttribute('class')).toEqual(['input-box customer-dob validation-error']);
  });

  it('0    < month <    0',  () => {

      day.sendKeys('1');
      year.sendKeys('1988');

      month.click();
      month.sendKeys('0');
      year.click();
      expect(dob.getAttribute('class')).toEqual(['input-box customer-dob validation-error']);
      month.sendKeys('13');
      year.click();
      expect(dob.getAttribute('class')).toEqual(['input-box customer-dob validation-error']);
  });
    
  it('1899 < year  < 2019',  () => {

      day.sendKeys('1');
      month.sendKeys('1');

      year.click();
      year.sendKeys('1899');
      month.click();
      expect(dob.getAttribute('class')).toEqual(['input-box customer-dob validation-error']);
      year.sendKeys('2019');
      month.click();
      expect(dob.getAttribute('class')).toEqual(['input-box customer-dob validation-error']);
  });
});