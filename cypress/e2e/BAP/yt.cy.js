describe('Store' , function(){
    it('Stores', function(){
        cy.visit('https://webevis.com/'), { failOnStatusCode: false }
        cy.wait(3000)
        cy.get('.btn>.Buttonstyles__PrimaryButton-sc-1nw82x4-1').click()
        cy.get('a[href="/terms-conditions"]').eq(0).click();
        cy.go('back')
    })
})