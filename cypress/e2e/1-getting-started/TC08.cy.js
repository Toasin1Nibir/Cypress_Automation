/// <reference types="cypress" />



describe('Test case 08', () => {
    beforeEach(() => {
    
      cy.visit('https://automationexercise.com/');
    })
  
    it('Verify All Products and product detail page', () => {
   //     cy.get("img[alt='Website for automation practice']").should('be.visible')
        cy.get("a[href='/brand_products/H&M']").click()
        cy.get(" a[href='/product_details/2']").click()

        cy.get("div[class='product-information'] h2").should('be.visible')
        cy.xpath("//h2[normalize-space()='Men Tshirt']").should('be.visible')
        cy.xpath("//p[normalize-space()='Category: Men > Tshirts']").should('be.visible')
      //  cy.get("body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > p:nth-child(3)").should('be.visible')
     //   cy.get("body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > p:nth-child(6) > b:nth-child(1)").should('be.visible')
        
       
    });
  })


  