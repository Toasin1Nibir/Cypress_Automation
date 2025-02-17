/// <reference types="cypress" />



describe('Test case 02', () => {
    beforeEach(() => {
    
      cy.visit('https://automationexercise.com/');
    })
  
    it('displays two todo items by default', () => {
     cy.get("img[alt='Website for automation practice']").should('be.visible')
     cy.get("a[href='/login']").click()
     cy.get("div[class='login-form'] h2").should('be.visible')
     cy.get("input[data-qa='login-email']").type("Test_10@gmail.com")
     cy.xpath("//input[@placeholder='Password']").type("Test");

     cy.xpath("//button[normalize-space()='Login']").click()
  
      cy.get("li:nth-child(10) a:nth-child(1)").should('be.visible')


    });
  })


  