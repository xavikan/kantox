/// <reference types="Cypress" />cd kantox

    describe('QA Test V2.1', () => {

        it('Basic test, low quantities, rule 1, 3 products', () => {
            cy.visit("https://40610796.servicio-online.net/kantox/cart_rule1_10.html")
            cy.screenshot()

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

            cy.screenshot()

      })

      it('Check products are loaded from YAML file', () => {
        cy.visit("https://40610796.servicio-online.net/kantox/TEST000_2023-04-08T22_56_51.493955_rule0_N%3D3_pN%3D0.html")
        cy.contains("Green Tea")
        cy.contains("Strawberries")
        cy.contains("Coffee")
      })

      it('Check behaviour of rule 1 - 10 products', () => {
        cy.visit("https://40610796.servicio-online.net/kantox/TEST001_2023-04-08T22_21_12.808236_rule1_N=3_pN=10.html")
      })

      it('Check behaviour of rule 2 - 10 products',  () => {
        cy.visit("https://40610796.servicio-online.net/kantox/TEST002_2023-04-08T22_26_26.125490_rule2_N=3_pN=10.html")
      })

      it('Check behaviour of rule 3 - 10 products', () => {
        cy.visit("https://40610796.servicio-online.net/kantox/TEST003_2023-04-08T22_35_28.853016_rule3_N=3_pN=10.html")
      })
 
      it('Check behaviour of rule 1 - 100 products', () => {
        cy.visit("https://40610796.servicio-online.net/kantox/TEST101_2023-04-08T23_24_29.449105_rule1_N=10_pN=100.html")
      })

      it('Check behaviour of rule 2 - 100 products', () => {
        cy.visit("https://40610796.servicio-online.net/kantox/TEST102_2023-04-08T23_27_00.760848_rule2_N=10_pN=100.html")
      })

      it('Check behaviour of rule 3 - 100 products', () => {
        cy.visit("https://40610796.servicio-online.net/kantox/TEST103_2023-04-08T23_29_23.622893_rule3_N=10_pN=100.html")
      })

      it('Check behaviour of rule 1 - 1000 products', () => {
        cy.visit("https://40610796.servicio-online.net/kantox/TEST1001_2023-04-08T23_32_42.439661_rule1_N=100_pN=1000.html")
      })

      it('Check behaviour of rule 2 - 1000 products', () => {
        cy.visit("https://40610796.servicio-online.net/kantox/TEST1002_2023-04-08T23_41_39.721578_rule2_N=66_pN=1000.html")
      })

      it('Check behaviour of rule 3 - 1000 products', () => {
        cy.visit("https://40610796.servicio-online.net/kantox/TEST1003_2023-04-08T23_47_17.642016_rule3_N=333_pN=1000.html")
      })

      it('Check behaviour of rule 1 -  1000000000 products', () => {
        cy.visit("https://40610796.servicio-online.net/kantox/TEST1000000001_2023_51_14.117296_rule1_N=66666666_pN=1000000000.html")
      })

      it('Check behaviour of rule 2 - 1000000000 products', () => {
       cy.visit("https://40610796.servicio-online.net/kantox/TEST1000000002_2023-04-08T23_57_47.702263_rule2_N=222222222_pN=1000000000.html")
      })

      it('Check behaviour of rule 3 - 1000000000 products', () => {
        cy.visit("https://40610796.servicio-online.net/kantox/TEST1000000003_2023-04-09T00_01_24.956105_rule3_N=77777777_pN=1000000000.html")
      })      
      
      it('Check if +1000 different products can be loaded - for rule 1', () => {
        // deep scenarios should be built since real different product should have different product codes
        cy.visit("https://40610796.servicio-online.net/kantox/TEST1000products1_2023-04-09T00_09_22.339330_rule1_N=13_pN=100.html")
      })    
      
      it('Check if +1000 different products can be loaded - for rule 2', () => {
        // deep scenarios should be built since real different product should have different product codes
        cy.visit("https://40610796.servicio-online.net/kantox/TEST1000products2_2023-04-09T00_14_12.084443_rule2_N=50_pN=100.html")
      })   

      it('Check if +1000 different products can be loaded - for rule 3', () => {
        // deep scenarios should be built since real different product should have different product codes
        cy.visit("https://40610796.servicio-online.net/kantox/TEST1000products3_2023-04-09T00_16_21.424250_rule3_N=66_pN=100.html")
      })   

      it('Check long names for products and preoduct codes can be entered', () => {
        // deep scenarios should be built since real different product should have different product codes
        cy.visit("https://40610796.servicio-online.net/kantox/TEST_longnames_2023-04-09T10_41_27.216335_rule1_N=10_pN=100.html")
        cy.contains("BANANA00000000000000000000000000000000000000000000000000000000000000001")
        cy.contains("Bananaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
      })

      it('Check if negative values are not allowed for prices', () => {
          // case is failing becaus price should top at 0 as discounts are applied
          cy.visit("https://40610796.servicio-online.net/kantox/TEST_negativeValues_2023-04-09T11_00_49.104916_rule1_N=10_pN=100.html")
          cy.get(':nth-child(5) > :nth-child(9)').should('have.text', '0')
      })   
      
      it('Check if random rule (for each row) works correcly', () => {
        // case is failing because price should top at 0 as discounts are applied
        cy.visit("https://40610796.servicio-online.net/kantox/TEST_randomRule_many_2023-04-09T10_21_06.599334_ruleR_N=10_pN=100.html")
     }) 

     it('Added + Products...', () => {
      cy.visit("https://40610796.servicio-online.net/kantox/cart_9068.671271959483_rule123_N=10_pN=100.html")
      cy.contains('Carrot')
      cy.contains('Vodka')
      cy.contains('Cherry')
      cy.contains('Apple')
      cy.contains('Chocoloate')
      cy.contains('Smacks')
      cy.contains('Salmon')
      cy.contains('Carrot')
   }) 


})

