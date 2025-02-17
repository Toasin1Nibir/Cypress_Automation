/// <reference types="cypress" />
import LoginPage from "../../POM/LoginPage";


// describe('Test case 02', () => {
//     // beforeEach(() => {
    
//     //   cy.visit('https://automationexercise.com/login');
//     // })
  
//     it('displays two todo items by default', () => {
//     //  cy.get("img[alt='Website for automation practice']").should('be.visible')
//     //  cy.get("a[href='/login']").click()
//     //  cy.get("div[class='login-form'] h2").should('be.visible')
//     //  cy.get("input[data-qa='login-email']").type("Testvv_10@gmail.com")
//     //  cy.xpath("//input[@placeholder='Password']").type("vvTest");

//     //  cy.xpath("//button[normalize-space()='Login']").click()
  
//     // cy.xpath("//p[normalize-space()='Your email or password is incorrect!']").should('be.visible')

//     const login = new LoginPage();
//     login.visit();
//     login.fillEmail("ABC@Wgmail.com");
//     login.fillPassword("ABC");
//     login.submit();

//     });
  //})


  describe('Login Test', () => {
    before(() => {
      cy.fixture('LoginData.json').as('LoginData');
     
    });

  
    it('should fail to log in with incorrect credentials', function() {
      const login = new LoginPage();
  
      this.LoginData.forEach(LoginData => {
        login.visit();
        login.fillEmail(LoginData.email);
        login.fillPassword(LoginData.password);
        login.submit();
        
        // Add assertions for negative testing
        cy.url().then(url => {
            const currentUrl = url
            if (currentUrl === "https://automationexercise.com/login") {
              cy.log('LogIn failed');
             // lp.verifyLogin();
            }
            else {
              cy.log('LogIn Pass');
           //   lp.verifyLoginErrorMsg();
            }
          });

      });
    });


    // it('should success to log in with correct credentials', function() {
    //     const login = new LoginPage();
    
    //     this.LoginData.forEach(LoginData => {
    //       login.visit();
    //       login.fillEmail(LoginData.email);
    //       login.fillPassword(LoginData.password);
    //       login.submit();
    
    //       // Add assertions for negative testing
    //       cy.get("img[alt='Website for automation practice']").should('be.visible'); // Adjust this according to your app's response
    //     });
    //   });
  


  });