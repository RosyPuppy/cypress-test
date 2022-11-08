Cypress.Commands.add('login', (email, password) => {
    cy.get('input#email').type(email);
    cy.get('input#password').type(password);
    cy.get('div#app div:nth-child(3) > button').click();
})

Cypress.Commands.add('logout', () => {
    cy.get("a > img").click();
    cy.wait(2000);
    cy.get('li > ul > li:nth-child(3) > a').click();
})

Cypress.Commands.add('pageopen', () => {
    cy.wait(2000);
    cy.visit('https://support.resmed.com/en-au/sleep-devices/airsense-10-cpap/#');
    cy.wait(2000);
})
