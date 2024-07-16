import EditBusiness from "../../pageObjectsClass/EditBusinessProfilePom"

describe('EditBusiness' , function(){
    it('EditBusiness' , function(){
        cy.visit('https://staging:ec2-18-189-16-96.us-east-2@bapv4.staging.plastk.ca/'), { failOnStatusCode: false }
        cy.fixture('SignUp').then((SignUp) => {
            const email = SignUp.data.email
            const password = SignUp.data.pass
            cy.get('#email').type(email)
            cy.get('#password').type(password)
            cy.get('.Buttonstyles__StyledButton-sc-xg35he-2').click();
            const Ebusi = new EditBusiness()
            Ebusi.BusName();
            Ebusi.Cntctper();
            Ebusi.bcntctnumb();
            Ebusi.Pcntctnumb();
            Ebusi.Gst();
            Ebusi.baddress();
          //  Ebusi.Upldlogo();
          //  Ebusi.Upldbanner();
            Ebusi.clickUpdate();
        })
    }) 
})
