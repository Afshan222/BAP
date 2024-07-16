class CreateBusiness{
        BusinessNAme = '#business_name'
        BusinessAddress = '#address'
        BusinessContactNumber ='#contact_number'
        GStNumber = '#business_gst'
        Next = '.CreateBusinessStepOnestyles__BtnWrap-sc-svkjn8-1 > .Buttonstyles__StyledButton-sc-xg35he-2'
        ok = '.GoogleLocationSelector___StyledDiv-sc-ypk3x5-0 > .Buttonstyles__StyledButton-sc-xg35he-2'
        Search ='.Modalstyles__ModalContent-sc-ns168s-1 > .helpersstyles__StyledFormGroup-sc-dddisy-1 > .Fieldstyles__InputHolder-sc-u5zg4z-1 > .Inputstyles__StyledInput-sc-1liufj9-1'
        contactPerson ='#primary_contact_person'
        contactNumber= '#primary_contact_number'
        invoiceSchedule= '.react-select__input-container'
        company_logo = '.eRakCq > .LogoColorPickerstyles__TextHolder-sc-74m55b-0 > .LogoColorPickerstyles__BtnWrap-sc-74m55b-1 > .btn-upload > input'
        company_banner = '.goUltC > .LogoColorPickerstyles__TextHolder-sc-74m55b-0 > .LogoColorPickerstyles__BtnWrap-sc-74m55b-1 > .btn-upload > input'
        Next_1= '.CreateBusinessStepTwostyles__BtnWrap-sc-1h29def-4 > .Buttonstyles__StyledButton-sc-xg35he-2'
        StoreType = ':nth-child(4) > .Selectstyles__StyledSelect-sc-1hbblka-0 > .react-select__control > .react-select__value-container'
        Sameaasbusiness = 'span > .Buttonstyles__StyledButton-sc-xg35he-2'
        category =':nth-child(8) > .Selectstyles__StyledSelect-sc-1hbblka-0 > .react-select__control > .react-select__value-container'
        subCategory = ':nth-child(9) > .Selectstyles__StyledSelect-sc-1hbblka-0 > .react-select__control > .react-select__value-container > .react-select__input-container'
        TerCon = '.icon-check'
        Submit = '.CreateBusinessStepThreestyles__BtnWrap-sc-z4wagw-7 > .Buttonstyles__StyledButton-sc-xg35he-2'
        Logout = '[type="button"]'

        setBN(Businessname){
            cy.get(this.BusinessNAme).type(Businessname)
        }
         setBA(){
            cy.get(this.BusinessAddress).click()
        }
        SetSearch(Businessaddres){
            cy.get(this.Search).click().type(Businessaddres)
            cy.get('.pac-container .pac-item').click()
            cy.get(this.ok).click()
        }
        setBCN(Contactnumber){
            cy.get(this.BusinessContactNumber).type(Contactnumber)
        }
        setGst(GST){
            cy.get(this.GStNumber).type(GST)
        }
        setnext()
        {
            cy.get(this.Next).eq(0).click()
        }
        setcontactperson(Contactperson){
            cy.get(this.contactPerson).type(Contactperson)
        }
        setcontactnumber(Contactnumber){
            cy.get(this.contactNumber).type(Contactnumber)
        }
        SetInvoiceoption(Invoice){
            cy.get(this.invoiceSchedule).click().type(Invoice)
            cy.get('#react-select-2-option-0').contains('1st of Month').click()
        }
        setUploadlogo() {
            cy.get(this.company_logo).eq(0).selectFile('./cypress/fixtures/urban-log.png');
        }
       setUploadBanner() {
            cy.get(this.company_banner).selectFile('./cypress/fixtures/banner1.jpg');
        }
        setNext() {
            cy.get(this.Next_1).eq(0).click();
        }
        setStoreType(storetype){
            cy.get(this.StoreType).click().type(storetype)
            cy.get('#react-select-3-option-1').contains('In Store').click()
        }
        setSAB(){
        cy.get(this.Sameaasbusiness).click();
        }
        setCategory(CAt){
            cy.get(this.category).click().type(CAt)
            cy.get('#react-select-4-option-8').contains('Automotive').click()
        }
        setSubCategory(SubCAt){
            cy.get(this.subCategory).click().type(SubCAt)
            cy.get('#react-select-5-option-5').contains('Towing').click();
        }
        settercon(){
            cy.get(this.TerCon).click();
        }
        setsubmit(){
            cy.get(this.Submit).click();
        }
        setlogout(){
            cy.get(this.Logout).click();
        }
} export default CreateBusiness;
