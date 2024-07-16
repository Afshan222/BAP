import store from "../../pageObjectsClass/StoresPom"

describe('Store' , function(){
    it('Stores', function(){
        cy.visit('https://staging:ec2-18-189-16-96.us-east-2@bapv4.staging.plastk.ca/'), { failOnStatusCode: false }
        cy.fixture('SignUp').then((SignUp) => {
        const email = SignUp.data.email
        const password = SignUp.data.pass
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('.Buttonstyles__StyledButton-sc-xg35he-2').click();
        const str = new store()   
            str.Navigator();
          /*  str.ClickStores();
            cy.wait(6000);
            str.SN();
            str.Strtype();
            str.CAt();
            str.SubCat();
            cy.wait(3000);
            str.Contactperson();
            str.ContactNumber();
            str.SA();
            str.setUploadlogo();
            cy.wait(3000);
            str.setUploadBanner();
            cy.wait(3000);
            str.clickcreate();*/
            cy.wait(6000);
            str.Testfilter();
            str.SelectOptions();
            str.Search();
            str.Reset();

      })
    }) 
})

