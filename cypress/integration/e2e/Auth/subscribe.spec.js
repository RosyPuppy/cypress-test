import { dev, content } from "../../Variables";
const { baseUrl, account, region } = dev;

describe("Auth test", () => {
  //subscribe page
  it("should visit AU subscriptions page", () => {
    cy.visit(`${baseUrl}/${region.au}/signin.html`);
    cy.get("input#email").type(account.signin_login.mail);
    cy.get("input#password").type(account.signin_login.pwd);
    cy.get("button.vue-btn.btn.res-spin-btn.my-2").click();
    cy.wait(4000);
    cy.url().should("include", `${baseUrl}/${region.au}/myaccount.html`);
    cy.visit(`${baseUrl}/${region.au}/myaccount.html`);
    cy.get("div#app div.col-md-4 > button > span").click();
    cy.url().should("include", `${baseUrl}/${region.au}/subscribe.html`);
    cy.get("input#commercial").uncheck();
    cy.wait(4000);
    cy.get(".col-10 > h4").should("have.text", content.subscribe.popup_text);
    cy.get(".btn.btn-primary.res-btn-primary.mb-3")
      .eq(1)
      .click();
      cy.get("input#commercial").check();
      cy.get(".vue-btn.res-spin-btn.my-2").click();
      cy.wait(3000);
      cy.get(".nav-link.links.p-0").contains(content.subscribe.backtoprofile_text).click();
      cy.wait(4000);
      cy.url().should("include", `${baseUrl}/${region.au}/myaccount.html`);

  });
//swiss france
it("should visit swiss france subscriptions page", () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    debugger
    return false
})
Cypress.on('fail', (err) => {
    debugger
})
  cy.visit(`${baseUrl}/${region.frch}/signin.html`);
  cy.get("input#email").type(account.swissfrance_signin_login.mail);
  cy.get("input#password").type(account.swissfrance_signin_login.pwd);
  cy.get("button.vue-btn.btn.res-spin-btn.my-2").click();
  cy.wait(4000);
  cy.url().should("include", `${baseUrl}/${region.frch}/myaccount.html`);
  cy.visit(`${baseUrl}/${region.frch}/myaccount.html`);
  cy.get("div#app div.col-md-4 > button > span").click();
  cy.url().should("include", `${baseUrl}/${region.frch}/subscribe.html`);
  cy.get("input#commercial").uncheck();
  cy.wait(4000);
  cy.get(".col-10 > h4").should("have.text", content.swissfrance_subscribe.popup_text);
  cy.get(".btn.btn-primary.res-btn-primary.mb-3")
    .eq(1)
    .click();
    cy.get("input#commercial").check();
    cy.get(".vue-btn.res-spin-btn.my-2").click();
    cy.wait(3000);
    cy.get(".nav-link.links.p-0").contains(content.swissfrance_subscribe.backtoprofile_text).click();
    cy.wait(4000);
    cy.url().should("include", `${baseUrl}/${region.frch}/myaccount.html`);

});
//swiss german
it("should visit swiss german subscriptions page", () => {
  cy.visit(`${baseUrl}/${region.dech}/signin.html`);
  cy.get("input#email").type(account.swissgerman_signin_login.mail);
  cy.get("input#password").type(account.swissgerman_signin_login.pwd);
  cy.get("button.vue-btn.btn.res-spin-btn.my-2").click();
  cy.wait(4000);
  cy.url().should("include", `${baseUrl}/${region.dech}/myaccount.html`);
  cy.visit(`${baseUrl}/${region.dech}/myaccount.html`);
  cy.get("div#app div.col-md-4 > button > span").click();
  cy.url().should("include", `${baseUrl}/${region.dech}/subscribe.html`);
  cy.get("input#commercial").uncheck();
  cy.wait(4000);
  cy.get(".col-10 > h4").should("have.text", content.swissgerman_subscribe.popup_text);
  cy.get(".btn.btn-primary.res-btn-primary.mb-3")
    .eq(1)
    .click();
    cy.get("input#commercial").check();
    cy.get(".vue-btn.res-spin-btn.my-2").click();
    cy.wait(3000);
    cy.get(".nav-link.links.p-0").contains(content.swissgerman_subscribe.backtoprofile_text).click();
    cy.wait(4000);
    cy.url().should("include", `${baseUrl}/${region.dech}/myaccount.html`);

});
   
  });

  

