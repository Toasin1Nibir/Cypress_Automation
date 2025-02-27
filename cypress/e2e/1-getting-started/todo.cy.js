/// <reference types="cypress" />



      describe('example to-do app', () => {
        beforeEach(() => {
          // Cypress starts out with a blank slate for each test
          // so we must tell it to visit our website with the `cy.visit()` command.
          // Since we want to visit the same URL at the start of all our tests,
          // we include it in our beforeEach function so that it runs before each test
          cy.visit('https://automationexercise.com/');
        })
      
        it('displays two todo items by default', () => {
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
         

          cy.get("h2[class='title text-center'] b") 
          .should('be.visible');
          cy.get(".btn.btn-primary").click()
          cy.get("a[href='/delete_account']").click()

          cy.get("h2[class='title text-center'] b") 
          .should('be.visible');
          cy.get(".btn.btn-primary").click()

          

       

        });
      })


      