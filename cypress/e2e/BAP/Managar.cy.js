import managar from "../../pageObjectsClass/managarPOM"

describe('Managar' , function(){
    it('AddMAnagar', function(){
        cy.visit('https://staging:ec2-18-189-16-96.us-east-2@bapv4.staging.plastk.ca/'), {failOnStatusCode: false}
        cy.fixture('SignUp').then((SignUp) => {
        const email = SignUp.data.email
        const password = SignUp.data.pass
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('.Buttonstyles__StyledButton-sc-xg35he-2').click();
        const man = new managar() 
        cy.wait(6000);
        man.NAvigator();
        man.Managarbutton();
        man.FirstName();
        man.MiddleName();
        man.LastName();
        man.SelectEmail();
        man.SelectStore();
        man.PermissionLevel();
        man.Password();
        man.ConfirmPassword();
        man.click();
        //man.Cancel();
        man.Continue();
        })
    })
})

