import { dev, content } from "../../Variables";
const { baseUrl, account, region } = dev;

describe("Auth test", () => {
  //change email page
  it("should visit change email page and check with same mail", () => {
    cy.visit(`${baseUrl}/${region.au}/signin.html`);
    cy.get("input#email").type(account.changeemail_prevmail.mail);
    cy.get("input#password").type(account.changeemail_prevmail.pwd);
    cy.get("button.vue-btn.btn.res-spin-btn.my-2").click();
    cy.wait(4000);
    cy.visit(`${baseUrl}/${region.au}/myaccount.html`);
    cy.get(".btn.btn-primary.btn-text-color.myresmedid-edit.mb-2").click();
    cy.url().should("include", `${baseUrl}/${region.au}/changeemail.html`);
    cy.get("input#email").clear();
    cy.get("input#email").type(account.changeemail_prevmail.mail);
    cy.get(
      "button.vue-btn.btn.btn-primary.res-btn-primary.res-spin-btn.mt-3"
    ).click();
    cy.wait(4000);
    cy.get(".bg-danger.p-2.text-light.already-text").should(
      "have.text",
      content.changeemail.errormsg
    );
    cy.wait(4000);
  });

  it("should show the success message", () => {
    cy.get("input#email").clear();
    cy.get("input#email").type(content.changeemail.newmail);
    cy.get(
      "button.vue-btn.btn.btn-primary.res-btn-primary.res-spin-btn.mt-3"
    ).click();
    cy.wait(4000);
    cy.get("div#app p:nth-child(2)").should(
      "have.text",
      content.changeemail.successmsg
    );

    cy.get("div#app div > div > div > div > div > a").click();
    cy.wait(4000);
    cy.url().should("include", "myaccount");

  });
});
