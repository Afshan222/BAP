import StoreVerify from "../../pageObjectsClass/StoreVerifyPom"

describe('Store' , function(){
    it('StoreVerify', function(){
        cy.visit('https://staging:ec2-18-189-16-96.us-east-2@bapv4.staging.plastk.ca/'), { failOnStatusCode: false }
        cy.fixture('SignUp').then((SignUp) => {
        const email = SignUp.data.email
        const password = SignUp.data.pass
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('.Buttonstyles__StyledButton-sc-xg35he-2').click();
        const store = new StoreVerify()
        store.clickStore();
        cy.wait(6000);
        store.clickVerify();
        store.clicktransaction('000000');
        store.Codeverifybutton();
        cy.wait(6000);
        store.clickbutton();
        
        })
    })
})