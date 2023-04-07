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

    describe('template spec', () => {
        it('Basic test, low quantities, rule 1, 3 products', () => {
            cy.get('tbody > :nth-child(2) > :nth-child(9)').
        })
      })
//})