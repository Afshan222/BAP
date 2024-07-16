import {generateRandomEmail} from '../e2e/fakerUtils';

class SignUp
{   
    clickSignup()
    {
        cy.get("#signUpLink").click()
    }
    GenerateEmail()
    {   
        const patternemail = generateRandomEmail();
       // cy.get("input[id='email']").type(patternemail);
        return patternemail;
    }
    setcreatepassword(CreatePassword)
    {
        //cy.get("input[id='password']").type(CreatePassword)
        return CreatePassword;
    }
    setconfirmpassword(ConfirmPassword)
    {
        cy.get("input[id='confirmpassword']").type(ConfirmPassword)
    }
    equal()
    {
       cy.get("input[id='confirmpassword']").should('have.value', 'Afshan@123')
    }
    comparePasswordAndConfirmPassword() 
    {
        cy.get("input[id='password']").invoke('val').then((passwordValue)=>{
            cy.get("input[id='confirmpassword']").invoke('val').then((confirmPasswordValue)=>{
                expect(passwordValue).to.equal(confirmPasswordValue);
            })
        })
    }
    getTOTP(email, password) {
     return cy.request({
          method: 'POST',
          url: 'https://staging.service.plastk.ca/bpuser/sign-up ',
          body: {
                "email": email,
                "password": password
          },
        }).then((response) => {
            const responseBody = response.body;
            const totp = responseBody.data.totp;
            return totp;
            
        });
      }
    clickcreateaccount()
    {
        cy.get('[type="submit"]').click()
    }
}
export default SignUp;