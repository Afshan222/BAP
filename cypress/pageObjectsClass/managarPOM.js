class managar{
 keys={
    SideNav : '.SideNavstyles__Li-sc-5zebta-7.SideNav___StyledLi-sc-h7u9vc-2.jYCAbE',
    AddMAnagar : '[type="button"]',
    FN : '#first_name' ,
    MN : '#middle_name' ,
    LN : '#last_name' ,
    Email : '#email' ,
    SS : '.react-select__control.css-13cymwt-control',
    Pass : '[id="password"]' ,
    confirmPass : '[id="confirm_password"]' ,
    sub : '[type="submit"]' ,
    CancelButton : '.Buttonstyles__StyledButton-sc-xg35he-2.bNGKvB.ConfirmationDialogueModal___StyledButton-sc-1dh7imk-0.jrlZWN' ,
    ContinueButton : '.Buttonstyles__StyledButton-sc-xg35he-2.kNmCal'
 }
        NAvigator(){
            cy.get(this.keys.SideNav).contains('Store Managers').click()}
        Managarbutton(){
            cy.get(this.keys.AddMAnagar).eq(0).click()}
        FirstName(){
            cy.get(this.keys.FN).type('AFshan')} 
        MiddleName(){
            cy.get(this.keys.MN).type('ABC')}
        LastName(){
            cy.get(this.keys.LN).type('Imtiaz')}   
        SelectEmail(){
            cy.get(this.keys.Email).click().type('afshan+41@plastk.ca')}
        SelectStore(){
            cy.get(this.keys.SS).eq(1).click().type('WALMART{enter}')}
        PermissionLevel(){
            cy.get(this.keys.SS).eq(0).click().type('Read Only{enter}')}
        Password(){
            cy.get(this.keys.Pass).click().type('Afshan@123')}     
        ConfirmPassword(){
            cy.get(this.keys.confirmPass).click().type('Afshan@123')}
        click(){
            cy.get(this.keys.sub).click()}   
        Cancel(){
            cy.get(this.keys.CancelButton).click()}
        Continue(){
            cy.get(this.keys.ContinueButton).click()}     

} export default managar;