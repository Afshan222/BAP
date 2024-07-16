import Admin from "../../pageObjectsClass/AdminPom"

describe('BusinessDetails', function () {
    it.only('CreateBusines', function () {
     
        cy.visit('https://staging:ec2-18-189-16-96.us-east-2@staging.admin.plastk.ca/'), { failOnStatusCode: false }
        const admin = new Admin
        admin.setEmail("Afshan+10@plastk.ca")
        admin.setPassword("Playhard1")
        admin.settoken("888888")
        cy.wait(3000);
        admin.clicklogin();
        cy.wait(3000);
        admin.clickbusinessProfile();
        cy.wait(12000)
        admin.search("cothj1@plastk.ca");
        admin.clickdots();
        admin.clickUpdatestatus();
        admin.searchapprove("Approved")
        admin.clickapprove();
        admin.settype("Prepaid");
        admin.setprepaid();
        admin.clicksubmit();
    })
})