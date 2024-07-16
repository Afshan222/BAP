class StoreVerify
{
    store_text = "#1"
    verify = '[type="button"]'
    Tranactionid = '#transaction_id'
    VerifyButton = '[type="submit"]'
    button = '.Buttonstyles__StyledButton-sc-xg35he-2.ejpFxN'

    clickStore()
    {cy.get(this.store_text).click();}
    clickVerify()
    {cy.get(this.verify).eq(5).click();}    
    clicktransaction(name)
    {cy.get(this.Tranactionid).click().type(name);}
    Codeverifybutton()
    {cy.get(this.VerifyButton).click();}
    clickbutton()
    {cy.get(this.button).eq(4).click();}

} export default StoreVerify;