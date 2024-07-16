import Totp from "../../pageObjectsClass/TotpPom"

const varq = new Totp()

describe('POM', function(){
    
it.only('write email and password ' , function() {
    cy.visit ('https://staging:ec2-18-189-16-96.us-east-2@bapv4.staging.plastk.ca/'), {failOnStatusCode: false}
    cy.fixture('SignUp').then((SignUp) => {
      const email = SignUp.data.email; 
      const password = SignUp.data.pass; 
      const tp = SignUp.data.totp;
      cy.get('#email').type(email);
      cy.get('#password').type(password);
      cy.get('.Buttonstyles__StyledButton-sc-xg35he-2').click();
      varq.SetTotp(tp);
      cy.wait(3000);
      varq.submit();
      cy.wait(3000);
    })
})
})
