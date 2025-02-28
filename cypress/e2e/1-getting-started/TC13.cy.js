/// <reference types="cypress" />



describe('Verify Subscription in Cart page', () => {
    beforeEach(() => {
    
      cy.visit('https://automationexercise.com');
    })
  
    it('Verify Product quantity in Cart', () => {

     
        cy.get("a[href='/product_details/6']").click()
 
        cy.xpath("//input[@id='quantity']").clear().type("4")
        cy.xpath("//button[normalize-space()='Add to cart']").click()
        cy.xpath("//u[normalize-space()='View Cart']").click()
        cy.xpath("//button[@class='disabled' and text()='4']").should('be.visible')
 
       
      
       
        

   


    });
  })

