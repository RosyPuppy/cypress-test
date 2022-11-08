import { dev, content } from "../../Variables";
const { baseUrl, region } = dev;

describe("Auth test", () => {
  it("should visit signup page", () => {
    cy.visit(`${baseUrl}/${region.us}/signup.html`);
    cy.get(".vue-btn.btn.signupbtn").click();
    cy.get(".invalid-feedback.error_show").should("have.length", 10);
    cy.wait(3000);
    cy.get("input#firstName")
      .clear()
      .type(content.signup.fname);
    cy.get("input#lastName")
      .clear()
      .type(content.signup.lname);
    cy.wait(3000);
    cy.get(".invalid-feedback.error_show").should("have.length", 8);
    cy.get("input#password")
      .clear()
      .type(content.signup.pwd);
    cy.get("input#organisation")
      .clear()
      .type(content.signup.org);
    cy.wait(3000);
    cy.get("select#country").select(content.signup.country);
    cy.get("select#businessType").select(content.signup.businessType);
    cy.get("select#jobFunction").select(content.signup.jobFunction);
    cy.wait(3000);
    cy.get("input#zipCode").type(content.signup.zipcode);
    cy.get("input#clinical").check();
    cy.get("input#commercial").check();
    cy.get("input#technical").check();
    cy.wait(3000);
    cy.get("input#accept").check();
    cy.get(".vue-btn.btn.signupbtn").click();
    cy.get("input#technical").check();
    //without entering an mail we are clicking signup(please enter an email)
    cy.get(".invalid-feedback.error_show").should(
      "have.text",
      content.signup.emailmsg
    );
    cy.wait(3000);
    cy.get("input#email")
      .clear()
      .type(content.signup.invalidmail);
    cy.get(".invalid-feedback.error_show").should(
      "have.text",
      content.signup.invalidmsg
    );
    cy.wait(3000);
    cy.get("input#email")
      .clear()
      .type(content.signup.correctmail);
    cy.get(".vue-btn.btn.signupbtn").click();
    cy.wait(4000);
    cy.get(".pb-4.info").should("have.text", content.signup.successmsg);
  });

  it("should check with already registered mail", () => {
    cy.visit(`${baseUrl}/${region.us}/signup.html`);
    cy.get("input#firstName")
      .clear()
      .type(content.signup.fname);
    cy.get("input#lastName")
      .clear()
      .type(content.signup.lname);
    cy.get("input#password")
      .clear()
      .type(content.signup.pwd);
    cy.get("input#organisation")
      .clear()
      .type(content.signup.org);
    cy.wait(3000);
    cy.get("select#country").select(content.signup.country);
    cy.get("select#businessType").select(content.signup.businessType);
    cy.get("select#jobFunction").select(content.signup.jobFunction);
    cy.get("input#zipCode").type(content.signup.zipcode);
    cy.wait(3000);
    cy.get("input#clinical").check();
    cy.get("input#commercial").check();
    cy.get("input#technical").check();
    cy.wait(3000);
    cy.get("input#accept").check();
    cy.get("input#email")
      .clear()
      .type(content.signup.correctmail);
    cy.get(".vue-btn.btn.signupbtn").click();
    cy.wait(4000);
    //already existed email
    cy.get("p.bg-danger.p-2.text-light.already-text").should(
      "have.text",
      content.signup.reg_notverified
    );
    cy.wait(4000);
  });
  it("should check alerts", () => {
    cy.visit(`${baseUrl}/${region.us}/signup.html`);
    cy.get(".bi.bi-info-circle.m-1.info-icon")
      .eq(0)
      .click();
    cy.get(".col-10 > h2")
      .eq(1)
      .should("have.text", content.signup.clinical_alert);
      cy.wait(3000);

    cy.get("button.close")
      .eq(1)
      .click();
    cy.get(".bi.bi-info-circle.m-1.info-icon")
      .eq(1)
      .click();
    cy.get(".col-10 > h2")
      .eq(2)
      .should("have.text", content.signup.Commercial_alert);
      cy.wait(3000);
    cy.get("button.close")
      .eq(2)
      .click();
  });
});
