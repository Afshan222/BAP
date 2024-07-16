import login from "../../pageObjectsClass/LogInPagePom";
import SignUp from "../../pageObjectsClass/SignUpPagePom";

const ln = new login();

describe('POM', function(){

beforeEach(function(){
    cy.visit ('https://staging:ec2-18-189-16-96.us-east-2@bapv4.staging.plastk.ca/'), {failOnStatusCode: false}
})
it('test 1 with valid credentials', function(){
    ln.setEmail("Afshan+18@plastk.ca")
    ln.setPassword("Afshan@123")
    ln.clicklogin();
    cy.wait(3000);
    ln.Dashboard();
    ln.Store();
 })

 it('Test 2 with valid username and invalid password', function(){
    ln.setEmail("Afshan+18@plastk.ca")
    ln.setPassword("Afshan")
    ln.clicklogin();
 })

 it('Test 3 with invalid username and valid password', function(){
    ln.setEmail("Afshan+1010@plastk.ca")
    ln.setPassword("Afshan@123")
    ln.clicklogin();
 })

 it.only('write signUp details' , function() {
 cy.fixture('SignUp').then((SignUp) => {
   const email = SignUp.data.email; 
   const password = SignUp.data.pass; 
   cy.get('input[name="email"]').type(email);
   cy.get('input[name="password"]').type(password);
   cy.get('button[type="submit"]').click();

 })
})
})

