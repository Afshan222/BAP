class CardDetails{
    Cardnumber = '#card_number'
    CardholderName ='#cardholder_name'
    ExpiryDate = '#expiry_date'
    CVC = '#cvc_cvv'
    Amount = '.Fieldstyles__InputHolder-sc-u5zg4z-1 > #amount'
    ConfirmPayment ='.CardInfoFormstyle__BtnWrap-sc-1wx7175-1 > .Buttonstyles__StyledButton-sc-xg35he-2'
    year = '.DatePickerHeaderstyles__SelectHolder-sc-14pfqep-3 > :nth-child(1)'
    month = '.react-datepicker__month-11'
    Continue = '.jbKjuW'
    SetCN(num)
    {
        cy.get(this.Cardnumber).type(num)
    }
    SetCHN(name)
    {
        cy.get(this.CardholderName).type(name)
    }
    SetED()
    {
        cy.get(this.ExpiryDate).click()
        cy.get(this.year).select('2024');
        cy.get(this.month).click()
    }
    SetCVC(cvc)
    {
        cy.get(this.CVC).type(cvc)
    }
    SetAmount()
    {
        cy.get(this.Amount).click()
    }
    SetCP()
    {
        cy.get(this.ConfirmPayment).click()
    }
    ClickCont()
    {
        cy.get(this.Continue).click()
    }
    
} export default CardDetails;