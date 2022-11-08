import { dev, language, content } from "../../Variables";
const { baseUrl, region, account } = dev;

describe("Roc OKTA test cases", () => {
 
    //unable to change the password for the ResMed Internal Employees
  it("Check ResMed Employees can change their password or not", () => {
    cy.visit(`${baseUrl}/en-us/resetpassword.html`);
    cy.get("div#app h2").should("have.text", content.resetpassword.resetpwdpagetitle);
    cy.get('input#email').type(content.resetpassword.resetemail);
    cy.get("div#app form > div:nth-child(1) > div").should("have.text", content.resetpassword.resetssoerror);
    cy.wait(3000);
    cy.screenshot();
  });

  //checking whether the Technical Content and its tooltip is available or not under Sunscriptions
  it("Checking for the TechnicalContent in Signup page", () => {
    cy.visit(`${baseUrl}/en-au/signup.html`);
    cy.wait(2000);
    cy.get("div#app div:nth-child(6) > label > span").should("have.text", content.signup.technicaltext);
    cy.get(".bi.bi-info-circle.m-1.info-icon")
      .eq(2)
      .click();
    cy.get("div#app div:nth-child(7) > div.vfm__container.vfm--absolute.vfm--inset.vfm--outline-none > div > div > div > content > div > div > div.col-10 > h2").should("have.text", content.signup.technicaltitle);
    cy.get("div#app div:nth-child(7) > div.vfm__container.vfm--absolute.vfm--inset.vfm--outline-none > div > div > div > div > p:nth-child(3)").should("have.text", content.signup.technicaldesc),
    cy.wait(3000);
    cy.get('div#app div:nth-child(7) > div.vfm__container.vfm--absolute.vfm--inset.vfm--outline-none > div > div > div > content > div > div > div.col-2.text-right > button[type="button"] > span').click();
  });

  it("Checking for the TechnicalSubscription alert when we click on Approve button", () => {
    cy.visit(`${baseUrl}/en-us/signin.html`);
    cy.get("input#email").type(account.signin_login.mail);
    cy.get("input#password").type(account.signin_login.pwd);
    cy.get("button.vue-btn.btn.res-spin-btn.my-2").click();
    cy.wait(4000);
    cy.url().should("include", `${baseUrl}/en-us/myaccount.html`);
    cy.get("div#app div.approvals.col-12.col-lg-8.col-md-10.m-auto > div.row > div.col-md-4 > button").click();
    // cy.get("div#app th.el-table_4_column_26.is-leaf.is-sortable > div > span > i.sort-caret.descending").click();
    cy.get(".sort-caret.descending")
    .eq(4)
    .click();
    cy.get("button.btn.btn-outline-primary.mr-2.px-4.approve")
    .eq(1)
    .click();
    cy.wait(5000);
    cy.get("div#popup-approve strong").should("have.text",content.manageuser.Technicaltitle);
    cy.get("input#inlineCheckbox1").eq(0).check();
    cy.get('div#popup-approve button[type="button"].btn.btn-primary.px-4.popup-btns.mr-2.btn-text').click();
    cy.wait(5000);
    cy.get('div#success-status > div').should("have.text",content.manageuser.Technicalapprovealert);
  });

  it("Checking the Delete account Feature for the external users", () => {
    cy.visit(`${baseUrl}/en-us/signin.html`);
    cy.get("input#email").type(content.deleteaccount.delete_signin_email);
    cy.get("input#password").type(content.deleteaccount.delete_signin_pwd);
    cy.get("button.vue-btn.btn.res-spin-btn.my-2").click();
    cy.wait(4000);
    cy.url().should("include", `${baseUrl}/en-us/myaccount.html`);
    cy.get("div#app div:nth-child(6) > div.content-title").should("have.text",content.deleteaccount.deleteTitle);
    cy.get("div#app div:nth-child(6) > div.row > div.col-md-4 > button").click();
    cy.get("div#popup-approve strong").should("have.text",content.deleteaccount.deletealerttitle);
    cy.get("input.form-control").clear();
    cy.get("input.form-control").type("Delete");
     cy.get("button.btn.btn-primary.px-4.popup-btns.mr-2.btn-text.disablecolor").click();
     cy.wait(2000);
     cy.url().should("include", `${baseUrl}/en-us/signin.html`);
     cy.get("input#email").type(content.deleteaccount.delete_signin_email);
     cy.get("input#password").type(content.deleteaccount.delete_signin_pwd);
     cy.get("button.vue-btn.btn.res-spin-btn.my-2").click();
     cy.get("div#app div:nth-child(3) > p").should("have.text",content.deleteaccount.delete_signin_alert);
  });
  
  it("Checking for the myaccount page status when logged in with all the 3 sub categories(Tech) approved Credentials",() =>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      debugger
      return false
  })
  Cypress.on('fail', (err) => {
      debugger
  })
  cy.visit('https://account.resmed.com/en-us/signin.html');
  cy.get('input#email').type('tsp_prod_approved@mailinator.com');
  cy.get('input#password').type('Welcome1');
  cy.get('div#app div:nth-child(3) > button').click();
  cy.url().should("include", `myaccount.html`);
  cy.scrollTo(0,800);
  cy.wait(5000);
  cy.get("div#app div:nth-child(3) > div > span:nth-child(2)").contains("Approved");
  cy.screenshot();
  });

  
  
  
});
