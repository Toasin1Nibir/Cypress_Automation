/// <reference types="cypress" />



describe('Verify Subscription in Cart page', () => {
    beforeEach(() => {
    
      cy.visit('https://automationexercise.com');
    })
  
    it('Verify All Products and product detail page', () => {

        cy.xpath("//p[contains(text(),'Blue Top')]").first()
       .trigger('mouseover');
         cy.xpath("//div[@class='features_items']//div[2]//div[1]//div[1]//div[2]//div[1]//a[1]").click({ force: true });
         cy.xpath("//u[normalize-space()='View Cart']").click()
         cy.xpath("//h2[normalize-space()='Subscription']").should('be.visible')
         cy.xpath("//input[@id='susbscribe_email']").type("Test@gmail.com")
         cy.xpath("//i[@class='fa fa-arrow-circle-o-right']").click()
         


         cy.xpath("//div[@class='alert-success alert' and contains(text(),'You have been successfully subscribed!')]")
         .should('be.visible');
        

   


    });
  })

