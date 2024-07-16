class StoreGroup{
    keys={
        SideNav : '.SideNavstyles__Li-sc-5zebta-7.SideNav___StyledLi-sc-h7u9vc-2.jYCAbE',
        SGroup : '.Buttonstyles__StyledButton-sc-xg35he-2.bTUjVj',
        GroupNAme : '.Inputstyles__StyledInput-sc-1liufj9-1.bdrczT',
        StoreDropdown : '.react-select__value-container.react-select__value-container--is-multi.css-hlgwow',
        click : '.Buttonstyles__StyledButton-sc-xg35he-2.jkPrtL.CreateStoreGroup___StyledButton2-sc-cjscih-1.ehVKwz',
        Search :'.Inputstyles__StyledInput-sc-1liufj9-1.dSxMZx',
        Dropdown : '.Buttonstyles__StyledListBoxButton-sc-xg35he-3.Dropdownstyles__ReachListBoxButton-sc-t7bmbs-3.imbmPW.dqYisY',
        All: '.Dropdownstyles__StyledListboxOption-sc-t7bmbs-2.SwUTI'
    }
    NAvigator(){
        cy.get(this.keys.SideNav).contains('Store Groups').click()}
    AddStoreGroupbutton(){
        cy.get(this.keys.SGroup).eq(0).click()}
    GName(){
        cy.get(this.keys.GroupNAme).type('Ballar')}   
    SDropdown(){
        cy.get(this.keys.StoreDropdown).click().type('WALMART{enter}')}
    Click(){
        cy.get(this.keys.GroupNAme).click()}
    Submit(){
        cy.get(this.keys.click).click()}  
    Selectoptions(){
            cy.get(this.keys.Dropdown).eq(0).click();
            cy.wait(3000);
            cy.get(this.keys.All).contains('Active').click();
            cy.get(this.keys.All).contains('Not Active').click();
            cy.get(this.keys.All).contains('All').click();
            cy.wait(1000);
            cy.get(this.keys.Search).type('Ballare123');}      

}export default StoreGroup;