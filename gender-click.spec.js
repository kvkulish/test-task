describe('Gender check', function() {

  global.protractor = protractor;
  global.browser = browser;

  browser.waitForAngularEnabled(false);
  var EC = protractor.ExpectedConditions;

  beforeEach(function() {

    browser.driver.get('http://b111m11434ee.dev2.oggettoweb.com/customer/account/create/');
    
  });

  it('all clickable',  () => {
        
        var gender = $$('#gender').click();

        var allGenders = element.all(by.tagName('option'));
        expect(allGenders.count()).toEqual(3);



        var genderFemale = allGenders.last().click();

        var day = element(by.id('day')).click();

        var genderMale = allGenders.get(1).click();

        day = element(by.id('day')).click();

  })
});