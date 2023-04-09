/* describe('Vendor Search', function () {
    context('UserBundle/Desktop/Users/UserMenu', function () {
        
        beforeEach(function () {
            cy.visit("www.google.es")
        })

        it('"Before you continue to Google Search" disclaimer is shown on first visit', function () {
            cy.get('#S3BnEe').should('be.visible')                // check if element which the message "Before you continue to Google Search" is shown
                                                                  // this looks te be valid for any language
        })

        it('Google main page is shown as we accept the disclaimer', function () {
            cy.get('[class="QS5gu sy4vM"]').eq(1).click()         // click "Accept"
            cy.get('img[class="lnXdpd"]').should('be.visible')    // double check, by class
            cy.get('img[alt="Google"]').should('be.visible')      // and by alt
        })

        it('Search field can be X as something is typed', function () {
            cy.get('[class="QS5gu sy4vM"]').eq(1).click()         // click "Accept"
            cy.get('.gLFyf').type('1234')                         // type something
            cy.get('.ExCKkf > svg').click()                       // click delete X
            cy.get('.gLFyf').should('be.empty')                   // check it gets empty
        })  

    }) */

    describe('QA Test V2.1', () => {

        it('Basic test, low quantities, rule 1, 3 products', () => {
            cy.visit("https://40610796.servicio-online.net/kantox/cart_rule1_10.html")

            cy.get('tbody > :nth-child(2) > :nth-child(1)').contains("GR1")
            cy.get('tbody > :nth-child(2) > :nth-child(2)').contains("Green Tea")
            cy.get('tbody > :nth-child(2) > :nth-child(3)').contains("3.11")
            cy.get('tbody > :nth-child(2) > :nth-child(4)').contains("2")
            cy.get('tbody > :nth-child(2) > :nth-child(5)').contains("1")
            cy.get('tbody > :nth-child(2) > :nth-child(6)').contains("2")
            cy.get('tbody > :nth-child(2) > :nth-child(7)').contains("0.0")
            cy.get('tbody > :nth-child(2) > :nth-child(8)').contains("0")
            cy.get('tbody > :nth-child(2) > :nth-child(9)').contains("12.44")
            
            cy.get('tbody > :nth-child(3) > :nth-child(1)').contains("SR1")
            cy.get('tbody > :nth-child(3) > :nth-child(2)').contains("Strawberries")
            cy.get('tbody > :nth-child(3) > :nth-child(3)').contains("5.0")
            cy.get('tbody > :nth-child(3) > :nth-child(4)').contains("6")
            cy.get('tbody > :nth-child(3) > :nth-child(5)').contains("1")
            cy.get('tbody > :nth-child(3) > :nth-child(6)').contains("6")
            cy.get('tbody > :nth-child(3) > :nth-child(7)').contains("0.0")
            cy.get('tbody > :nth-child(3) > :nth-child(8)').contains("0")
            cy.get('tbody > :nth-child(3) > :nth-child(9)').contains("60")

            cy.get('tbody > :nth-child(4) > :nth-child(1)').contains("CF1")
            cy.get('tbody > :nth-child(4) > :nth-child(2)').contains("Coffee")
            cy.get('tbody > :nth-child(4) > :nth-child(3)').contains("11.23")
            cy.get('tbody > :nth-child(4) > :nth-child(4)').contains("9")
            cy.get('tbody > :nth-child(4) > :nth-child(5)').contains("1")
            cy.get('tbody > :nth-child(4) > :nth-child(6)').contains("9")
            cy.get('tbody > :nth-child(4) > :nth-child(7)').contains("0.0")
            cy.get('tbody > :nth-child(4) > :nth-child(8)').contains("0")
            cy.get('tbody > :nth-child(4) > :nth-child(9)').contains("202.14")

            cy.get(':nth-child(5) > :nth-child(9)')

      })

      it('Check products are loaded from YAML file', () => {
        cy.visit("https://40610796.servicio-online.net/kantox/TEST000_2023-04-08T22_56_51.493955_rule0_N%3D3_pN%3D0.html")
        cy.contains("Green Tea")
        cy.contains("Strawberries")
        cy.contains("Coffee")
      })
      
})