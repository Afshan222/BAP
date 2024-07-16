/// <reference types= "cypress"/>
import SignUp from "../../pageObjectsClass/SignUpPagePom";
// import { generateRandomEmail } from "../fakerUtils";


describe('POM', function () {
    it.only('BAP', function () {
        //cy.visit('https://staging:ec2-18-189-16-96.us-east-2@bapv4.staging.plastk.ca/'), { failOnStatusCode: false }

        const Sup = new SignUp()
        //Sup.clickSignup();
        const email = Sup.GenerateEmail();
        const pass = Sup.setcreatepassword("Afshan@123");
        //Sup.setconfirmpassword("Afshan@123")
       // cy.wait(3000);
        //Sup.equal();
        //Sup.comparePasswordAndConfirmPassword();
        //Sup.clickcreateaccount();
        //cy.wait(3000);
        //cy.writeFile('cypress/fixtures/SignUp.json', { email, pass}) //save only email and password
        Sup.getTOTP(email , pass ).then((totp) => {
            const data = { email, pass, totp };
            //const totp = Sup.getTOTP (fakeEmail,fakePassword);
            cy.writeFile('cypress/fixtures/SignUp.json', {data})
        });
    });
});

 