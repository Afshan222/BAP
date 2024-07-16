import StoreGroup from "../../pageObjectsClass/StoregroupsPOM"

describe('Group' , function(){
    it('StoreGroup', function(){
        cy.visit('https://staging:ec2-18-189-16-96.us-east-2@bapv4.staging.plastk.ca/'), { failOnStatusCode: false }
        cy.fixture('SignUp').then((SignUp) => {
        const email = SignUp.data.email
        const password = SignUp.data.pass
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('.Buttonstyles__StyledButton-sc-xg35he-2').click();
        const Sgroup = new StoreGroup()   
        Sgroup.NAvigator();
        Sgroup.AddStoreGroupbutton();
        Sgroup.GName();
        Sgroup.SDropdown();
        Sgroup.Click();
        Sgroup.Submit();
        cy.wait(3000);
        Sgroup.Selectoptions();
    })
  })
})

