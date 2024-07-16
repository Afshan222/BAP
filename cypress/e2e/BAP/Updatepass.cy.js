import Updatepassword from "../../pageObjectsClass/UpdatepasswordPom";

describe('Updatepass' , function(){
it('Updatepassword' , function(){
    cy.visit('https://staging:ec2-18-189-16-96.us-east-2@bapv4.staging.plastk.ca/'), { failOnStatusCode: false }
    cy.fixture('SignUp').then((SignUp) => {
        const email = SignUp.data.email
        const pswrd = SignUp.data.pass
        cy.get('#email').type(email)
        cy.get('#password').type(pswrd)
        cy.get('.Buttonstyles__StyledButton-sc-xg35he-2').click();
        const abc = new Updatepassword()
        abc.NAvigator();
        abc.Profile();
        abc.LoginSecure();
        abc.Updatepassword();
        abc.CP();
        abc.NP();
        abc.ConP();
        abc.Updte();
        abc.Bck();
        })
    })
})