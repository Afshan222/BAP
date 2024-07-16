class EditBusiness{
    keys={
        EditBusinessProfile : '.Buttonstyles__StyledButton-sc-xg35he-2.gBmGWS' ,
        Businessname : '#business_name' ,
        ContactPerson : '#primary_contact_person' ,
        BusinessContactnumber : '#contact_number' ,
        Primarycontactnumber : '#primary_contact_number' ,
        GST: '#business_gst',
        Address : '#address' ,
        Asearch : '.Inputstyles__StyledInput-sc-1liufj9-1.bdrczT.pac-target-input',
        Searchdropdown : '.pac-container > :nth-child(1)',
        ok : '.Buttonstyles__StyledButton-sc-xg35he-2.dcNSrp' ,
        City : '#province' ,
        PostalCode : '#postal_cde',
        Uploadlogo : '.btn-upload',
        Uploadbanner : '[type="file"]' ,
        update : '.Buttonstyles__StyledButton-sc-xg35he-2.jrgogs.BusinessInformationModal___StyledButton-sc-1n3tdz2-0.dnbOWl'
    }
    BusName(){
        cy.get(this.keys.EditBusinessProfile).click()
        cy.get(this.keys.Businessname).clear().type('Vibehair')}
    Cntctper(){
        cy.get(this.keys.ContactPerson).clear().type('Afsha')}   
    bcntctnumb(){
        cy.get(this.keys.BusinessContactnumber).clear().type('03467662941')}
    Pcntctnumb(){
        cy.get(this.keys.Primarycontactnumber).clear().type('03789278986')}
    Gst(){
        cy.get(this.keys.GST).clear().type('23ASDSS2323A2Z7')}      
    baddress(){
        cy.get(this.keys.Address).click()
        cy.get(this.keys.Asearch).clear().type('76 Country Hills Dr NW, Calgary, AB T3K 4S3, Canada')
        cy.wait(6000)
        cy.get(this.keys.Searchdropdown).click()
        cy.wait(3000)
        cy.get(this.keys.ok).click()}
    Upldlogo(){
        cy.get(this.keys.Uploadlogo).eq(0).selectFile('./cypress/fixtures/shopperdrugmart.png')}   
    Upldbanner(){
        cy.get(this.keys.Uploadlogo).eq(1).selectFile('./cypress/fixtures/banner.jpg')}     
    clickUpdate(){
        cy.get(this.keys.update).click()}    

}  export default EditBusiness;