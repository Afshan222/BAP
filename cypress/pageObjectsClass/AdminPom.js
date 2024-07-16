class Admin{
    AEmail=  "input[id='email']"
    Apass=  "input[id='password']"
    Atoken= "input[id='token']"
    ASignin= "[type='submit']"
    businessprofile= '#sidenavlink-37 > .icon'
    Search = '#searchText'
    clickthreedots ='#menu-button--menu--51'
    updateStatus = '#option-1--menu--51'
    SearchApp = 'form > .helpersstyles__StyledFormGroup-sc-13a4541-1 > .Fieldstyles__InputHolder-sc-d93502-1 > .Selectstyles__StyledSelect-sc-1v10dro-0 > .react-select__control > .react-select__value-container'
    Approve = '#react-select-7-option-0'
    Prepaid ='#react-select-8-option-0'
    Clienttype = 'form > :nth-child(2) > .Fieldstyles__InputHolder-sc-d93502-1 > .Selectstyles__StyledSelect-sc-1v10dro-0 > .react-select__control > .react-select__value-container'
    Submit = 'form > .Buttonstyles__StyledButton-sc-porzid-2'

    setEmail(email)
    {
        cy.get(this.AEmail).type(email);
    }
    setPassword(password)
    {
        cy.get(this.Apass).type(password);   
    }
    settoken(token)
    {
        cy.get(this.Atoken).type(token)
    }
    clicklogin()
    {
        cy.get(this.ASignin).click()
    }
    clickbusinessProfile()
    {
        cy.get(this.businessprofile).click()
    }
    search(srch)
    {
        cy.get(this.Search).click().type(srch);

    }
    clickdots()
    {
        cy.get(this.clickthreedots).click();
    }
    clickUpdatestatus()
    {
        cy.get(this.updateStatus).click();
    }
    searchapprove(app)
    {
        cy.get(this.SearchApp).click().type(app)
    }
    clickapprove()
    {
        cy.get(this.Approve).click();
    }
    settype(Pre)
    {
        cy.get(this.Clienttype).click().type(Pre)
    }
    setprepaid()
    {
        cy.get(this.Prepaid).click();
    }
    clicksubmit()
    {
        cy.get(this.Submit).click();
    }
} export default Admin;