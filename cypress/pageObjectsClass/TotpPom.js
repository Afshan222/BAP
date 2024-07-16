class Totp {
    Digital1 = 'input[aria-label="Please enter verification code. Digit 1"]'
    Digital2= 'input[aria-label="Digit 2"]'
    Digital3 = 'input[aria-label="Digit 3"]'
    Digital4 = 'input[aria-label="Digit 4"]'
    Click = ".EmailVerificationstyles__BtnHolder-sc-102a02e-1 > .Buttonstyles__StyledButton-sc-xg35he-2"

    SetTotp(totp) {
        // Assuming the totp value is stored in a variable called "totp"
        const digits = totp.split('');

        // Use cy.get() to target the input fields where you want to enter the digits
        cy.get(this.Digital1).type(digits[0]);
        cy.get(this.Digital2).type(digits[1]);
        cy.get(this.Digital3).type(digits[2]);
        cy.get(this.Digital4).type(digits[3]);
    }
    submit() {
        cy.get(this.Click).click();
    }
}
export default Totp;