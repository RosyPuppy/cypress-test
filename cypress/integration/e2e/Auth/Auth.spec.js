import { dev, language, content } from "../../Variables";
const { baseUrl, region, account} = dev;

describe("Auth test", () => {
  it("Check if region based text is available", () => {
    // Sign in headers text in signin.html

    //   Visit each local and check for related header
    cy.visit(`${baseUrl}/${region.us}/signin.html`);
    cy.get(".signin.mt-5 > .text-center.m-3").should(
      "have.text",
      language.en.signin
    );
    cy.wait(3000);
    cy.visit(`${baseUrl}/nb-no/signin.html`);
    cy.get("div#app div > div > div > div:nth-child(2) > div").should(
      "have.text",
      language.nb.ResMedEmplpoyeeLogin
    );
    cy.wait(3000);
    cy.visit(`${baseUrl}/sv-se/signin.html`);
    cy.get("div#app div > div > div > div:nth-child(2) > div").should(
      "have.text",
      language.sv.ResMedEmplpoyeeLogin
    );
    cy.wait(3000);
  });
  it("should login", () => {
    //   Visit each local and check for related header
    cy.visit(`${baseUrl}/${region.us}/signin.html`);
    cy.get("input#email").type(account.signin_login.mail);
    cy.get("input#password").type(account.signin_login.pwd);
    cy.get("button.vue-btn.btn.res-spin-btn.my-2").click();
    cy.wait(4000);
    cy.url().should("include", `${baseUrl}/${region.us}/myaccount.html`);
    cy.wait(4000);
  });
  it("should open signin help page", () => {
    cy.visit(`${baseUrl}/${region.us}/signin.html`);
    cy.get(".nav-link.links.my-2")
      .contains("Need help signing in?")
      .click();
    cy.url().should("include", `${baseUrl}/${region.us}/sign_help.html`);
    cy.wait(4000);
  });

  it("should open signup page", () => {
    cy.visit(`${baseUrl}/${region.us}/signin.html`);
    cy.get(".nav-link.links.my-2")
      .contains("Create an account")
      .click();
    cy.url().should("include", `${baseUrl}/${region.us}/signup.html`);
    cy.wait(4000);
  });
  it("should open reset password page", () => {
    cy.visit(`${baseUrl}/${region.us}/signin.html`);
    cy.get(".nav-link.links.my-2")
      .contains("Forgot password")
      .click();
    cy.wait(4000);
    cy.url().should("include", `${baseUrl}/${region.us}/resetpassword.html`);
    cy.wait(4000);
  });
  it("should validate email and pwd", () => {
    cy.visit(`${baseUrl}/${region.us}/signin.html`);
    cy.get("button.vue-btn.btn.res-spin-btn.my-2").click();
    cy.get(".invalid-feedback").should("have.length", 2);
    cy.wait(4000);
  });
  it("check signin but not verified err msg", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      debugger
      return false
  })
  Cypress.on('fail', (err) => {
      debugger
  })
    cy.visit(`${baseUrl}/${region.us}/signin.html`);
    cy.get("input#email").type(account.signinreg_notverified.mail);
    cy.get("input#password").type(account.signinreg_notverified.pwd);
    cy.wait(4000);
    cy.get("button.vue-btn.btn.res-spin-btn.my-2").click();
    cy.wait(4000);
    cy.get("p.error-dialog.p-2.text-light.already-text").should(
      "have.text",
      content.signin.verifymsg
    );
    cy.wait(4000);
  });
});
