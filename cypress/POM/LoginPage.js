class LoginPage {
    continueShoppingBtn = '.btn_secondary';
    checkoutBtn = '.btn_action.checkout_button';
    EmailInputField = "input[data-qa='login-email";
    PassInputField= "//input[@placeholder='Password']";

    visit() {
        cy.visit('https://automationexercise.com/login');
      }
    
      fillEmail(value) {
        cy.get(this.EmailInputField).type(value);
      }
    
      fillPassword(value) {
        cy.xpath(this.PassInputField).type(value);
      }
    
      submit() {
        cy.xpath("//button[normalize-space()='Login']").click()
      }
}
export default LoginPage;