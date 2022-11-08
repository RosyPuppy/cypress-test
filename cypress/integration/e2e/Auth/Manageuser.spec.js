import { dev, content } from "../../Variables";
const { baseUrl, account, region } = dev;

describe("Auth test", () => {
  it("Should open manage use access page", () => {
    cy.visit(`${baseUrl}/${region.au}/signin.html`);
    //For admin purpose we are using below credentials
    cy.get("input#email").type(account.manageuser.mail);
    cy.get("input#password").type(account.manageuser.pwd);
    cy.get("button.vue-btn.btn.res-spin-btn.my-2").click();
    cy.url().should("include", `${baseUrl}/${region.au}/myaccount.html`);
    cy.get(".btn.btn-primary.approvals-edit.mb-2").click();
    cy.url().should("include", `${baseUrl}/${region.au}/editapprovals.html`);
    cy.get("h4.text-center").should(
      "have.text",
      content.manageuser.default_text
    );
  });
  it("it should reject and approve user", () => {
    cy.get(".sort-caret.descending")
    .eq(1)
    .click();
    cy.get("input.form-control")
      .clear()
      .type(content.manageuser.search_text);
    cy.wait(4000);
    cy.get("button.btn.btn-outline-danger.px-4.reject")
      .eq(1)
      .click();
    cy.get("div#app div.col-10 > h4").should(
      "have.text",
      content.manageuser.reject_popup_text
    );
    cy.wait(4000);
    cy.get("select.form-select").select(content.manageuser.reject_popup_select);
    cy.get("div#app textarea")
      .click()
      .type(content.manageuser.reject_popup_textarea);
    cy.get("input#flexCheckDefault").check();
    cy.get(
      "div#app div.d-flex.align-items-center.justify-content-between.m-3 > button:nth-child(2)"
    ).click();

    cy.wait(4000);
    cy.get("select#userslist").select(
      content.manageuser.reject_dropdown_select
    );
    cy.wait(4000);
    cy.get("div#app form > div > input")
      .clear()
      .type(content.manageuser.rejected_mail);
    cy.wait(4000);
    cy.get("div#app div.col-md-3.info-grey > p").should("have.length", 1);

    cy.get("select#userslist").select(
      content.manageuser.pending_dropdown_select
    );
    cy.wait(4000);

    cy.get("button.btn.btn-outline-primary.mr-2.px-4.approve")
      .eq(1)
      .click();
    cy.wait(4000);
    cy.get("select#userslist").select(
      content.manageuser.approved_dropdown_select
    );

    cy.get("div#app form > div > input").type(content.manageuser.approved_mail);
    cy.get("div#app div.col-md-3.info-grey > p").should("have.length", 1);
  });

  it("should check already rejected user icon", () => {
    cy.wait(4000);

    cy.get(".table-name > span > i.fa.fa-ban")
      .should("have.css", "color", "rgb(255, 0, 0)")
      .eq(0)
      .click();
    cy.get(".col-10 > h4")
      .eq(1)
      .should("have.text", content.manageuser.prev_rejected_popupmsg);
    cy.get("button.close")
      .eq(1)
      .click();
  });
  it("should validate ascending and descending", () => {
    cy.get(".sort-caret.ascending")
      .eq(5)
      .click();
    cy.get(".sort-caret.descending")
      .eq(5)
      .click();
  });


  // it.only("should check bulk approve and reject", () => {
  //   cy.visit(`${baseUrl}/${region.au}/signin.html`);
  //   cy.get("input#email").type(account.manageuser.mail);
  //   cy.get("input#password").type(account.manageuser.pwd);
  //   cy.get("button.vue-btn.btn.res-spin-btn.my-2").click();
  //   cy.url().should(
  //     "include",
  //     `${baseUrl}/${region.au}/myaccount.html`
  //   );
  //   cy.get(".btn.btn-primary.approvals-edit.mb-2").click();
  //   cy.wait(4000);
  //   cy.url().should(
  //     "include",
  //     `${baseUrl}/${region.au}/editapprovals.html`
  //   );
  //   cy.wait(4000);
  //   cy.get(".el-switch__action").click();
  //   Cypress.on("uncaught:exception", (err, runnable) => {
  //     return false;
  //   });
  //   cy.wait(4000);
  //   cy.get(".el-checkbox__input")
  //     .eq(1)
  //     .click();
  //   cy.get(".el-checkbox__input")
  //     .eq(2)
  //     .click();
  //   cy.get(".el-checkbox__input")
  //     .eq(3)
  //     .click();
  //   cy.get(".el-checkbox__input")
  //     .eq(4)
  //     .click();
  //   cy.get("button.btn.btn-outline-danger.px-4.reject").click();
  //   cy.get("div#app div.col-10 > h4").should(
  //     "have.text",
  //     content.manageuser.reject_popup_text
  //   );
  //   cy.wait(4000);
  //   cy.get("select.form-select").select(content.manageuser.reject_popup_select);
  //   cy.get("div#app textarea")
  //     .click()
  //     .type(content.manageuser.reject_popup_textarea);
  //   cy.get("input#flexCheckDefault").check();
  //   cy.get(
  //     "div#app div.d-flex.align-items-center.justify-content-between.m-3 > button:nth-child(2)"
  //   ).click();
  //   cy.get(".el-checkbox__input")
  //     .eq(1)
  //     .click();
  //   cy.get(".el-checkbox__input")
  //     .eq(2)
  //     .click();
  //   cy.get("button.btn.btn-outline-primary.mr-2.px-4.approve").click();
  // });
});
