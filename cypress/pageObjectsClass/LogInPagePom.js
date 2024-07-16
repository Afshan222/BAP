class login
{   
    username_textbox = "input[id='email']"
    password_textbox = "input[id='password']"
    LogIn_Button = '[type="submit"]'
    dashboard_text = "#0"
    store_text = "#1"

    setEmail(email)
    {
        cy.get(this.username_textbox).type(email);
    }
    setPassword(password)
    {
        cy.get(this.password_textbox).type(password);   
    }
    clicklogin()
    {
        cy.get(this.LogIn_Button).click();
    }
    Dashboard()
    {
        cy.get(this.dashboard_text).should('have.text','Dashboard').click();
    }
    Store()
    {
        cy.get(this.store_text).should('have.text','Stores').click();
    }
}
export default login;