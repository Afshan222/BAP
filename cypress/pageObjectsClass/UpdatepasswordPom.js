class Updatepassword{
keys={
SideNav : '.SideNavstyles__Li-sc-5zebta-7.SideNav___StyledLi-sc-h7u9vc-2.jYCAbE' ,
ID : '.UserActionsstyles__ImgBox-sc-hzcs1t-1.iTFSNJ' ,
LoginandSecurity : '.DataTabsstyles__TabBtn-sc-1bwmxg8-3.gZvRjU' ,
Up :'.Buttonstyles__StyledButton-sc-xg35he-2.jZGpNm' ,
Currentpass : '#currentPassword' ,
Newpassword : '#password' ,
Confirmpassword : '#confirm_password',
Update : '.Buttonstyles__StyledButton-sc-xg35he-2.jkPrtL' 
}
NAvigator(){
    cy.get(this.keys.SideNav)
    cy.wait(9000)}
Profile(){
    cy.get(this.keys.ID).click()}    
LoginSecure(){
    cy.get(this.keys.LoginandSecurity).eq(2).click()}   
Updatepassword(){
    cy.get(this.keys.Up).click()}     
CP(){
    cy.get(this.keys.Currentpass).click().type('Afshan@1234')}    
NP(){
    cy.get(this.keys.Newpassword).click().type('Afshan@123')}
ConP(){
    cy.get(this.keys.Confirmpassword).click().type('Afshan@123')}
Updte(){
    cy.get(this.keys.Update).click()}    
Bck(){
    cy.get('.fjQajU').click()}
} export default Updatepassword;