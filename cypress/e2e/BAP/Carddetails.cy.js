import CardDetails from "../../pageObjectsClass/CardDeatilPom";

describe('CardDetails', function () {
    it('Prepaid', function () {
        cy.visit('https://staging:ec2-18-189-16-96.us-east-2@bapv4.staging.plastk.ca/'), { failOnStatusCode: false }
        cy.fixture('SignUp').then((SignUp) => {
            const email = SignUp.data.email;
            const password = SignUp.data.pass;
            cy.get('#email').type(email);
            cy.get('#password').type(password);
            cy.get('.Buttonstyles__StyledButton-sc-xg35he-2').click();
            const pre = new CardDetails()
            cy.wait(3000);
            pre.SetCN("4444-5555-1111-3333")
            pre.SetCHN("Afshan Imtiaz")
            pre.SetED();
            pre.SetCVC("123");
            pre.SetAmount();
            pre.SetCP();
            pre.ClickCont();

        })
    })
})
