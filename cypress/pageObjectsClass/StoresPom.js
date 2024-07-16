class store{
    keys={
        SideNav : '.SideNavstyles__SideNavbar-sc-5zebta-10.SideNav___StyledSideNavbar-sc-h7u9vc-0.bTPWQQ',
        Stores : '.Buttonstyles__StyledButton-sc-xg35he-2.bTUjVj' ,
        StoreNAme : '#name' ,
        Storetype : '.react-select__control.css-13cymwt-control' ,
        StoreAddress : '#address' ,
        Category : '.react-select__control.css-13cymwt-control',
        SubCategory : '.react-select__control.css-13cymwt-control' ,
        Storecontact : '#store_contact_person',
        StoreContactNumber : '#contact' ,
        StoreLogo :  '[type="file"]' ,
        Storebanner : '[type="file"]' ,
        Create : '.Buttonstyles__StyledButton-sc-xg35he-2.jkPrtL.AddStoreModal___StyledButton2-sc-1hjzsev-1.hTTTbn',
        dropdownoption : '.pac-container.pac-logo' ,
        filter1 : '.Buttonstyles__StyledListBoxButton-sc-xg35he-3.Dropdownstyles__ReachListBoxButton-sc-t7bmbs-3.imbmPW.dqYisY' ,
        All : '.Dropdownstyles__StyledListboxOption-sc-t7bmbs-2.SwUTI',
        Search : '#search' ,
        Reset : '.Buttonstyles__StyledButton-sc-xg35he-2.jQJsxv.FilterJSX___StyledButton-sc-1awezft-2.emDCBh'
    }
    Navigator(){
        cy.get(this.keys.SideNav).contains('Store').click()}
    ClickStores(){
        cy.get(this.keys.Stores).eq(1).click()}
    SN(){
        cy.get(this.keys.StoreNAme).click().type('PetalPalace')}
    Strtype(){
        cy.get(this.keys.Storetype).eq(0).click().type('In Store')}    
    CAt(){
        cy.get(this.keys.Storetype).eq(0).click().type('Retail{enter}')}   
    SubCat(){
        cy.get(this.keys.Storetype).eq(1).click().type('Grocery Stores{enter}')}   
    Contactperson(){
        cy.get(this.keys.Storecontact).click().type('AFshanImtiaz')}
    ContactNumber(){
        cy.get(this.keys.StoreContactNumber).click().type('03467662941')}   
    SA(){
        cy.get(this.keys.StoreAddress).click({ force: true })
        cy.get(this.keys.StoreAddress).type('226 Northmount Dr NW, Calgary, AB T2K 3G2, Canada')
        cy.get(this.keys.dropdownoption).click();}
    setUploadlogo(){
        cy.get(this.keys.StoreLogo).eq(0).selectFile('./cypress/fixtures/Acme.png')}
    setUploadBanner(){
        cy.get(this.keys.Storebanner).eq(1).selectFile('./cypress/fixtures/abc.jpg')}    
    clickcreate() {
        cy.get(this.keys.Create).click() }    
    Testfilter(){
        cy.get(this.keys.filter1).eq(0).click()
        cy.wait(6000);
        cy.get(this.keys.All).contains('Online').click();
        cy.wait(500);
        cy.get(this.keys.All).contains('In Store').click();
        cy.wait(1000);
        cy.get(this.keys.All).contains('All').click();}    
    SelectOptions(){
        cy.get(this.keys.filter1).eq(1).click()
        cy.wait(3000);
        cy.get(this.keys.All).contains('Closed').click();
        cy.wait(500);
        cy.get(this.keys.All).contains('Active').click();
        cy.wait(1000); 
        cy.get(this.keys.All).contains('Pending').click();
        cy.wait(500);
        cy.get(this.keys.All).contains('Deactivated').click();
        cy.wait(1000);
        cy.get(this.keys.All).contains('All').click();}  
    Search(){
        cy.get(this.keys.Search).click().type('Safeway Torncliffe').click()}    
    Reset(){
    cy.get(this.keys.Reset).click()}    
} export default store; 