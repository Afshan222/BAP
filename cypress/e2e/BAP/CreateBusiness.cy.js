
import CreateBusiness from "../../pageObjectsClass/createbusinessPom"
describe('BusinessDetails', function () {
    it.only('CreateBusines', function () {
       cy.clearAllSessionStorage();
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('https://staging:ec2-18-189-16-96.us-east-2@bapv4.staging.plastk.ca/'), { failOnStatusCode: false }
        cy.fixture('SignUp').then((SignUp) => {
            const email = SignUp.data.email;
            const password = SignUp.data.pass;
            cy.get('#email').type(email);
            cy.get('#password').type(password);
            cy.get('.Buttonstyles__StyledButton-sc-xg35he-2').click();
            cy.wait(6000);
            const bus = new CreateBusiness()
            cy.wait(6000);
            bus.setBN("Walmart")
            bus.setBA();
            cy.wait(3000);
            bus.SetSearch("2135 Pegasus Rd NE, Calgary, AB T2E 8C3, Canada")
            bus.setBCN("(321) 312-3123")
            bus.setGst("23ASDSS2323A2Z2")
            bus.setnext();
            bus.setcontactperson("AfshanImtiaz")
            bus.setcontactnumber("(333) 333-3333")
            cy.wait(3000);
            bus.SetInvoiceoption("1st of Month")
            cy.wait(3000);
            bus.setUploadlogo();
            bus.setUploadBanner();
            cy.wait(3000);
            bus.setNext();
            cy.wait(3000);
            bus.setStoreType("In Store");
            bus.setSAB();
            bus.setCategory('Automotive');
            bus.setSubCategory('Towing');
            bus.settercon();
            bus.setsubmit();
            bus.setlogout();
        })
    })
})



