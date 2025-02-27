/// <reference types="cypress" />



describe('Test case 08', () => {
    beforeEach(() => {
    
      cy.visit('https://mealkun.bjitgroup.com/auth/login');
    })
  
    it('Verify All Products and product detail page', () => {
    cy.get("input[placeholder='ユーザーIDを入力してください']").type("GCC-SUP")
    cy.get("input[placeholder='パスワード']").type("Bj1t@1234")
    cy.get(".ant-btn.offline-login__primery-button.ant-btn-primary").click()

    cy.xpath("//a[@href='/app/super-admin']//ng-icon//*[name()='svg']").click()
    cy.xpath("//button[contains(text(),'見積区分設定')]").click()
    cy.xpath("//nz-select-item[@title='QA Super user']").click()
    cy.get("nz-option-item[title='Toasin'] div[class='ant-select-item-option-content']").click()


    
    
    //span[contains(text(),'行追加')]
    //#classification-input-1
   
    });
  })


  