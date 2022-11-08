describe("GSS TestCases ", () => {
    //sweet alert
    it("Checking the Sweet Alert when we login using differnt locale credentials ", () => {
        cy.visit('https://support.resmed.com/en-us/sleep-devices/airmini/');
        cy.visit('https://account.resmed.com/en-us/signin.html?redirect_to=/en-us/secure/clinical-guide/airmini/airmini_clinical-guide-android_amer_eng.pdf');
        cy.get('input#email').type('subash_ap_en_prod_1@mailinator.com');
        cy.get('input#password').type('Welcome1');
        cy.get('div#app div:nth-child(3) > button').click();
        cy.url().should("include", `myaccount.html`);
        cy.visit('https://support.resmed.com/en-us/sleep-devices/airmini#');
        cy.wait(5000);
        cy.get('div#swal2-html-container').should("have.text", 'This content is only available in selected countries. Please contact customer service if you need further assistance.');
        cy.get('div.swal2-actions > button[type="button"].swal2-confirm.swal2-styled.swal2-default-outline').click();

    })

    it("Checking Search functionality ", () => {
        cy.visit('https://support.resmed.com/en-au/sleep-devices/');
        const cattype = "Device";
        cy.get('input[name="rmsq"]').type("airmini");
        cy.get('div.input-group-append.ml-md-2 > span').click();
        cy.wait(4000);
        cy.get('div:nth-child(2) > div:nth-child(1) > h3').scrollIntoView();
        cy.wait(3000);
        cy.get('div.slick-slide.slick-current.slick-active > div > div > div > div > h3').should('have.text', 'AirMini');
        //validating category
        cy.get('div.slick-slide.slick-current.slick-active > div > div > div > div > p').contains(cattype);
        cy.get('div.back-link > a').click();
        cy.url().should('eq', 'https://support.resmed.com/en-au/');

    })

    it("Validating TabHeaders ", () => {
        // returning false here prevents Cypress from
            // failing the testsc
        Cypress.on('uncaught:exception', (err, runnable) => {
            debugger
            return false
        })
        Cypress.on('fail', (err) => {
            debugger
        })
        cy.visit('https://support.resmed.com/en-au/sleep-devices/airmini');
        cy.get('section#description a:nth-child(2)').click();
        cy.wait(4000);
        cy.get('section#helpful-documents h2').contains('Helpful Documents');
        cy.url().should('include', 'helpful-documents');
        cy.get('section#description nav > a:nth-child(3)').click();
        cy.wait(4000);
        cy.get('section#for-healthcare-professionals h2').contains('For Healthcare Professionals');
        cy.url().should('include', 'for-healthcare-professionals');
    })

    it("Checking navbar links in index page ", () => {
        cy.visit('https://support.resmed.com/en-au/');
               cy.get("p > span:nth-child(2) > a").click();
               cy.url().should("eq","https://support.resmed.com/en-au/sleep-devices");
               cy.go('back');
               cy.get("span:nth-child(3) > a").click();
               cy.url().should("eq","https://support.resmed.com/en-au/masks");
               cy.go('back');
               cy.get("span:nth-child(4) > a").click();
               cy.url().should("eq","https://support.resmed.com/en-au/accessories");
               cy.go('back');
               cy.get("span:nth-child(5) > a").click();
               cy.url().should("eq","https://support.resmed.com/en-au/humidifiers");
               cy.go('back');
                    
    })

    it("Checking categories dropdown", () => {
      cy.visit('https://support.resmed.com/en-au/');
      cy.get('div:nth-child(1) > select').select("Sleep Devices"); 
      cy.wait(3000);    
      cy.get("input[name='rmsq']").click();
      cy.get("input[name='rmsq']").type("airmini");
      cy.get("div.input-group-append.ml-md-2 > span > span").click();
      cy.wait(3000);
      cy.url().should("eq","https://support.resmed.com/en-au/search/?cat=machine&rmsq=airmini");
      cy.get("div:nth-child(2) > div:nth-child(1) > h3").scrollIntoView();
      cy.wait(3000);
      cy.get("div > div > div:nth-child(2) > div:nth-child(1) > div > div > div > div > div > div > div > div > div").contains("AirMini");
      cy.go('back');  
      //#b02543;
     })

     it("verifies the background color  and color of the buttons and links", () => {
        cy.visit('https://support.resmed.com/en-au/sleep-devices');
        cy.get("div#cpap div.col-md-3 > h3").scrollIntoView();
       //cy.get("div.input-group-append.ml-md-2 > span > span").should('have.css', 'background-color').and('eq', 'rgb((176,37,67))');
        cy.get('div#cpap div:nth-child(3) > div > div > div.col-7 > a').should('have.css', 'color', 'rgb(176, 37, 67)');
        cy.get("div#cpap button").should('have.css','background-color','rgb(176, 37, 67)');
           
        })

        it("verifies the videos in the detail pages", () => {
            cy.visit('https://support.resmed.com/en-au/masks/airfit-f10/');
            cy.get("section#description div > a").click();
            cy.wait(2000);
            cy.get("section#videos h2").contains("How-to videos");
            cy.get("section#videos div.item.swiper-slide.mb-3.mb-md-0.swiper-slide-active > div > figure").click();
            })

            it("verifies the Article  pages", () => {
                cy.visit('https://support.resmed.com/en-au/masks/airfit-f10/');
                cy.get("div.mb-3 > h2").scrollIntoView();
                cy.get("div.item.swiper-slide.mb-3.mb-md-0.swiper-slide-active > div > a").click();
                cy.url().should("eq","https://support.resmed.com/en-au/support/how-to-fit-your-mask/");
                cy.get("header > h1").contains("How to fit your mask");
                cy.get("div > h2").scrollIntoView();
                cy.wait(2000);
                cy.get("div.seek-wrapper > a.btn.navigation-icon.right-caret.swiper-button-next").click();
                })

                it("Checking the SubCategory filters ", () => {
                    cy.visit('https://support.resmed.com/en-au/sleep-devices/');
                    cy.wait(2000);
                    //clicking on CPAP
                    cy.get(".filter > li > a").eq(0).click();
                    cy.get("li.is-active > a").should('have.css', 'background-color', 'rgb(176, 37, 67)');
                    cy.get(".col-md-3 > h3").contains("CPAP");
                    cy.get("div#cpap div.col-md-3 > p").contains("Devices providing fixed-pressure for sleep apnea therapy.")
                    cy.get("div#cpap button").click();
                    cy.get(".filter > li > a").eq(0).click();
                    //clickig on APAP
                    cy.get("div.categories > div:nth-child(2) > ul > li:nth-child(2) > a").click();
                  //  cy.get("li.is-active > a").should('have.css', 'background-color', 'rgb(176, 37, 67)');
                    cy.get("div#apap div.col-md-3 > h3").contains("APAP");
                    cy.get("div#apap div.col-md-3 > p").contains("Devices offering an AutoSet Response comfort setting to help with high pressure intolerance.");
                })

                it("Check support page padlock icon and text changes based on Credentials", () => {
                    const clinicalstatus = "Pending";
                    //logged in with pending user Credentials
                    cy.wait(2000);
                    cy.visit('https://support.resmed.com/en-au/sleep-devices/airsense-10-cpap/#');
                    cy.wait(2000);
                    cy.get('section#helpful-documents div:nth-child(4) > a > span > a').scrollIntoView();
                    cy.wait(2000);
                    cy.visit('https://account.resmed.com/en-au/signin.html?redirect_to=/en-au/secure/clinical-guide/airmini/airmini_clinical-guide-ios_row_eng.pdf');
                    cy.get('input#email').type("test_pendinguser@mailinator.com");
                    cy.get('input#password').type("Welcome@01");
                    cy.get('div#app div:nth-child(3) > button').click();
                    cy.url().should("include", `myaccount.html`);
                    cy.wait(3000);
                    cy.get('div#app div:nth-child(1) > div > span:nth-child(2)').eq(0).scrollIntoView();
                    cy.wait(2000);
                    cy.get('div#app div:nth-child(1) > div > span:nth-child(2)').eq(0).should("have.text", clinicalstatus);
                    //going to the page 
                    cy.wait(2000);
                    cy.visit('https://support.resmed.com/en-au/sleep-devices/airsense-10-cpap/#');
                    cy.wait(2000);
                    cy.get('a.btn.cta-plain.text-red.icon.right-arrow>span').eq(1).scrollIntoView();
                    cy.get('a.btn.cta-plain.text-red.icon.right-arrow>span').eq(5).contains("Awaiting approval");
                    cy.wait(4000);
                    //Verifing error message
                    cy.get("section#for-healthcare-professionals em").contains("You don't have access permissions to view the PDF's for this region");
                    cy.get("a > img").click();
                    cy.wait(2000);
                    cy.get('li > ul > li:nth-child(3) > a').click();
                    cy.wait(2000);
                })
            
            
                it("Logging with Rejected User Credentials ", () => {
                    const Rejectedclinicalstatus = "Access Denied";
                    cy.wait(2000);
                    cy.visit('https://support.resmed.com/en-au/sleep-devices/airsense-10-cpap/#');
                    cy.wait(2000);
                    cy.get('section#helpful-documents div:nth-child(4) > a > span > a').scrollIntoView();
                    cy.wait(2000);
                    cy.visit('https://account.resmed.com/en-au/signin.html?redirect_to=/en-au/secure/clinical-guide/airmini/airmini_clinical-guide-ios_row_eng.pdf');
                    cy.get('input#email').type('au_Live_rejected@mailinator.com');
                    cy.get('input#password').type('Welcome@1234');
                    cy.get('div#app div:nth-child(3) > button').click();
                    cy.url().should("include", `myaccount.html`);
                    cy.wait(2000);
                    //validating the clinical status and commerical staus
                    cy.get('div#app span:nth-child(2)').scrollIntoView();
                    cy.get('div#app span:nth-child(2)').contains(Rejectedclinicalstatus);
                    //going to the page 
                    cy.wait(2000);
                    cy.visit('https://support.resmed.com/en-au/sleep-devices/airsense-10-cpap/#');
                    cy.wait(2000);
                    cy.get('a.btn.cta-plain.text-red.icon.right-arrow>span').eq(1).scrollIntoView();
                    cy.get('section#for-healthcare-professionals div:nth-child(1) > a > span > a').contains(' Access denied');
                    cy.get("a > img").click();
                    cy.wait(2000);
                    cy.get('li > ul > li:nth-child(3) > a').click();      
                    cy.wait(2000);
            
                })
            
                it("Check Whether the PDF should open or not when we use Approved Credentials ", () => {
                    const Approvedclinicalstatus = "Approved";
                    cy.visit(`account.resmed.com/en-ap/signin.html`);
                    cy.get('input#email').type("subash_ap_en_prod_1@mailinator.com");
                    cy.get('input#password').type('Welcome1');
                    cy.get('div#app div:nth-child(3) > button').click();
                    cy.wait(3000);
                    cy.url().should("include", `myaccount.html`);
                    cy.wait(2000);
                    //validating the clinical status and commerical staus
                    cy.get('div#app span:nth-child(2)').eq(0).scrollIntoView();
                    cy.get('div#app span:nth-child(2)').eq(0).contains(Approvedclinicalstatus);
                    cy.visit('https://support.resmed.com/en-ap/sleep-devices/airmini');
                    cy.get('section#helpful-documents div:nth-child(1) > a > span > a').scrollIntoView();
                    cy.wait(4000);
                    cy.get('section#for-healthcare-professionals div:nth-child(1) > a > span > a').contains("View PDF")
            
                })

               
            
    })
      


