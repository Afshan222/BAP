import promo from "../../pageObjectsClass/PromotionPom"

describe('Promotion' , function(){
    it('CreatePromotion', function(){
        cy.visit('https://staging:ec2-18-189-16-96.us-east-2@bapv4.staging.plastk.ca/'), { failOnStatusCode: false }
        cy.fixture('SignUp').then((SignUp) => {
        const email = SignUp.data.email
        const password = SignUp.data.pass
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('.Buttonstyles__StyledButton-sc-xg35he-2').click();
        const pro = new promo()   
    /*  pro.clickpro();
        pro.clickproname();
        cy.wait(3000);
        pro.selectstartdate();
        cy.wait(3000);
        pro.selectenddate();
        cy.wait(3000);
        pro.selectstore();
        pro.selecttype();
        pro.Enteramounts();
        cy.wait(3000);
        pro.choosecolor();
        cy.wait(1000);
        pro.Selectpromoimage();
        cy.wait(3000);
        pro.Clickcreate();*/
        pro.selectoptions();
        cy.wait(3000);
        pro.selectpending();
        })
    })
})
