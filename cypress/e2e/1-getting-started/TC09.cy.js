/// <reference types="cypress" />



describe('Search Product', () => {
    beforeEach(() => {
    
      cy.visit('https://automationexercise.com');
    })
  
    it('Verify All Products and product detail page', () => {
   //     cy.get("img[alt='Website for automation practice']").should('be.visible')
      //  cy.get("a[href='/products']").click()
      //  cy.xpath("//a[@href='/products']").click()
        
      cy.xpath("//a[@href='/products']").click()
        cy.xpath("//input[@id='search_product']").type("Winter Top")
        cy.xpath("//i[@class='fa fa-search']").click()
        cy.xpath("//div[@class='overlay-content']//p[contains(text(),'Winter Top')]").scrollIntoView().should('be.visible')

    });
  })


  