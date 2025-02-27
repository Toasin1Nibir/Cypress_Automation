/// <reference types="cypress" />

import 'cypress-file-upload';

describe('Test case 06', () => {
    // beforeEach(() => {
    
    //   cy.visit('https://automationexercise.com/');
    // })
  
    it('displays two todo items by default', () => {
    // cy.get("img[alt='Website for automation practice']").should('be.visible')

    cy.visit('https://automationexercise.com/');
     cy.get("a[href='/contact_us']").click()
     cy.xpath("//input[@placeholder='Name']").type("Toa")
     cy.xpath("//input[@placeholder='Email']").type("Toa@gmail.com")
     cy.xpath("//input[@placeholder='Subject']").type("Toa")

     const fileName = 'Test.txt';
   
     cy.get("input[name='upload_file']").attachFile(fileName);
     cy.xpath("//input[@name='submit']").click()
     //input[@name='submit']
     
    });
  })


  