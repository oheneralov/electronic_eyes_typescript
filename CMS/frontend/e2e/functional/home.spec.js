const {By, Key, until, Builder} = require('selenium-webdriver')
const assert = require('chai').assert
var driver = null
const domain = 'http://127.0.0.1:3000'
const homeUrl = `${domain}/home`
const mochaTimeOut = 300000// ms
driver = new Builder().forBrowser('chrome').build();
//To start run the test write in console: mocha e2e/functional/home.spec.js

after(function (done) { // eslint-disable-line
  driver.quit()
  done()
})


describe('Testing home page', function () {
  this.timeout(mochaTimeOut)

  
  it('testing the select form', async function () {
    await driver.get(homeUrl)
    await driver.wait(until.titleIs('Software for visually impaired people'), 300000)

    const selectFormOption1 = await driver.findElement(By.css('#language > option:nth-child(1)')).getText();
    const selectFormOption2 = await driver.findElement(By.css('#language > option:nth-child(2)')).getText();

    assert.strictEqual(selectFormOption1, 'English', 'English text is missing!');
    //console.log("text in select option 1:" + selectFormOption1);
    assert.strictEqual(selectFormOption2, 'Español', 'Español text is missing!');
    //console.log("text in select option 2:" + selectFormOption2);

    const selectClickOption1 = await driver.findElement(By.css('#language > option:nth-child(1)'));
    selectClickOption1.click();
    await driver.wait(until.elementLocated(By.css('#language > option:nth-child(1)')),10000).getText().then(function(txt){
      console.log("after click the text of the select option 1  is: " + txt);
    });

    const selectClickOption2 = await driver.findElement(By.css('#language > option:nth-child(2)'));
    selectClickOption2.click();
    await driver.wait(until.elementLocated(By.css('#language > option:nth-child(2)')),10000).getText().then(function(txt){
      console.log("after click the text of the select option 2  is: " + txt);
    });
  });

  it('testing header', async function () {
    await driver.get(homeUrl)
    await driver.wait(until.titleIs('Software for visually impaired people'), 300000)

    let actualResult = await driver.findElement(By.css('h1.font-bold.uppercase.text-x12.mb-4.text-white.text-center')).getText()
    assert.strictEqual(actualResult, 'ELECTRONIC EYES', 'electronic eyes text is missing!')
  });

  it('testing paragraph', async function () {
    await driver.get(homeUrl)
    await driver.wait(until.titleIs('Software for visually impaired people'), 300000)

    let actualResult = await driver.findElement(By.css('p.mb-8.text-white.text-center')).getText()
    assert.strictEqual(actualResult, 'Help for visually impaired people', 'Help for visually impaired people text is missing!')
  });

  it('testing navbar', async function () {
    await driver.get(homeUrl)
    await driver.wait(until.titleIs('Software for visually impaired people'), 300000)

    await driver.findElements(By.css('nav a')).then(function(elements){
      elements.map(function(el){
        el.getText().then(function(txt){
          console.log("the text of the navbar element is:" + txt);
        });
      });
    });
  });

  it('testing should go to domain  and check links', async function () {
    await driver.get(homeUrl)
    await driver.wait(until.titleIs('Software for visually impaired people'), 300000)

    const homeLink = await driver.findElement(By.css('a.nav-link.nav-item.homeLink')).getAttribute('href');
    const solutionLink = await driver.findElement(By.css('a.nav-link.nav-item.solutionLink')).getAttribute('href');
    const birthdayLink = await driver.findElement(By.css('a.nav-link.nav-item.birthdayLink')).getAttribute('href');
    const cartoonizerLink = await driver.findElement(By.css('a.nav-link.nav-item.cartoonizerLink')).getAttribute('href');
    const contactLink = await driver.findElement(By.css('a.nav-link.nav-item.contactLink')).getAttribute('href');
    const manageLink = await driver.findElement(By.css('a.nav-link.nav-item.manageLink')).getAttribute('href');
    

    assert.strictEqual(homeLink, 'http://127.0.0.1:3000/frontend', '/frontend is missing!');
    assert.strictEqual(solutionLink, 'http://127.0.0.1:3000/frontend/solution', '/frontend/solution is missing!');
    assert.strictEqual(birthdayLink, 'http://127.0.0.1:3000/frontend/birthday', '/frontend/birthday is missing!');
    assert.strictEqual(cartoonizerLink, 'http://127.0.0.1:3000/frontend/cartoonizer', '/frontend/cartoonizer is missing!');
    assert.strictEqual(contactLink, 'http://127.0.0.1:3000/frontend/contact', '/frontend/contact is missing!');
    assert.strictEqual(manageLink, 'http://127.0.0.1:3000/frontend/manage', '/frontend/manage is missing!');
    
  });


  it('testing should go to domain and check that clicking on links with a mouse will produce a reaction.', async function () {
    await driver.get(homeUrl)
    await driver.wait(until.titleIs('Software for visually impaired people'), 300000)

    const homeClick = await driver.findElement(By.css('a.nav-link.nav-item.homeLink'));
    const solutionClick = await driver.findElement(By.css('a.nav-link.nav-item.solutionLink'));
    const birthdayClick = await driver.findElement(By.css('a.nav-link.nav-item.birthdayLink'));
    const cartoonizerClick = await driver.findElement(By.css('a.nav-link.nav-item.cartoonizerLink'));
    const contactClick = await driver.findElement(By.css('a.nav-link.nav-item.contactLink'));
    const manageClick = await driver.findElement(By.css('a.nav-link.nav-item.manageLink'));

    homeClick.click();
    await driver.wait(until.elementLocated(By.css('h2.titleHome')),10000).getText().then(function(txt){
      console.log("Title of the Home page is: " + txt);
    });
    solutionClick.click();
    await driver.wait(until.elementLocated(By.css('h2.titleSolution')),10000).getText().then(function(txt){
      console.log("Title of the Solution page is: " + txt);
    });
    
    birthdayClick.click();
    await driver.wait(until.elementLocated(By.css('h2.titleBirthday')),10000).getText().then(function(txt){
      console.log("Title of the Birthday page is: " + txt);
    });
    
    cartoonizerClick.click();
    await driver.wait(until.elementLocated(By.css('h2.titleCartoonizer')),10000).getText().then(function(txt){
      console.log("Title of the Cartoonizer page is: " + txt);
    });
    
    contactClick.click();
    await driver.wait(until.elementLocated(By.css('p.titleContact')),10000).getText().then(function(txt){
      console.log("Title of the Contact page is: " + txt);
    });
    manageClick.click();
    await driver.wait(until.elementLocated(By.css('div.titleManage')),10000).getText().then(function(txt){
      console.log("Title of the Manage page is: " + txt);
    });
    
  });

  it('testing the home link title text', async function () {
    await driver.get(domain)
    await driver.wait(until.titleIs('Software for visually impaired people'), 300000)

    let actualResult = await driver.findElement(By.css('h2.titleHome')).getText()
    assert.strictEqual(actualResult, 'Home', 'Home text is missing in title!')
  });

  it('testing the solution link title text', async function () {
    await driver.get('http://127.0.0.1:3000/frontend/solution')
    await driver.wait(until.titleIs('Software for visually impaired people'), 300000)

    let actualResult = await driver.findElement(By.css('h2.titleSolution')).getText()
    assert.strictEqual(actualResult, 'Solution For Blind People', 'Solution For Blind People text is missing in title!')
  });

  it('testing the birthday link title text', async function () {
    await driver.get('http://127.0.0.1:3000/frontend/birthday')
    await driver.wait(until.titleIs('Software for visually impaired people'), 300000)

    let actualResult = await driver.findElement(By.css('h2.titleBirthday')).getText()
    assert.strictEqual(actualResult, 'Birthday Present', 'Birthday Present text is missing in title!')
  });

  it('testing the cartoonizer link title text', async function () {
    await driver.get('http://127.0.0.1:3000/frontend/cartoonizer')
    await driver.wait(until.titleIs('Software for visually impaired people'), 300000)

    let actualResult = await driver.findElement(By.css('h2.titleCartoonizer')).getText()
    assert.strictEqual(actualResult, 'Convert your photo into a cartoon', 'Convert your photo into a cartoon text is missing in title!')
  });
  
  it('testing the contact link title text', async function () {
    await driver.get('http://127.0.0.1:3000/frontend/contact')
    await driver.wait(until.titleIs('Software for visually impaired people'), 300000)

    let actualResult = await driver.findElement(By.css('p.titleContact')).getText()
    assert.strictEqual(actualResult, 'If you have questions or would like to order one of our prodcts please contact us by e-mail:', 'If you have questions or would like to order one of our prodcts please contact us by e-mail: text is missing in title!')
  });

  it('testing the manage link title text', async function () {
    await driver.get('http://127.0.0.1:3000/frontend/manage')
    await driver.wait(until.titleIs('Software for visually impaired people'), 300000)

    let actualResult = await driver.findElement(By.css('div.titleManage')).getText()
    assert.strictEqual(actualResult, 'manage', 'manage text is missing in title!')
  });

  it('testing home link text', async function () {
    await driver.get(homeUrl)
    await driver.wait(until.titleIs('Software for visually impaired people'), 300000)

    let actualResult = await driver.findElement(By.css('a.nav-link.nav-item.homeLink')).getText()
    assert.strictEqual(actualResult, 'Home', 'Home text is missing!')
  });

  it('testing solution link text', async function () {
    await driver.get(homeUrl)
    await driver.wait(until.titleIs('Software for visually impaired people'), 300000)

    let actualResult = await driver.findElement(By.css('a.nav-link.nav-item.solutionLink')).getText()
    assert.strictEqual(actualResult, 'Solution for Blind People', 'Solution for Blind People text is missing!')
  });

 
  it('testing birthday link text', async function () {
    await driver.get(homeUrl)
    await driver.wait(until.titleIs('Software for visually impaired people'), 300000)

    let actualResult = await driver.findElement(By.css('a.nav-link.nav-item.birthdayLink')).getText()
    assert.strictEqual(actualResult, 'Birthday Present', 'Birthday Present is missing!')
  });

  it('testing cartoonizer link text', async function () {
    await driver.get(homeUrl)
    await driver.wait(until.titleIs('Software for visually impaired people'), 300000)

    let actualResult = await driver.findElement(By.css('a.nav-link.nav-item.cartoonizerLink')).getText()
    assert.strictEqual(actualResult, 'Cartoonizer', 'Cartoonizer text is missing!')
  });

  it('testing contact link text', async function () {
    await driver.get(homeUrl)
    await driver.wait(until.titleIs('Software for visually impaired people'), 300000)

    let actualResult = await driver.findElement(By.css('a.nav-link.nav-item.contactLink')).getText()
    assert.strictEqual(actualResult, 'Contact Us', 'Contact Us is missing!')
  });

  it('testing manage link text', async function () {
    await driver.get(homeUrl)
    await driver.wait(until.titleIs('Software for visually impaired people'), 300000)

    let actualResult = await driver.findElement(By.css('a.nav-link.nav-item.manageLink')).getText()
    assert.strictEqual(actualResult, 'Manage', 'Manage text is missing!')
  });

  
  it('testing link from the link Solution page', async function () {
    await driver.get('http://127.0.0.1:3000/frontend/solution')
    await driver.wait(until.titleIs('Software for visually impaired people'), 300000)

    const pageOnLinkSolution = await driver.findElement(By.css('a.linkSolution')).getAttribute('href');
    const pageOnLinkSolutionClick = await driver.findElement(By.css('a.linkSolution'));

    assert.strictEqual(pageOnLinkSolution, 'https://www.patreon.com/electroniceyes', 'https://www.patreon.com/electroniceyes is missing!');
    pageOnLinkSolutionClick.click();
  });

  it('testing text inside the link Solution page', async function () {
    await driver.get('http://127.0.0.1:3000/frontend/solution')
    await driver.wait(until.titleIs('Software for visually impaired people'), 300000)

    let actualResult = await driver.findElement(By.css('a.linkSolution')).getText()
    assert.strictEqual(actualResult, 'Support on patreon', 'Support on patreon- text is missing!')
  }); 


})
