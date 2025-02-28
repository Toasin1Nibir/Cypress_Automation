/// <reference types="cypress" />



describe('example to-do app', () => {
    const registrationAddress = {
        name : 'Mr. Test01 Test02',
        city: 'Australia',
        zip: '0155'
      };
    beforeEach(() => {
     
      cy.visit('https://automationexercise.com/');
    })
  
    it('Verify address details in checkout page', () => {
      const timestamp = new Date().getTime();
      const email = `Test_${timestamp}@gmail.com`;


      cy.get("a[href='/login']").click()
      // cy.xpath("//a[normalize-space()='Signup / Login']").click()

      cy.xpath("//h2[normalize-space()='New User Signup!']").should('be.visible')
  
      cy.xpath("//input[@placeholder='Name']").type('Test')
      cy.xpath("//input[@data-qa='signup-email']").type(email)
      cy.get("button[data-qa='signup-button']").click()
     

      cy.get("#id_gender1").click()
      cy.xpath("//input[@id='name']").type('Test')
      cy.xpath("//input[@id='password']").type('Test107')

      cy.get('#days') // Use the correct selector for your dropdown
      .select(1); // Selects the first option by index

      cy.get('#months') // Use the correct selector for your dropdown
      .select(1); // Selects the first option by index

      cy.get('#years') // Use the correct selector for your dropdown
      .select(1); // Selects the first option by index
      

      cy.xpath("//input[@id='newsletter']").click()
      cy.xpath("//input[@id='optin']").click()
  
      
      cy.xpath("//input[@id='first_name']").type('TT')
      cy.xpath("//input[@id='last_name']").type('TT')
      cy.get("#address1").type("Company")

    

      
      cy.get('#country') // Use the correct selector for your dropdown
      .select(3); // Selects the first option by index
      
      cy.xpath("//input[@id='state']").type('State of law')
      cy.xpath("//input[@id='city']").type('dhaka')
      
      cy.get("#zipcode").type('0011-11')
      cy.get("#mobile_number").type('12345')
      cy.get("button[data-qa='create-account']").click()
      cy.xpath("//a[@data-qa='continue-button']").click();
      
      cy.xpath("//p[contains(text(),'Blue Top')]").first()
      .trigger('mouseover');
      cy.xpath("//div[@class='features_items']//div[2]//div[1]//div[1]//div[2]//div[1]//a[1]").click({ force: true });
      cy.xpath("//u[normalize-space()='View Cart']").click()
      cy.xpath("//a[normalize-space()='Proceed To Checkout']").click()
      
     // cy.xpath("ul[id='address_delivery'] li[class='address_phone']").should('have.text', registrationAddress.zip);

      cy.get("ul[id='address_delivery'] li[class='address_phone']").invoke('text').then((text1) => {
        // Capture text from the second field
        cy.get("ul[id='address_invoice'] li[class='address_phone']").invoke('text').then((text2) => {
          // Compare the two values
          expect(text1.trim()).to.equal(text2.trim());
        });
      });




    //   cy.get("h2[class='title text-center'] b") 
    //   .should('be.visible');
    //   cy.get(".btn.btn-primary").click()
    //   cy.get("a[href='/delete_account']").click()

    //   cy.get("h2[class='title text-center'] b") 
    //   .should('be.visible');
    //   cy.get(".btn.btn-primary").click()

      

   

    });
  })


  