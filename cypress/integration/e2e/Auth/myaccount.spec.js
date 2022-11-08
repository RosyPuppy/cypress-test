import { dev, content } from "../../Variables";
const { baseUrl, account, region } = dev;

describe("Auth test", () => {
  it("should go to AU my account page and check edit profile scenarios", () => {
    cy.visit(`${baseUrl}/${region.au}/signin.html`);
    cy.get("input#email").type(account.signin_login.mail);
    cy.get("input#password").type(account.signin_login.pwd);
    cy.get("button.vue-btn.btn.res-spin-btn.my-2").click();
    cy.wait(4000);
    cy.url().should("include", `${baseUrl}/${region.au}/myaccount.html`);
    cy.get(".title").contains(content.myaccount.myaccount_title);
    cy.get(".btn.btn-primary.btn-text-color.about-edit").click();
    cy.url().should("include", `${baseUrl}/${region.au}/editprofile.html`);
    cy.get(
      ".vue-btn.vue-btn-disabled.btn.btn-primary.res-btn-primary.res-spin-btn.mt-3.disabled-button-color"
    ).should("be.visible");
    cy.get("input#firstName")
      .clear()
      .type(content.myaccount.fname);
      cy.get("select#country").select(content.myaccount.country);
    cy.get(
      ".vue-btn.btn.btn-primary.res-btn-primary.res-spin-btn.mt-3"
    ).click();
    // cy.get("div#app div:nth-child(6) > button").click();
    cy.wait(4000);
    cy.get(".nav-link.links")
      .contains(content.myaccount.backtoAccount_link_text)
      .click();
    cy.url().should("include", `${baseUrl}/${region.au}/myaccount.html`);
    // cy.get(".field-space.mobile-typo > span")
    //   .eq(1)
    //   .should("have.text", content.myaccount.newcountry);
      
  });
  //swiss france
  it("should go to swiss france my account page and check edit profile scenarios", () => {
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
    cy.get(".title").contains(content.swissfrance_myaccount.myaccount_title);
    cy.get(".btn.btn-primary.btn-text-color.about-edit").click();
    cy.url().should("include", `${baseUrl}/${region.frch}/editprofile.html`);
    cy.get(
      ".vue-btn.vue-btn-disabled.btn.btn-primary.res-btn-primary.res-spin-btn.mt-3.disabled-button-color"
    ).should("be.visible");
    cy.get("input#firstName")
      .clear()
      .type(content.swissfrance_myaccount.fname);
      cy.get("select#country").select(content.swissfrance_myaccount.country);
    cy.get(
      ".vue-btn.btn.btn-primary.res-btn-primary.res-spin-btn.mt-3"
    ).click();
    cy.wait(4000);
    cy.get(".nav-link.links")
      .contains(content.swissfrance_myaccount.backtoAccount_link_text)
      .click();
    cy.url().should("include", `${baseUrl}/${region.frch}/myaccount.html`);
    cy.get(".field-space.mobile-typo > span")
      .eq(1)
      .should("have.text", content.swissfrance_myaccount.newcountry);
      
  });
  //swiss german
  it("should go to swiss german my account page and check edit profile scenarios", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      debugger
      return false
  })
  Cypress.on('fail', (err) => {
      debugger
  })
    cy.visit(`${baseUrl}/${region.dech}/signin.html`);
    cy.get("input#email").type(account.swissgerman_signin_login.mail);
    cy.get("input#password").type(account.swissgerman_signin_login.pwd);
    cy.get("button.vue-btn.btn.res-spin-btn.my-2").click();
    cy.wait(4000);
    cy.url().should("include", `${baseUrl}/${region.dech}/myaccount.html`);
    cy.get(".title").contains(content.swissgerman_myaccount.myaccount_title);
    cy.get(".btn.btn-primary.btn-text-color.about-edit").click();
    cy.url().should("include", `${baseUrl}/${region.dech}/editprofile.html`);
    cy.get(
      ".vue-btn.vue-btn-disabled.btn.btn-primary.res-btn-primary.res-spin-btn.mt-3.disabled-button-color"
    ).should("be.visible");
    cy.get("input#firstName")
      .clear()
      .type(content.swissgerman_myaccount.fname);
      cy.get("select#country").select(content.swissgerman_myaccount.country);
    cy.get(
      ".vue-btn.btn.btn-primary.res-btn-primary.res-spin-btn.mt-3"
    ).click();
    cy.get(".nav-link.links")
      .contains(content.swissgerman_myaccount.backtoAccount_link_text)
      .click();
    cy.url().should("include", `${baseUrl}/${region.dech}/myaccount.html`);
    cy.get(".field-space.mobile-typo > span")
      .eq(1)
      .should("have.text", content.swissgerman_myaccount.newcountry);
      
  });
});
