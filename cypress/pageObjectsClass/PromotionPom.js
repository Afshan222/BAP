class promo {
   promotion = '[type="button"]'
   name = '[id="name"]'
   datepicker = '.rc-picker-input.rc-picker-input-active'
   nextmonth = '.rc-picker-header-next-btn'
   date = '.rc-picker-cell-inner'
   time = '.rc-picker-time-panel-cell-inner'
   AM = '.rc-picker-time-panel-cell-inner'
   ok = '.rc-picker-ok'
   Store = '.react-select__control.css-13cymwt-control'
   type = '#offer'
   minimumamount = '#minimum_amount'
   offer = '#point_value'
   MAxlimit = '#max_spend_value'
   color = '[type="color"]'
   upload_promotion_image = '.ChooseFilestyle__InputFile-sc-1bxy5k4-2.epWSlw'
   Create = '[type="submit"]'
   dropdown = '.Buttonstyles__StyledListBoxButton-sc-xg35he-3.Dropdownstyles__ReachListBoxButton-sc-t7bmbs-3.imbmPW.dqYisY'
   All = '.Dropdownstyles__StyledListboxPopover-sc-t7bmbs-0.jIGeyX' 
   Search ='#search'
   promo_text = '#3'
   Reset = '.Buttonstyles__StyledButton-sc-xg35he-2.jQJsxv.FilterJSX___StyledButton-sc-1awezft-2.emDCBh'
   Pending = '.promotions___StyledSpan5-sc-14mpdxu-4.jyvmjg'
   Moredetail='.PromotionMenuModalstyle__Li-sc-104foal-1.jogzvd'
   ShowPerformance = '.PromotionDetailModalstyle__Button-sc-1x5d5oq-1.daMzMB.active'
   Cross = '.material-icons-outlined'
   
    // clickpro()
    // {cy.get(this.promotion).eq(1).click();}

    // clickproname()
    // {cy.get(this.name).click().type('Dollarama')}

    // selectstartdate()
    // {   {cy.get(this.datepicker).click()}
    //     //{cy.get(this.nextmonth).click()}
    //     {cy.get(this.date).eq(35).click()}
    //     {cy.get(this.time).eq(7).click()}
    //     {cy.get(this.AM).eq(8).click()}
    //     {cy.get(this.ok).click()} }

    // selectenddate()
    // {   {cy.get(this.date).eq(36).click()}
    //     {cy.get(this.time).eq(6).click()}
    //     {cy.get(this.AM).eq(9).click()}
    //     {cy.get(this.ok).click()} }

    // selectstore() 
    // {   cy.get(this.Store).eq(4).click() 
    //     cy.get('#react-select-4-option-0').click() 
    // }

    // selecttype() 
    // {   cy.get(this.type).click() 
    //     cy.get('#react-select-5-option-0').click() }

    // Enteramounts() 
    // {   cy.get(this.minimumamount).click().type('12')
    //     cy.get(this.offer).click().type('5')
    //     cy.get(this.MAxlimit).click().type('12') }   

    // choosecolor(){
    //    cy.get('#card_bg_color_64a277ebe3952b99f72307ee').click({ force: true }) 
    //    cy.get('#card_bg_color_64a277ebe3952b99f72307ee').invoke('val', '#FF0000').trigger('change');}
    // Uplaodpromotionimage(){
    //     cy.get('.upload_promotion_image') }
    // Selectpromoimage() {
    //     cy.get(this.upload_promotion_image ).selectFile('./cypress/fixtures/promoimage.png');}
    // Clickcreate(){
    // cy.get(this.Create).click();}    
    selectoptions(){
        cy.get(this.promo_text).click();
        cy.get(this.dropdown).eq(0).click();
        cy.wait(3000);
        cy.get(this.All).contains('Active').click();
        cy.get(this.All).contains('Pending').click();
        cy.get(this.All).contains('Completed').click();
        cy.get(this.All).contains('Stopped').click();
        cy.get(this.All).contains('All').click();
        cy.wait(1000);
        cy.get(this.Search).type('Dollarama');
        //cy.get(this.Reset).click();
    }
    selectpending(){
        cy.get(this.Pending).click();
        cy.get(this.Moredetail).eq(0).click();
        cy.wait(3000);
        cy.get(this.Cross).eq(3).click();
        cy.get (this.Moredetail).eq(1).click();
        cy.wait(3000);
        cy.get(this.Cross).eq(3).click();
        cy.get (this.Moredetail).eq(2).click();
        cy.wait(3000);
        cy.get(this.Cross).eq(3).click();
        cy.get (this.Moredetail).eq(3).click();
    }
} export default promo;
