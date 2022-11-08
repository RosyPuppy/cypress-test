import { dev, content } from "../../Variables";
const { baseUrl, account, region } = dev;

describe("Auth test", () => {
  //change password page
  it("checking old and new passwords", () => {
    cy.visit(`${baseUrl}/${region.au}/signin.html`);
    cy.get("input#email").type(account.changepwd.mail);
    cy.get("input#password").type(account.changepwd.pwd);
    cy.get("button.vue-btn.btn.res-spin-btn.my-2").click();
    cy.wait(4000);
    cy.url().should("include", `${baseUrl}/${region.au}/myaccount.html`);
    cy.visit(`${baseUrl}/${region.au}/myaccount.html`);
    cy.wait(4000);
    cy.get(".btn.btn-primary.btn-text-color.myresmedpwd-edit").click();
    cy.url().should("include", `${baseUrl}/${region.au}/changepassword.html`);
    cy.get("input#oldpassword").type(content.changepwd.same_old_new_pwd);
    cy.get("input#password").type(content.changepwd.same_old_new_pwd);
    cy.get(".invalid-feedback").should(
      "have.text",
      content.changepwd.same_pwd_msg
    );
    // checking password criteria

    cy.get("input#oldpassword")
      .clear()
      .type(content.changepwd.same_old_new_pwd    
        );
    cy.get("input#password")
      .clear()
      .type(content.changepwd.criteria_pwd);
    cy.wait(4000);

    cy.get("div.error_show > p")
      .eq(0)
      .should("have.text", content.changepwd.criteria_pwd_msg);
  //changing pwd successfully
    cy.get("input#oldpassword")
      .clear()
      .type(content.changepwd.same_old_new_pwd);
    cy.get("input#password")
      .clear()
      .type(content.changepwd.changepwd_newpwd);
    cy.get("div#app div:nth-child(3) > button").click();
    cy.wait(4000);
    // cy.get("a.nav-link.links.res-link-primary.p-0")
    // cy.get("div#app div:nth-child(4) > div > div > a")
    //   .contains("Back to account")
    //   .click();
    cy.url().should("include", `${baseUrl}/${region.au}/signin.html`);
  });
});

